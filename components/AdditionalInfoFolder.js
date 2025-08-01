"use client"
import styles from "./FolderContent.module.css"

export default function AdditionalInfoFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Additional Information</h1>

      <div className={styles.additionalInfo}>
        <div className={styles.infoSection}>
          <h2>Current Research</h2>
          <div className={styles.researchInfo}>
            <h3>Master's Research at PKNU (2024-Present)</h3>
            <p className={styles.researchDescription}>
              Currently pursuing Master's degree in AI Convergence at Pukyong National University, South Korea, focusing
              on the intersection of artificial intelligence and quantum computing technologies.
            </p>
            <h4>Research Areas:</h4>
            <ul className={styles.researchList}>
              <li>
                <strong>Quantum Simulator Development:</strong> Building and optimizing quantum circuit simulators for
                various quantum algorithms and applications.
              </li>
              <li>
                <strong>Quantum Error Correction:</strong> Investigating novel approaches to mitigate quantum
                decoherence and improve quantum computation reliability.
              </li>
              <li>
                <strong>Quantum Machine Learning:</strong> Exploring hybrid classical-quantum algorithms for enhanced
                machine learning performance and quantum advantage.
              </li>
              <li>
                <strong>AI-Quantum Convergence:</strong> Developing frameworks that leverage AI techniques to optimize
                quantum computing processes and vice versa.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h2>Academic Background</h2>
          <div className={styles.academicBackground}>
            <h3>Royal University of Phnom Penh (RUPP)</h3>
            <p>
              Completed Bachelor's degree in Computer Science with focus on AI and software engineering. RUPP is
              Cambodia's premier institution for higher education and research.
            </p>

            <h4>Key Achievements:</h4>
            <ul>
              <li>Graduated with Honors in Computer Science</li>
              <li>Specialized in Machine Learning and AI applications</li>
              <li>Completed thesis on "AI Applications in Cambodian Context"</li>
              <li>Active member of Computer Science Student Association</li>
            </ul>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h2>Research Interests</h2>
          <ul className={styles.interestsList}>
            <li>Quantum Computing & Quantum Information</li>
            <li>Quantum Machine Learning Algorithms</li>
            <li>Quantum Error Correction & Fault Tolerance</li>
            <li>AI-Quantum Hybrid Systems</li>
            <li>Quantum Cryptography & Security</li>
            <li>Quantum Optimization Problems</li>
            <li>Noisy Intermediate-Scale Quantum (NISQ) Applications</li>
          </ul>
        </div>

        <div className={styles.infoSection}>
          <h2>Publications & Research Output</h2>
          <div className={styles.publications}>
            <h4>Conference Papers (In Progress):</h4>
            <ul>
              <li>"Quantum Error Correction in NISQ Era: A Comparative Study" - Submitted to QCMC 2024</li>
              <li>"Hybrid Quantum-Classical Approach for Optimization Problems" - In preparation</li>
            </ul>

            <h4>Research Projects:</h4>
            <ul>
              <li>Quantum Circuit Simulator with Error Modeling</li>
              <li>Quantum Machine Learning Framework Development</li>
              <li>Comparative Analysis of Quantum Error Correction Codes</li>
            </ul>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h2>International Experience</h2>
          <div className={styles.internationalExp}>
            <h3>South Korea (2024-Present)</h3>
            <p>
              Currently studying at Pukyong National University in Busan, South Korea. This international experience has
              provided exposure to cutting-edge research facilities and collaboration with researchers from diverse
              backgrounds.
            </p>

            <h4>Cultural Adaptation:</h4>
            <ul>
              <li>Learning Korean language and culture</li>
              <li>Participating in international student programs</li>
              <li>Collaborating with multinational research teams</li>
              <li>Presenting research in international conferences</li>
            </ul>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h2>Future Goals</h2>
          <ul className={styles.futureGoals}>
            <li>Complete Master's degree with distinction in AI Convergence</li>
            <li>Publish high-impact research papers in quantum computing journals</li>
            <li>Pursue PhD in Quantum Computing or related field</li>
            <li>Contribute to quantum technology development in Southeast Asia</li>
            <li>Establish research collaborations between Cambodia and international institutions</li>
            <li>Develop practical quantum applications for real-world problems</li>
          </ul>
        </div>

        <div className={styles.infoSection}>
          <h2>Personal Interests</h2>
          <ul className={styles.personalInterests}>
            <li>Quantum Physics & Theoretical Computer Science</li>
            <li>Technology Innovation & Entrepreneurship</li>
            <li>Cross-cultural Exchange & International Relations</li>
            <li>Traditional Cambodian Culture & Modern Technology Integration</li>
            <li>Science Communication & Education</li>
            <li>Sustainable Technology Development</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
