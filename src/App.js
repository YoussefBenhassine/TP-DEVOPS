import React from 'react';
import './App.css'; // Create this CSS file for styling

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">TP Devops</h1>
        <p className="subtitle">Réalisé par Youssef Benhassine</p>
      </header>

      <main className="main-content">
        <section className="section">
          <h2>Our Mission</h2>
          <ul>
            <li>Développer une API</li>
            <li> Dockeriser votre API</li>
            <li>Héberger votre image dans DockerHub</li>
            <li>Créer le Jenkinsfile  de ce processus</li>
          </ul>
        </section>

        <section className="cta-section">
          <h2>Get Started</h2>
          <p>Join us in building a sustainable future.</p>
          <button className="cta-button">Learn More</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 M1 ISIDS</p>
      </footer>
    </div>
  );
}

export default App;

