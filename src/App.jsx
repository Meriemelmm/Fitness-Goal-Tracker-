import { useState, useEffect, createContext } from 'react';
import Header from './Header';
import Statistique from './Statistique';
import Create from './Create';
import Goals from './Goals';
import Update from './update';

export const Context = createContext();

function App() {
  const [toUpdate, setToUpdate] = useState(false);
  const [goalId, setGoalId] = useState(null);
  const values = {
    toUpdate, setToUpdate, goalId,
    setGoalId
  };

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


  const [goals, setGoals] = useState(() => {
    try {
      const saved = localStorage.getItem("goals");
      return saved ? validateGoals(JSON.parse(saved)) : [];
    } catch (e) {
      console.error("Error parsing saved goals", e);
      return [];
    }
  });


  useEffect(() => {
    try {
      localStorage.setItem("goals", JSON.stringify(goals));
    } catch (e) {
      console.error("Error saving goals", e);
    }
  }, [goals]);


  const addGoal = (newGoal) => {
    setGoals([...goals, {
      ...newGoal,
      id: Date.now(),
      progress: 0
    }]);
  };


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


  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const [goal, setGoal] = useState([]);

  const updateGoal = (id, title, target, unit) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        return {
          ...goal,
          name: title,
          target,
          unit
        };
      }
      return goal;
    }));
  };

  let Goal = goalId != null ? goals.find(goal => goal.id === goalId) : null;

  let content = toUpdate
    ? <Update goal={Goal} updateGoal={updateGoal} />
    : <Create addGoal={addGoal} />;

  return (
    <Context.Provider value={values}>
      <div className="App">
        <Header />
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Fitness Goal Tracker</h1>
            <p className="page-description">Set, track, and achieve your fitness goals.</p>
          </div>
          <Statistique goals={goals} />
          {content}
          <Goals
            goals={goals}
            updateProgress={updateProgress}
            deleteGoal={deleteGoal}
          />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
