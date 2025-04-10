import { useState, useEffect } from 'react';
import Header from './Header';
import Statistique from './Statistique';
import Create from './Create';
import Goals from './Goals';

function App() {
  // Fonction de validation des données
  const validateGoals = (data) => {
    if (!Array.isArray(data)) return [];
    return data.filter(item => 
      item && 
      typeof item.id === 'number' && 
      typeof item.name === 'string' &&
      typeof item.target === 'number' &&
      typeof item.unit === 'string' &&
      typeof item.progress === 'number'
    );
  };

  // Initialisation de l'état avec validation
  const [goals, setGoals] = useState(() => {
    try {
      const saved = localStorage.getItem("goals");
      return saved ? validateGoals(JSON.parse(saved)) : [];
    } catch (e) {
      console.error("Error parsing saved goals", e);
      return [];
    }
  });

  // Sauvegarde dans localStorage
  useEffect(() => {
    try {
      localStorage.setItem("goals", JSON.stringify(goals));
    } catch (e) {
      console.error("Error saving goals", e);
    }
  }, [goals]);

  // Ajouter un nouvel objectif
  const addGoal = (newGoal) => {
    setGoals([...goals, {
      ...newGoal,
      id: Date.now(),
      progress: 0
    }]);
  };

  // Mettre à jour la progression
  const updateProgress = (id, amount) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        return {
          ...goal,
          progress: Math.min(goal.progress + amount, goal.target),
        };
      }
      return goal;
    }));
  };

  // Supprimer un objectif
  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Fitness Goal Tracker</h1>
          <p className="page-description">Set, track, and achieve your fitness goals.</p>
        </div>
        <Statistique goals={goals} />
        <Create addGoal={addGoal} />
        <Goals 
          goals={goals} 
          updateProgress={updateProgress} 
          deleteGoal={deleteGoal} 
        />
      </div>
    </div>
  );
}

export default App;
