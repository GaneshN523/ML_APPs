import React, { useState } from 'react';
import styles from './App.module.css';

const projects = [
  {
    id: 1,
    title: "Data Analysis Toolkit",
    description: "Build an end-to-end system for data cleaning, exploratory data analysis, and visualization. Includes interactive dashboards using Streamlit.",
  },
  {
    id: 2,
    title: "Gradient Descent Visualizer",
    description: "Develop a linear regression model from scratch and visualize the gradient descent steps and parameter convergence.",
  },
  {
    id: 3,
    title: "Credit Fraud Detector",
    description: "Design a fraud detection system using an ensemble of classification algorithms, and integrate real-time detection on a simulated transaction stream.",
  },
  {
    id: 4,
    title: "Customer Segmentation Engine",
    description: "Perform unsupervised learning to segment customers based on behavior and purchase history, with interactive tools for personalized marketing.",
  },
  {
    id: 5,
    title: "Stock Price Predictor",
    description: "Forecast stock prices using both ARIMA and LSTM models, with a dashboard comparing predictions and performance metrics.",
  },
  {
    id: 6,
    title: "Mental Health Chatbot",
    description: "Create a conversational chatbot with sentiment analysis that adapts responses based on the user's emotional tone.",
  }
];

const App = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ML_APPs Projects</h1>
      <div className={styles.grid}>
        {projects.map(project => (
          <div key={project.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <div className={styles.buttons}>
              <button 
                className={styles.btn} 
                onClick={() => openModal(project)}
              >
                View Description
              </button>
              <button 
                className={styles.btn} 
                onClick={() => window.open('https://huggingface.co/AIBotsForYou', '_blank')}
              >
                Visit
              </button>
              <button 
                className={styles.btn} 
                onClick={() => window.open('https://github.com/GaneshN523', '_blank')}
              >
                Code
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
            <button className={styles.closeBtn} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
