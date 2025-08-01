"use client"
import styles from "./FolderContent.module.css"

export default function EducationFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Education</h1>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h2>Master of Science in AI Convergence</h2>
          <span className={styles.educationYear}>2024-Present</span>
        </div>
        <p className={styles.educationInstitution}>Pukyong National University (PKNU), South Korea</p>
        <div className={styles.educationDetails}>
          <p>
            <strong>Major:</strong> AI Convergence with focus on Quantum Computing
          </p>
          <p>
            <strong>Research Areas:</strong>
          </p>
          <ul>
            <li>Quantum Simulator Development</li>
            <li>Quantum Error Correction</li>
            <li>Quantum Machine Learning</li>
            <li>AI-Quantum Computing Convergence</li>
          </ul>
          <p>
            <strong>Status:</strong> Currently pursuing
          </p>
        </div>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h2>Bachelor of Science in Computer Science</h2>
          <span className={styles.educationYear}>2020-2024</span>
        </div>
        <p className={styles.educationInstitution}>Royal University of Phnom Penh (RUPP), Cambodia</p>
        <div className={styles.educationDetails}>
          <p>
            <strong>Specialization:</strong> Software Engineering & AI
          </p>
          <p>
            <strong>Key Coursework:</strong>
          </p>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Machine Learning & Deep Learning</li>
            <li>Software Engineering</li>
            <li>Database Systems</li>
            <li>Computer Networks</li>
            <li>Web Development</li>
          </ul>
          <p>
            <strong>Status:</strong> Graduated with Honors
          </p>
        </div>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h2>High School Diploma</h2>
          <span className={styles.educationYear}>2017-2020</span>
        </div>
        <p className={styles.educationInstitution}>Preah Sisowath High School, Cambodia</p>
        <div className={styles.educationDetails}>
          <p>
            <strong>Focus:</strong> Science & Mathematics
          </p>
          <p>
            <strong>Achievement:</strong> Top 5% of graduating class
          </p>
        </div>
      </div>
    </div>
  )
}
