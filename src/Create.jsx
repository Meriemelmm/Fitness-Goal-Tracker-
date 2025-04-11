import { useState } from "react";

const Create = ({ addGoal }) => {
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [unit, setUnit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !target || !unit) return;

    addGoal({
      name,
      target: parseInt(target),
      unit
    });

    // Reset form
    setName('');
    setTarget('');
    setUnit('');
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Create New Goal</h2>
      </div>
      <div className="card-content">
        <form className="goal-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Goal name" 
            required 
          />
          <input 
            type="number" 
            value={target} 
            onChange={(e) => setTarget(e.target.value)} 
            placeholder="Target" 
            min="1"
            required 
          />
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)} 
            required
          >
            <option value="">Choose unit</option>
            <option value="steps">Steps</option>
            <option value="glasses">Glasses of water</option>
            <option value="minutes">Minutes</option>
            <option value="workouts">Workouts</option>
          </select>
          <button type="submit">Add Goal</button>
        </form>
      </div>
    </div>
  );
};

export default Create;