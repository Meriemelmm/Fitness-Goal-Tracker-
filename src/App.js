import { useState, useEffect } from 'react';
import Header from './Header';
import Statistique from './Statistique';
import Home from './Home';
import Create from './Create';
import Goals from './Goals';

function App() {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("goals");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = (newGoal) => {
    setGoals(newGoal);
  };

  const updateProgress = (id, amount) => {
    const updatedGoals = goals.map(goal => {
      if (goal.id === id) {
        return {
          ...goal,
          progress: Math.min(goal.progress + amount, goal.target),
        };
      }
      return goal;
    });

    setGoals(updatedGoals);
  };
  const deleteGoal = (id) => {
    const updatedGoals = goals.filter(goal => goal.id !== id);
    setGoals(updatedGoals);
  };
  

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Fitness Goal Tracker</h1>
          <p className="page-description">Set, track, and achieve your fitness goals.</p>
        </div>
        <Statistique />
        <Create addGoal={addGoal} />
        <Goals goals={goals} updateProgress={updateProgress} deleteGoal={deleteGoal} />

      </div>
    </div>
  );
}

export default App;
