"use client"
import styles from "./FolderContent.module.css"
import { Mail, Phone, Globe, MapPin, Github, Linkedin, Youtube } from "lucide-react"

export default function ContactFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Contact Information</h1>

      <div className={styles.contactCard}>
        <div className={styles.contactItem}>
          <Mail size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Email</span>
            <a href="mailto:muyleanging@gmail.com" className={styles.contactValue}>
              muyleanging@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Phone size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Phone</span>
            <a href="tel:+821012345678" className={styles.contactValue}>
              +82 10 1234 5678 (Korea)
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <MapPin size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Location</span>
            <span className={styles.contactValue}>Busan, South Korea / Phnom Penh, Cambodia</span>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Github size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>GitHub</span>
            <a
              href="https://github.com/Muyleang"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              github.com/Muyleang
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Youtube size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>YouTube</span>
            <a
              href="https://www.youtube.com/@muyleanging"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              youtube.com/@muyleanging
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Linkedin size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/muyleang-ing-7977912a0/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              linkedin.com/in/muyleang-ing-7977912a0/
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Globe size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Research Profile</span>
            <a
              href="https://www.researchgate.net/profile/Ing-Muyleang"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              ResearchGate Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
