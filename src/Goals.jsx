import { useContext, useEffect, useState } from 'react';
import { Context } from './App';

const GoalItem = ({ id, goal, updateProgress, deleteGoal }) => {
  const [input, setInput] = useState('');
  const { toUpdate, setToUpdate, goalId, setGoalId } = useContext(Context);

  const handleAddProgress = () => {
    const amount = parseInt(input);
    if (!isNaN(amount) && amount > 0) {
      updateProgress(goal.id, amount);
      setInput('');
    }
  };

  const handleUpadte = (id) => {
    setToUpdate(true);
    setGoalId(id);
  }

  const handleDelete = () => {
    if (window.confirm(`Delete goal "${goal.name}"?`)) {
      deleteGoal(goal.id);
    }
  };

  const progressPercent = Math.min((goal.progress / goal.target) * 100, 100);

  return (
    <div className="goal-item">
      <div className="goal-header">
        <div className="goal-title">{goal.name}</div>
        <button onClick={handleDelete} className="delete-button">🗑️</button>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
      </div>
      <div className="progress-info">
        <span>{goal.progress} / {goal.target} {goal.unit}</span>
        <span>{Math.round(progressPercent)}%</span>
      </div>
      <div className="goal-actions">
        <input
          type="number"
          placeholder="Add progress"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          min="0"
        />
        <button onClick={handleAddProgress}>+</button>
      </div>
      <button onClick={() => handleUpadte(goal.id)}>update</button>
    </div>
  );
};

const Goals = ({ goals = [], updateProgress, deleteGoal }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Your Goals</h2>
      </div>
      <div className="card-content">
        <div className="goals-list">
          {goals.length === 0 ? (
            <p>No goals yet. Create your first fitness goal above!</p>
          ) : (
            goals.map((goal) => (
              <GoalItem
                key={goal.id}
                goal={goal}
                updateProgress={updateProgress}
                deleteGoal={deleteGoal}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Goals;