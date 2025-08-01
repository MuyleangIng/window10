"use client"
import styles from "./FolderContent.module.css"

export default function SkillsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Skills & Expertise</h1>

      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h2>Programming Languages</h2>
          <ul className={styles.skillList}>
            <li>Python (Advanced)</li>
            <li>JavaScript/TypeScript</li>
            <li>Java</li>
            <li>C++</li>
            <li>R</li>
            <li>MATLAB</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Quantum Computing</h2>
          <ul className={styles.skillList}>
            <li>Qiskit</li>
            <li>Cirq</li>
            <li>PennyLane</li>
            <li>Quantum Algorithms</li>
            <li>Quantum Error Correction</li>
            <li>Quantum Machine Learning</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>AI & Machine Learning</h2>
          <ul className={styles.skillList}>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Scikit-learn</li>
            <li>Keras</li>
            <li>OpenCV</li>
            <li>Natural Language Processing</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Web Development</h2>
          <ul className={styles.skillList}>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>HTML5/CSS3</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Databases & Tools</h2>
          <ul className={styles.skillList}>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Git/GitHub</li>
            <li>Docker</li>
            <li>Jupyter Notebooks</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Research & Academic</h2>
          <ul className={styles.skillList}>
            <li>Research Methodology</li>
            <li>Academic Writing</li>
            <li>Data Analysis</li>
            <li>Statistical Modeling</li>
            <li>Literature Review</li>
            <li>Conference Presentations</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Languages</h2>
          <ul className={styles.skillList}>
            <li>Khmer (Native)</li>
            <li>English (Fluent)</li>
            <li>Korean (Intermediate)</li>
            <li>Chinese (Basic)</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Soft Skills</h2>
          <ul className={styles.skillList}>
            <li>Research & Innovation</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Cross-cultural Communication</li>
            <li>Project Management</li>
            <li>Critical Thinking</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
