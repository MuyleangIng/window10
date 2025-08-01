"use client"
import { useState, useRef, useEffect } from "react"
import { Save, FileText, Printer, Search } from "lucide-react"
import styles from "./Notepad.module.css"

export default function Notepad() {
  const [content, setContent] = useState(`Welcome to Notepad!

This is a simple text editor that mimics the classic Windows Notepad application.

You can:
- Type and edit text
- Use keyboard shortcuts
- Save your work (simulated)
- Print documents (simulated)

Features:
✓ Real-time text editing
✓ Character and word count
✓ Find functionality
✓ Classic Windows UI

Start typing to replace this text...`)

  const [fileName, setFileName] = useState("Untitled.txt")
  const [isModified, setIsModified] = useState(false)
  const [findVisible, setFindVisible] = useState(false)
  const [findText, setFindText] = useState("")
  const textareaRef = useRef(null)
  const findInputRef = useRef(null)

  useEffect(() => {
    if (findVisible && findInputRef.current) {
      findInputRef.current.focus()
    }
  }, [findVisible])

  const handleContentChange = (e) => {
    setContent(e.target.value)
    setIsModified(true)
  }

  const handleSave = () => {
    // Simulate save functionality
    setIsModified(false)
    console.log("File saved:", fileName)

    // Create and download file
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handlePrint = () => {
    // Simulate print functionality
    const printWindow = window.open("", "_blank")
    printWindow.document.write(`
      <html>
        <head>
          <title>Print - ${fileName}</title>
          <style>
            body { font-family: 'Courier New', monospace; padding: 20px; }
            pre { white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <pre>${content}</pre>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }

  const handleFind = () => {
    setFindVisible(!findVisible)
  }

  const findNext = () => {
    if (!findText || !textareaRef.current) return

    const textarea = textareaRef.current
    const text = textarea.value
    const startPos = textarea.selectionEnd
    const foundIndex = text.toLowerCase().indexOf(findText.toLowerCase(), startPos)

    if (foundIndex !== -1) {
      textarea.setSelectionRange(foundIndex, foundIndex + findText.length)
      textarea.focus()
    } else {
      // Search from beginning
      const foundFromStart = text.toLowerCase().indexOf(findText.toLowerCase())
      if (foundFromStart !== -1) {
        textarea.setSelectionRange(foundFromStart, foundFromStart + findText.length)
        textarea.focus()
      }
    }
  }

  const getStats = () => {
    const chars = content.length
    const words = content.trim() ? content.trim().split(/\s+/).length : 0
    const lines = content.split("\n").length
    return { chars, words, lines }
  }

  const stats = getStats()

  return (
    <div className={styles.notepad}>
      {/* Menu Bar */}
      <div className={styles.menuBar}>
        <div className={styles.menuItems}>
          <button className={styles.menuItem}>File</button>
          <button className={styles.menuItem}>Edit</button>
          <button className={styles.menuItem}>Format</button>
          <button className={styles.menuItem}>View</button>
          <button className={styles.menuItem}>Help</button>
        </div>
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <button className={styles.toolButton} onClick={handleSave} title="Save">
          <Save size={16} />
        </button>
        <button className={styles.toolButton} onClick={handlePrint} title="Print">
          <Printer size={16} />
        </button>
        <button className={styles.toolButton} onClick={handleFind} title="Find">
          <Search size={16} />
        </button>
        <div className={styles.separator}></div>
        <span className={styles.fileName}>
          <FileText size={16} />
          {fileName}
          {isModified ? "*" : ""}
        </span>
      </div>

      {/* Find Bar */}
      {findVisible && (
        <div className={styles.findBar}>
          <span>Find:</span>
          <input
            ref={findInputRef}
            type="text"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && findNext()}
            className={styles.findInput}
            placeholder="Enter text to find..."
          />
          <button onClick={findNext} className={styles.findButton}>
            Find Next
          </button>
          <button onClick={() => setFindVisible(false)} className={styles.findButton}>
            Close
          </button>
        </div>
      )}

      {/* Text Area */}
      <div className={styles.editorContainer}>
        <textarea
          ref={textareaRef}
          value={content}
          onChange={handleContentChange}
          className={styles.textArea}
          placeholder="Start typing..."
          spellCheck={false}
        />
      </div>

      {/* Status Bar */}
      <div className={styles.statusBar}>
        <span>Lines: {stats.lines}</span>
        <span>Words: {stats.words}</span>
        <span>Characters: {stats.chars}</span>
        <span className={styles.encoding}>UTF-8</span>
      </div>
    </div>
  )
}
