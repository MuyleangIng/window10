"use client"
import { useState, useRef } from "react"
import {
  Play,
  Search,
  Settings,
  GitBranch,
  Bug,
  Package,
  FileText,
  Folder,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react"
import styles from "./VSCodeEditor.module.css"

export default function VSCodeEditor() {
  const [activeFile, setActiveFile] = useState("portfolio.js")
  const [openFiles, setOpenFiles] = useState(["portfolio.js", "styles.css", "README.md"])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [explorerExpanded, setExplorerExpanded] = useState(true)
  const [terminalVisible, setTerminalVisible] = useState(true)
  const [code, setCode] = useState(getFileContent("portfolio.js"))
  const textareaRef = useRef(null)

  function getFileContent(filename) {
    const files = {
      "portfolio.js": `// Portfolio Application - Main Component
import React, { useState, useEffect } from 'react';
import './styles.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects data
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  const handleProjectClick = (project) => {
    window.open(project.url, '_blank');
  };

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Raj Sharma - Full Stack Developer</h1>
        <p>Building amazing web experiences with React & Node.js</p>
      </header>
      
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;`,
      "styles.css": `/* Portfolio Styles */
.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 50px;
  padding: 40px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

.portfolio-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.portfolio-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.projects-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.project-card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid #e0e0e0;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #333;
}

.project-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: #f0f0f0;
  color: #333;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #666;
}

/* Responsive Design */
@media (max-width: 768px) {
  .portfolio-header h1 {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}`,
      "README.md": `# Portfolio Website

A modern, interactive portfolio website built with React and Next.js, designed as a Windows 10 desktop clone.

## Features

- 🖥️ Windows 10 UI Clone
- 📱 Fully Responsive Design
- ⚡ Fast Performance
- 🎨 Modern Animations
- 📊 Interactive Components

## Tech Stack

- **Frontend**: React.js, Next.js
- **Styling**: CSS Modules, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

\`\`\`bash
# Clone the repository
git clone https://github.com/thefstack/windows10-portfolio.git

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

## Project Structure

\`\`\`
├── components/          # React components
├── data/               # Static data files
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
└── pages/              # Next.js pages
\`\`\`

## Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint

## Contact

- **Email**: rajsharmahwh19@gmail.com
- **LinkedIn**: [linkedin.com/in/thefstack](https://linkedin.com/in/thefstack)
- **GitHub**: [github.com/thefstack](https://github.com/thefstack)
- **Website**: [www.thefstack.com](https://www.thefstack.com)

## License

MIT License - see LICENSE file for details.`,
    }
    return files[filename] || ""
  }

  const handleFileClick = (filename) => {
    setActiveFile(filename)
    setCode(getFileContent(filename))
  }

  const closeFile = (filename, e) => {
    e.stopPropagation()
    const newOpenFiles = openFiles.filter((f) => f !== filename)
    setOpenFiles(newOpenFiles)

    if (filename === activeFile && newOpenFiles.length > 0) {
      const newActiveFile = newOpenFiles[newOpenFiles.length - 1]
      setActiveFile(newActiveFile)
      setCode(getFileContent(newActiveFile))
    }
  }

  const runCode = () => {
    console.log("Running code...")
    // Simulate code execution
  }

  return (
    <div className={styles.vscode}>
      {/* Activity Bar */}
      <div className={styles.activityBar}>
        <div className={styles.activityItem}>
          <Folder size={24} />
        </div>
        <div className={styles.activityItem}>
          <Search size={24} />
        </div>
        <div className={styles.activityItem}>
          <GitBranch size={24} />
        </div>
        <div className={styles.activityItem}>
          <Bug size={24} />
        </div>
        <div className={styles.activityItem}>
          <Package size={24} />
        </div>
        <div className={styles.activityItemBottom}>
          <Settings size={24} />
        </div>
      </div>

      {/* Sidebar */}
      {!sidebarCollapsed && (
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarTitle}>
              <button className={styles.expandButton} onClick={() => setExplorerExpanded(!explorerExpanded)}>
                {explorerExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              EXPLORER
            </div>
          </div>

          {explorerExpanded && (
            <div className={styles.fileExplorer}>
              <div className={styles.folderHeader}>
                <ChevronDown size={16} />
                <span>PORTFOLIO</span>
              </div>
              <div className={styles.fileList}>
                <div className={styles.fileItem} onClick={() => handleFileClick("portfolio.js")}>
                  <FileText size={16} />
                  <span>portfolio.js</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleFileClick("styles.css")}>
                  <FileText size={16} />
                  <span>styles.css</span>
                </div>
                <div className={styles.fileItem} onClick={() => handleFileClick("README.md")}>
                  <FileText size={16} />
                  <span>README.md</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Tab Bar */}
        <div className={styles.tabBar}>
          {openFiles.map((file) => (
            <div
              key={file}
              className={`${styles.tab} ${file === activeFile ? styles.activeTab : ""}`}
              onClick={() => handleFileClick(file)}
            >
              <FileText size={16} />
              <span>{file}</span>
              <button className={styles.closeTab} onClick={(e) => closeFile(file, e)}>
                <X size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className={styles.editor}>
          <div className={styles.editorHeader}>
            <div className={styles.editorActions}>
              <button className={styles.runButton} onClick={runCode}>
                <Play size={16} />
                Run
              </button>
            </div>
          </div>
          <div className={styles.editorContent}>
            <div className={styles.lineNumbers}>
              {code.split("\n").map((_, index) => (
                <div key={index} className={styles.lineNumber}>
                  {index + 1}
                </div>
              ))}
            </div>
            <textarea
              ref={textareaRef}
              className={styles.codeArea}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
            />
          </div>
        </div>

        {/* Terminal */}
        {terminalVisible && (
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalTabs}>
                <div className={styles.terminalTab}>
                  <span>Terminal</span>
                </div>
              </div>
              <div className={styles.terminalActions}>
                <button onClick={() => setTerminalVisible(false)}>
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className={styles.terminalContent}>
              <div className={styles.terminalLine}>
                <span className={styles.prompt}>portfolio@windows10:~$</span>
                <span className={styles.command}>npm run dev</span>
              </div>
              <div className={styles.terminalOutput}>
                <div>✓ Ready in 2.3s</div>
                <div>○ Local: http://localhost:3000</div>
                <div>○ Network: http://192.168.1.100:3000</div>
                <div></div>
                <div className={styles.terminalLine}>
                  <span className={styles.prompt}>portfolio@windows10:~$</span>
                  <span className={styles.cursor}>|</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
