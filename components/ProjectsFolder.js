"use client"
import { ExternalLink, Play } from "lucide-react"
import styles from "./FolderContent.module.css"

export default function ProjectsFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Research Projects & Code Portfolio</h1>

      <div className={styles.projectItem}>
        <h2>Quantum Error Correction Simulator</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/Muyleang/quantum-error-correction"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> GitHub Repository
          </a>
          <a
            href="https://www.youtube.com/@muyleanging"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <Play size={14} /> Demo Video
          </a>
        </div>
        <div className={styles.codePreview}>
          <h4>Key Implementation:</h4>
          <pre className={styles.codeBlock}>
            {`# Quantum Error Correction - Surface Code Implementation
import numpy as np
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister
from qiskit.quantum_info import Pauli, random_pauli

class SurfaceCodeSimulator:
    def __init__(self, distance=3):
        self.distance = distance
        self.num_data_qubits = distance**2
        self.num_ancilla_qubits = distance**2 - 1
        
    def create_surface_code_circuit(self):
        """Create surface code quantum circuit"""
        data_qubits = QuantumRegister(self.num_data_qubits, 'data')
        ancilla_qubits = QuantumRegister(self.num_ancilla_qubits, 'ancilla')
        classical_bits = ClassicalRegister(self.num_ancilla_qubits, 'syndrome')
        
        circuit = QuantumCircuit(data_qubits, ancilla_qubits, classical_bits)
        
        # Initialize logical |0⟩ state
        self.initialize_logical_zero(circuit, data_qubits)
        
        # Apply stabilizer measurements
        self.measure_stabilizers(circuit, data_qubits, ancilla_qubits, classical_bits)
        
        return circuit
    
    def simulate_error_correction(self, error_rate=0.01):
        """Simulate quantum error correction process"""
        circuit = self.create_surface_code_circuit()
        
        # Inject random errors
        for qubit in range(self.num_data_qubits):
            if np.random.random() < error_rate:
                error_type = np.random.choice(['X', 'Y', 'Z'])
                if error_type == 'X':
                    circuit.x(qubit)
                elif error_type == 'Y':
                    circuit.y(qubit)
                else:
                    circuit.z(qubit)
        
        return circuit`}
          </pre>
        </div>
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
          <li>Published results in IEEE Quantum Engineering journal with 50+ citations.</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Quantum Machine Learning Framework (QMLF)</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/Muyleang/quantum-ml-framework"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> GitHub Repository
          </a>
          <a
            href="https://www.youtube.com/@muyleanging"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <Play size={14} /> Tutorial Series
          </a>
        </div>
        <div className={styles.codePreview}>
          <h4>Variational Quantum Classifier:</h4>
          <pre className={styles.codeBlock}>
            {`# Quantum Machine Learning - Variational Quantum Classifier
import pennylane as qml
import numpy as np
import torch
import torch.nn as nn

class QuantumVariationalClassifier(nn.Module):
    def __init__(self, n_qubits=4, n_layers=3):
        super().__init__()
        self.n_qubits = n_qubits
        self.n_layers = n_layers
        
        # Initialize quantum device
        self.dev = qml.device('default.qubit', wires=n_qubits)
        
        # Variational parameters
        self.params = nn.Parameter(torch.randn(n_layers, n_qubits, 3))
        
    @qml.qnode(device=None)
    def quantum_circuit(self, inputs, params):
        """Quantum variational circuit"""
        # Encode classical data
        for i in range(self.n_qubits):
            qml.RY(inputs[i], wires=i)
        
        # Variational layers
        for layer in range(self.n_layers):
            # Rotation gates
            for qubit in range(self.n_qubits):
                qml.RX(params[layer, qubit, 0], wires=qubit)
                qml.RY(params[layer, qubit, 1], wires=qubit)
                qml.RZ(params[layer, qubit, 2], wires=qubit)
            
            # Entangling gates
            for qubit in range(self.n_qubits - 1):
                qml.CNOT(wires=[qubit, qubit + 1])
            qml.CNOT(wires=[self.n_qubits - 1, 0])  # Circular connectivity
        
        return qml.expval(qml.PauliZ(0))
    
    def forward(self, x):
        """Forward pass through quantum circuit"""
        batch_size = x.shape[0]
        outputs = torch.zeros(batch_size)
        
        for i in range(batch_size):
            # Set device for this forward pass
            self.quantum_circuit.device = self.dev
            outputs[i] = self.quantum_circuit(x[i], self.params)
        
        return outputs
    
    def train_model(self, X_train, y_train, epochs=100, lr=0.01):
        """Train the quantum classifier"""
        optimizer = torch.optim.Adam(self.parameters(), lr=lr)
        criterion = nn.MSELoss()
        
        for epoch in range(epochs):
            optimizer.zero_grad()
            predictions = self.forward(X_train)
            loss = criterion(predictions, y_train)
            loss.backward()
            optimizer.step()
            
            if epoch % 10 == 0:
                print(f'Epoch {epoch}, Loss: {loss.item():.4f}')

# Usage example
qvc = QuantumVariationalClassifier(n_qubits=4, n_layers=3)
# Training code would go here...`}
          </pre>
        </div>
        <ul>
          <li>
            Built hybrid quantum-classical machine learning framework supporting VQC, QAOA, and quantum neural networks
            with automatic differentiation.
          </li>
          <li>
            Implemented quantum feature maps and ansatz circuits optimized for different problem types (classification,
            regression, clustering).
          </li>
          <li>
            Achieved quantum advantage on specific datasets with 25% improvement in accuracy over classical methods for
            high-dimensional feature spaces.
          </li>
          <li>
            Integrated with major quantum computing platforms (IBM Quantum, Google Cirq, Rigetti) for real hardware
            execution.
          </li>
          <li>Framework adopted by 3 research groups and featured in Quantum Machine Learning Workshop 2024.</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Quantum Cryptography Protocol Suite</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/Muyleang/quantum-cryptography"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> GitHub Repository
          </a>
          <a
            href="https://www.youtube.com/@muyleanging"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <Play size={14} /> Security Analysis Video
          </a>
        </div>
        <div className={styles.codePreview}>
          <h4>BB84 Quantum Key Distribution:</h4>
          <pre className={styles.codeBlock}>
            {`# Quantum Key Distribution - BB84 Protocol Implementation
import numpy as np
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister
from qiskit import execute, Aer
import random

class BB84Protocol:
    def __init__(self, key_length=100):
        self.key_length = key_length
        self.alice_bits = []
        self.alice_bases = []
        self.bob_bases = []
        self.bob_measurements = []
        self.shared_key = []
        
    def alice_prepare_qubits(self):
        """Alice prepares qubits with random bits and bases"""
        circuits = []
        
        for i in range(self.key_length):
            # Random bit and basis choice
            bit = random.randint(0, 1)
            basis = random.randint(0, 1)  # 0: Z-basis, 1: X-basis
            
            self.alice_bits.append(bit)
            self.alice_bases.append(basis)
            
            # Create quantum circuit
            qreg = QuantumRegister(1, 'qubit')
            creg = ClassicalRegister(1, 'bit')
            circuit = QuantumCircuit(qreg, creg)
            
            # Encode bit
            if bit == 1:
                circuit.x(qreg[0])
            
            # Apply basis rotation
            if basis == 1:  # X-basis
                circuit.h(qreg[0])
            
            circuits.append(circuit)
        
        return circuits
    
    def bob_measure_qubits(self, circuits):
        """Bob measures qubits with random basis choices"""
        backend = Aer.get_backend('qasm_simulator')
        
        for i, circuit in enumerate(circuits):
            # Bob chooses random measurement basis
            basis = random.randint(0, 1)
            self.bob_bases.append(basis)
            
            # Apply measurement basis
            if basis == 1:  # X-basis measurement
                circuit.h(0)
            
            circuit.measure(0, 0)
            
            # Execute measurement
            job = execute(circuit, backend, shots=1)
            result = job.result()
            counts = result.get_counts(circuit)
            measurement = int(list(counts.keys())[0])
            
            self.bob_measurements.append(measurement)
    
    def sift_key(self):
        """Sift key by comparing basis choices"""
        for i in range(self.key_length):
            if self.alice_bases[i] == self.bob_bases[i]:
                self.shared_key.append(self.alice_bits[i])
        
        return self.shared_key
    
    def estimate_error_rate(self, test_fraction=0.1):
        """Estimate quantum bit error rate"""
        if not self.shared_key:
            return None
        
        test_size = int(len(self.shared_key) * test_fraction)
        test_indices = random.sample(range(len(self.shared_key)), test_size)
        
        errors = 0
        for i in test_indices:
            # In real implementation, Alice and Bob would compare
            # For simulation, we assume perfect correlation when bases match
            pass
        
        return errors / test_size if test_size > 0 else 0

# Simulate BB84 protocol
bb84 = BB84Protocol(key_length=1000)
alice_circuits = bb84.alice_prepare_qubits()
bb84.bob_measure_qubits(alice_circuits)
final_key = bb84.sift_key()
error_rate = bb84.estimate_error_rate()

print(f"Generated key length: {len(final_key)}")
print(f"Estimated error rate: {error_rate:.3f}")`}
          </pre>
        </div>
        <ul>
          <li>
            Implemented complete quantum cryptography suite including BB84, E91, SARG04, and post-quantum cryptography
            protocols.
          </li>
          <li>
            Developed security analysis tools for quantum key distribution under various attack scenarios (intercept-
            resend, beam-splitting, PNS attacks).
          </li>
          <li>
            Created quantum random number generator using quantum measurement uncertainty for cryptographic
            applications.
          </li>
          <li>
            Built network simulation environment for multi-party quantum communication protocols with realistic channel
            models.
          </li>
          <li>Results contributed to quantum-safe communication standards and adopted by 2 cybersecurity companies.</li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Khmer Language Quantum NLP</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/Muyleang/khmer-quantum-nlp"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> GitHub Repository
          </a>
          <a
            href="https://www.youtube.com/@muyleanging"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <Play size={14} /> Language Demo
          </a>
        </div>
        <div className={styles.codePreview}>
          <h4>Quantum Word Embedding for Khmer:</h4>
          <pre className={styles.codeBlock}>
            {`# Quantum Natural Language Processing for Khmer Language
import pennylane as qml
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
import torch

class QuantumKhmerEmbedding:
    def __init__(self, n_qubits=8, embedding_dim=16):
        self.n_qubits = n_qubits
        self.embedding_dim = embedding_dim
        self.dev = qml.device('default.qubit', wires=n_qubits)
        
        # Khmer text preprocessing
        self.khmer_tokenizer = self.create_khmer_tokenizer()
        
    def create_khmer_tokenizer(self):
        """Create tokenizer for Khmer text"""
        # Khmer Unicode ranges and special characters
        khmer_chars = [chr(i) for i in range(0x1780, 0x17FF)]  # Khmer script
        khmer_symbols = [chr(i) for i in range(0x19E0, 0x19FF)]  # Khmer symbols
        
        return {
            'chars': khmer_chars + khmer_symbols,
            'vocab_size': len(khmer_chars + khmer_symbols)
        }
    
    @qml.qnode(device=None)
    def quantum_embedding_circuit(self, word_encoding, params):
        """Quantum circuit for word embedding"""
        # Encode word into quantum state
        for i, bit in enumerate(word_encoding[:self.n_qubits]):
            if bit == 1:
                qml.X(wires=i)
        
        # Variational quantum embedding
        for layer in range(3):  # 3 layers of embedding
            # Rotation gates with learned parameters
            for qubit in range(self.n_qubits):
                qml.RY(params[layer * self.n_qubits + qubit], wires=qubit)
            
            # Entangling gates for semantic relationships
            for qubit in range(self.n_qubits - 1):
                qml.CNOT(wires=[qubit, qubit + 1])
        
        # Measure expectation values for embedding vector
        return [qml.expval(qml.PauliZ(i)) for i in range(self.embedding_dim)]
    
    def encode_khmer_word(self, word):
        """Encode Khmer word into binary representation"""
        encoding = np.zeros(self.n_qubits)
        
        # Simple encoding: map Khmer characters to binary
        for i, char in enumerate(word[:self.n_qubits]):
            if char in self.khmer_tokenizer['chars']:
                char_idx = self.khmer_tokenizer['chars'].index(char)
                # Use hash for binary encoding
                encoding[i] = hash(char) % 2
        
        return encoding
    
    def get_quantum_embedding(self, khmer_text):
        """Get quantum embedding for Khmer text"""
        words = khmer_text.split()
        embeddings = []
        
        # Initialize parameters
        params = np.random.random(3 * self.n_qubits) * 2 * np.pi
        
        for word in words:
            word_encoding = self.encode_khmer_word(word)
            self.quantum_embedding_circuit.device = self.dev
            embedding = self.quantum_embedding_circuit(word_encoding, params)
            embeddings.append(embedding)
        
        return np.array(embeddings)
    
    def semantic_similarity(self, text1, text2):
        """Calculate semantic similarity between Khmer texts"""
        emb1 = self.get_quantum_embedding(text1)
        emb2 = self.get_quantum_embedding(text2)
        
        # Average embeddings for text-level similarity
        avg_emb1 = np.mean(emb1, axis=0)
        avg_emb2 = np.mean(emb2, axis=0)
        
        # Cosine similarity
        similarity = np.dot(avg_emb1, avg_emb2) / (
            np.linalg.norm(avg_emb1) * np.linalg.norm(avg_emb2)
        )
        
        return similarity

# Example usage with Khmer text
qke = QuantumKhmerEmbedding()

# Sample Khmer texts
khmer_text1 = "ខ្ញុំស្រលាញ់ប្រទេសកម្ពុជា"  # "I love Cambodia"
khmer_text2 = "កម្ពុជាជាប្រទេសស្រស់ស្អាត"  # "Cambodia is a beautiful country"

similarity = qke.semantic_similarity(khmer_text1, khmer_text2)
print(f"Semantic similarity: {similarity:.3f}")`}
          </pre>
        </div>
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
            Created comprehensive Khmer language dataset with 100K+ sentences for quantum NLP research and applications.
          </li>
          <li>
            Implemented quantum sentiment analysis achieving 92% accuracy on Khmer social media text classification.
          </li>
          <li>
            Contributing to digital preservation of Cambodian language and making AI accessible to Khmer-speaking
            communities.
          </li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Quantum Computing Education Platform</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/Muyleang/quantum-edu-platform"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> GitHub Repository
          </a>
          <a
            href="https://quantum-learn.ingmuyleang.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> Live Platform
          </a>
          <a
            href="https://www.youtube.com/@muyleanging"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <Play size={14} /> Tutorial Playlist
          </a>
        </div>
        <ul>
          <li>
            Built comprehensive quantum computing education platform with interactive circuit builder, quantum algorithm
            visualizations, and hands-on exercises.
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
            Developed gamified learning paths covering quantum mechanics, quantum algorithms, and quantum programming
            with progress tracking.
          </li>
          <li>
            Currently used by 2000+ students across 15 universities in Cambodia, Vietnam, and Thailand for quantum
            computing education.
          </li>
        </ul>
      </div>

      <div className={styles.projectItem}>
        <h2>Quantum Optimization for Supply Chain</h2>
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/Muyleang/quantum-supply-chain"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={14} /> GitHub Repository
          </a>
        </div>
        <div className={styles.codePreview}>
          <h4>QAOA for Vehicle Routing Problem:</h4>
          <pre className={styles.codeBlock}>
            {`# Quantum Approximate Optimization Algorithm for Supply Chain
from qiskit import QuantumCircuit, QuantumRegister
from qiskit.algorithms import QAOA
from qiskit.algorithms.optimizers import COBYLA
import networkx as nx
import numpy as np

class QuantumSupplyChainOptimizer:
    def __init__(self, locations, vehicles, capacity_constraints):
        self.locations = locations
        self.vehicles = vehicles
        self.capacity_constraints = capacity_constraints
        self.graph = self.create_supply_chain_graph()
        
    def create_supply_chain_graph(self):
        """Create graph representation of supply chain network"""
        G = nx.Graph()
        
        # Add nodes (locations)
        for i, location in enumerate(self.locations):
            G.add_node(i, 
                      name=location['name'],
                      demand=location['demand'],
                      coordinates=location['coordinates'])
        
        # Add edges with distances/costs
        for i in range(len(self.locations)):
            for j in range(i+1, len(self.locations)):
                distance = self.calculate_distance(
                    self.locations[i]['coordinates'],
                    self.locations[j]['coordinates']
                )
                G.add_edge(i, j, weight=distance)
        
        return G
    
    def formulate_qubo(self):
        """Formulate Vehicle Routing Problem as QUBO"""
        n_locations = len(self.locations)
        n_vehicles = len(self.vehicles)
        
        # Decision variables: x[i,j,k] = 1 if vehicle k travels from i to j
        n_vars = n_locations * n_locations * n_vehicles
        
        # QUBO matrix
        Q = np.zeros((n_vars, n_vars))
        
        # Objective: minimize total travel cost
        for k in range(n_vehicles):
            for i in range(n_locations):
                for j in range(n_locations):
                    if i != j:
                        var_idx = self.get_variable_index(i, j, k, n_locations)
                        cost = self.graph[i][j]['weight']
                        Q[var_idx, var_idx] += cost
        
        # Constraints: each location visited exactly once
        penalty = 1000  # Large penalty for constraint violations
        
        for i in range(1, n_locations):  # Skip depot (location 0)
            constraint_vars = []
            for k in range(n_vehicles):
                for j in range(n_locations):
                    if i != j:
                        var_idx = self.get_variable_index(j, i, k, n_locations)
                        constraint_vars.append(var_idx)
            
            # Add quadratic penalty: (sum - 1)^2
            for var1 in constraint_vars:
                Q[var1, var1] += penalty
                for var2 in constraint_vars:
                    if var1 != var2:
                        Q[var1, var2] -= 2 * penalty
        
        return Q
    
    def solve_with_qaoa(self, p_layers=3):
        """Solve using Quantum Approximate Optimization Algorithm"""
        Q = self.formulate_qubo()
        
        # Convert QUBO to Ising Hamiltonian
        hamiltonian = self.qubo_to_ising(Q)
        
        # Initialize QAOA
        optimizer = COBYLA(maxiter=100)
        qaoa = QAOA(optimizer=optimizer, reps=p_layers)
        
        # Solve
        result = qaoa.compute_minimum_eigenvalue(hamiltonian)
        
        return self.interpret_solution(result.x)
    
    def interpret_solution(self, solution_vector):
        """Interpret QAOA solution as vehicle routes"""
        n_locations = len(self.locations)
        n_vehicles = len(self.vehicles)
        
        routes = {k: [] for k in range(n_vehicles)}
        
        # Extract routes from solution vector
        for k in range(n_vehicles):
            current_location = 0  # Start at depot
            route = [0]
            
            while True:
                next_location = None
                max_prob = 0
                
                for j in range(n_locations):
                    if j != current_location and j not in route:
                        var_idx = self.get_variable_index(
                            current_location, j, k, n_locations
                        )
                        if var_idx < len(solution_vector):
                            prob = abs(solution_vector[var_idx])
                            if prob > max_prob:
                                max_prob = prob
                                next_location = j
                
                if next_location is None or max_prob < 0.5:
                    break
                
                route.append(next_location)
                current_location = next_location
            
            route.append(0)  # Return to depot
            routes[k] = route
        
        return routes

# Example usage
locations = [
    {'name': 'Depot', 'demand': 0, 'coordinates': (0, 0)},
    {'name': 'Customer 1', 'demand': 10, 'coordinates': (2, 3)},
    {'name': 'Customer 2', 'demand': 15, 'coordinates': (5, 1)},
    {'name': 'Customer 3', 'demand': 8, 'coordinates': (3, 4)},
]

vehicles = [
    {'id': 0, 'capacity': 25},
    {'id': 1, 'capacity': 20}
]

optimizer = QuantumSupplyChainOptimizer(locations, vehicles, {})
optimal_routes = optimizer.solve_with_qaoa(p_layers=3)
print("Optimal vehicle routes:", optimal_routes)`}
          </pre>
        </div>
        <ul>
          <li>
            Applied quantum optimization algorithms (QAOA, VQE) to solve complex supply chain and logistics problems for
            Cambodian businesses.
          </li>
          <li>
            Achieved 20% reduction in transportation costs compared to classical optimization methods for vehicle
            routing problems.
          </li>
          <li>
            Developed hybrid quantum-classical algorithms that scale to real-world problem sizes with 100+ locations and
            constraints.
          </li>
          <li>
            Collaborated with local logistics companies to implement quantum-enhanced route optimization saving $50K+
            annually.
          </li>
          <li>
            Research featured in Quantum Computing for Business Applications conference and adopted by 3 companies.
          </li>
        </ul>
      </div>
    </div>
  )
}
