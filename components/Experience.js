"use client"
import styles from "./Experience.module.css"

export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.resumeHeader}>
        <h1>Ing Muyleang</h1>
        <div className={styles.contactInfo}>
          <p>Busan, South Korea / Phnom Penh, Cambodia</p>
          <p>Email: muyleanging@gmail.com</p>
          <p>Phone: +82 10 1234 5678</p>
          <p>
            <a href="https://www.linkedin.com/in/muyleang-ing-7977912a0/" target="_blank" rel="noopener noreferrer">
              LinkedIn: linkedin.com/in/muyleang-ing-7977912a0/
            </a>
          </p>
          <p>
            <a href="https://github.com/Muyleang" target="_blank" rel="noopener noreferrer">
              Github: github.com/Muyleang
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/@muyleanging" target="_blank" rel="noopener noreferrer">
              YouTube: youtube.com/@muyleanging
            </a>
          </p>
        </div>
      </div>

      <section className={styles.resumeSection}>
        <h2>Current Position</h2>
        <div className={styles.experienceItem}>
          <div className={styles.jobHeader}>
            <h3>Master's Student & Research Assistant - Pukyong National University</h3>
            <span className={styles.date}>March 2024 - Present</span>
          </div>
          <p>
            Pursuing Master's degree in AI Convergence with specialization in Quantum Computing and Machine Learning.
            Conducting cutting-edge research in quantum error correction, quantum machine learning, and AI-quantum
            hybrid systems.
          </p>
          <ul>
            <li>
              Developing novel quantum error correction algorithms achieving 15% better performance than classical
              decoders using machine learning techniques.
            </li>
            <li>
              Implementing quantum machine learning frameworks for optimization problems with demonstrated quantum
              advantage on specific datasets.
            </li>
            <li>
              Publishing research in top-tier quantum computing journals and presenting at international conferences.
            </li>
            <li>
              Collaborating with industry partners to apply quantum computing solutions to real-world problems in
              logistics and cryptography.
            </li>
            <li>
              Mentoring undergraduate students in quantum programming and contributing to quantum education initiatives
              in Southeast Asia.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Research Projects</h2>

        <div className={styles.projectItem}>
          <h3>
            Quantum Error Correction with Machine Learning Enhancement |{" "}
            <a
              href="https://github.com/Muyleang/quantum-error-correction"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              GitHub Repository
            </a>
          </h3>
          <ul>
            <li>
              Developed comprehensive quantum error correction simulator supporting surface codes, color codes, and
              topological codes with realistic noise models.
            </li>
            <li>
              Implemented machine learning-enhanced syndrome decoding achieving 15% better performance than classical
              decoders.
            </li>
            <li>
              Created visualization tools for quantum error propagation and correction process using matplotlib and
              quantum circuit diagrams.
            </li>
            <li>Achieved 99.9% logical qubit fidelity with distance-5 surface codes under 0.1% physical error rate.</li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>
            Quantum Machine Learning Framework |{" "}
            <a
              href="https://github.com/Muyleang/quantum-ml-framework"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              GitHub Repository
            </a>
          </h3>
          <ul>
            <li>
              Built hybrid quantum-classical machine learning framework supporting VQC, QAOA, and quantum neural
              networks with automatic differentiation.
            </li>
            <li>
              Implemented quantum feature maps and ansatz circuits optimized for different problem types
              (classification, regression, clustering).
            </li>
            <li>
              Achieved quantum advantage on specific datasets with 25% improvement in accuracy over classical methods
              for high-dimensional feature spaces.
            </li>
            <li>
              Integrated with major quantum computing platforms (IBM Quantum, Google Cirq, Rigetti) for real hardware
              execution.
            </li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>
            Khmer Language Quantum NLP |{" "}
            <a
              href="https://github.com/Muyleang/khmer-quantum-nlp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              GitHub Repository
            </a>
          </h3>
          <ul>
            <li>
              First quantum-enhanced NLP framework specifically designed for Khmer language processing with cultural
              context awareness.
            </li>
            <li>
              Developed quantum word embeddings that capture semantic relationships in Khmer text better than classical
              methods by 18%.
            </li>
            <li>
              Created comprehensive Khmer language dataset with 100K+ sentences for quantum NLP research and
              applications.
            </li>
            <li>
              Implemented quantum sentiment analysis achieving 92% accuracy on Khmer social media text classification.
            </li>
          </ul>
        </div>

        <div className={styles.projectItem}>
          <h3>
            Quantum Computing Education Platform |{" "}
            <a
              href="https://quantum-learn.ingmuyleang.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Live Platform
            </a>
          </h3>
          <ul>
            <li>
              Built comprehensive quantum computing education platform with interactive circuit builder, quantum
              algorithm visualizations, and hands-on exercises.
            </li>
            <li>
              Features multilingual support (English, Khmer, Korean) making quantum education accessible to Southeast
              Asian students.
            </li>
            <li>
              Integrated with IBM Quantum, Google Quantum AI, and other cloud quantum computers for real hardware
              experience.
            </li>
            <li>
              Currently used by 2000+ students across 15 universities in Cambodia, Vietnam, and Thailand for quantum
              computing education.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Skills</h2>
        <ul className={styles.skillsList}>
          <li>
            <strong>Programming Languages:</strong> Python, C++, JavaScript, MATLAB, R
          </li>
          <li>
            <strong>Quantum Computing:</strong> Qiskit, Cirq, PennyLane, Quantum Error Correction, Quantum Algorithms,
            Quantum Machine Learning
          </li>
          <li>
            <strong>AI/ML Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV
          </li>
          <li>
            <strong>Web Development:</strong> React.js, Next.js, Node.js, Express.js, HTML5/CSS3
          </li>
          <li>
            <strong>Databases & Tools:</strong> MongoDB, PostgreSQL, Git, Docker, Jupyter Notebooks
          </li>
          <li>
            <strong>Languages:</strong> Khmer (Native), English (Fluent), Korean (Intermediate), Chinese (Basic)
          </li>
        </ul>
      </section>

      <section className={styles.resumeSection}>
        <h2>Education</h2>
        <div className={styles.educationItem}>
          <h3>Master of Science in AI Convergence (Pukyong National University, South Korea)</h3>
          <span className={styles.date}>2024 - Present</span>
          <p>Focus: Quantum Computing, Quantum Machine Learning, AI-Quantum Hybrid Systems</p>
        </div>
        <div className={styles.educationItem}>
          <h3>Bachelor of Science in Computer Science (Royal University of Phnom Penh, Cambodia)</h3>
          <span className={styles.date}>2020 - 2024</span>
          <p>Graduated with Honors, Specialization: AI and Software Engineering</p>
        </div>
      </section>

      <section className={styles.resumeSection}>
        <h2>Publications & Achievements</h2>
        <ul>
          <li>
            <strong>Research Papers:</strong> 3 papers published in quantum computing journals, 2 conference
            presentations
          </li>
          <li>
            <strong>Open Source:</strong> 10+ quantum computing repositories with 500+ GitHub stars
          </li>
          <li>
            <strong>Education Impact:</strong> Quantum education platform used by 2000+ students across Southeast Asia
          </li>
          <li>
            <strong>Industry Collaboration:</strong> Quantum optimization solutions adopted by 3 companies
          </li>
        </ul>
      </section>

      <section className={styles.resumeSection}>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <strong>Research Interests:</strong> Quantum Error Correction, Quantum Machine Learning, Quantum
            Cryptography, AI-Quantum Convergence
          </li>
          <li>
            <strong>Location:</strong> Currently in Busan, South Korea; Open to international opportunities
          </li>
          <li>
            <strong>Availability:</strong> Available for research collaborations, internships, and quantum computing
            consulting
          </li>
        </ul>
      </section>
    </div>
  )
}
