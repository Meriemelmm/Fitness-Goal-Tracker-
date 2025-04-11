import { useContext, useState } from "react";
import { Context } from "./App";
const Update = ({ goal, updateGoal }) => {

  const { setToUpdate, setGoalId } = useContext(Context);
  const [title, setTitle] = useState(goal.name);
  const [target, setTarget] = useState(goal.target);
  const [unit, setUnit] = useState(goal.unit);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !target || !unit) return;

    updateGoal(goal.id, title, target, unit);

  }
  const handleCel = () => {

     setToUpdate(false);
    setGoalId(null);

  }
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">update New Goal</h2>
      </div>
      <div className="card-content">
        <form className="goal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <button type="submit">update Goal</button>
          <button type="button" onClick={ handleCel}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Update;