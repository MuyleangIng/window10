"use client"
import styles from "./FolderContent.module.css"

export default function PersonalInfoFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Personal Information</h1>

      <div className={styles.infoCard}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Name:</span>
          <span className={styles.infoValue}>Ing Muyleang</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Location:</span>
          <span className={styles.infoValue}>Busan, South Korea / Phnom Penh, Cambodia</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Nationality:</span>
          <span className={styles.infoValue}>Cambodian</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Current Status:</span>
          <span className={styles.infoValue}>Master's Student & Quantum Computing Researcher</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Research Focus:</span>
          <span className={styles.infoValue}>Quantum Computing, AI Convergence, Quantum Machine Learning</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>University:</span>
          <span className={styles.infoValue}>Pukyong National University (PKNU)</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Availability:</span>
          <span className={styles.infoValue}>Available for Research Collaboration & Internships</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Location Preference:</span>
          <span className={styles.infoValue}>Open to international opportunities</span>
        </div>
      </div>
    </div>
  )
}
