"use client"
import { useState } from "react"
import { Delete } from "lucide-react"
import styles from "./Calculator.module.css"

export default function Calculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? String(num) : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".")
    }
  }

  const clear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = Number.parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue
      case "-":
        return firstValue - secondValue
      case "×":
        return firstValue * secondValue
      case "÷":
        return firstValue / secondValue
      case "=":
        return secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = Number.parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div className={styles.displayValue}>{display}</div>
      </div>

      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.function}`} onClick={clear}>
          C
        </button>
        <button
          className={`${styles.button} ${styles.function}`}
          onClick={() => setDisplay(display.slice(0, -1) || "0")}
        >
          <Delete size={18} />
        </button>
        <button className={`${styles.button} ${styles.function}`} onClick={() => performOperation("÷")}>
          ÷
        </button>
        <button className={`${styles.button} ${styles.operator}`} onClick={() => performOperation("×")}>
          ×
        </button>

        <button className={styles.button} onClick={() => inputNumber(7)}>
          7
        </button>
        <button className={styles.button} onClick={() => inputNumber(8)}>
          8
        </button>
        <button className={styles.button} onClick={() => inputNumber(9)}>
          9
        </button>
        <button className={`${styles.button} ${styles.operator}`} onClick={() => performOperation("-")}>
          -
        </button>

        <button className={styles.button} onClick={() => inputNumber(4)}>
          4
        </button>
        <button className={styles.button} onClick={() => inputNumber(5)}>
          5
        </button>
        <button className={styles.button} onClick={() => inputNumber(6)}>
          6
        </button>
        <button className={`${styles.button} ${styles.operator}`} onClick={() => performOperation("+")}>
          +
        </button>

        <button className={styles.button} onClick={() => inputNumber(1)}>
          1
        </button>
        <button className={styles.button} onClick={() => inputNumber(2)}>
          2
        </button>
        <button className={styles.button} onClick={() => inputNumber(3)}>
          3
        </button>
        <button className={`${styles.button} ${styles.equals} ${styles.tall}`} onClick={handleEquals}>
          =
        </button>

        <button className={`${styles.button} ${styles.wide}`} onClick={() => inputNumber(0)}>
          0
        </button>
        <button className={styles.button} onClick={inputDecimal}>
          .
        </button>
      </div>
    </div>
  )
}
