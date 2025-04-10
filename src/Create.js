// const Create = () => {
//     return ( 
      

//         <div className="card">
//         <div className="card-header">
//           <h2 className="card-title">Create New Goal</h2>
//         </div>
//         <div className="card-content">
//           <form className="goal-form" id="new-goal-form">
//             <input type="text" placeholder="Goal title" required/>
//             <input type="number" placeholder="Target" required/>
//             <select required>
//             <option value="">chooose</option>
//               <option value="steps">Steps</option>
//               <option value="glasses">Glasses</option>
//               <option value="minutes">Minutes</option>
//               <option value="sessions">Sessions</option>
//               <option value="calories">Calories</option>
//               <option value="points">Points</option>
//             </select>
//             <button type="submit">Add</button>
//           </form>
//         </div>
//       </div>

//      );
// }
 
// export default Create;
import { useState } from "react";

const Create = ({ addGoal }) => {
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !target || !category) return;

    const newGoal = {
      id: Date.now(),
      title,
      target: parseInt(target),
      category,
      progress: 0
    };

    addGoal(newGoal); 
    setTitle('');
    setTarget('');
    setCategory('');
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Create New Goal</h2>
      </div>
      <div className="card-content">
        <form className="goal-form" onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Goal title" required />
          <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} placeholder="Target" required />
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Choose</option>
            <option value="steps">Steps</option>
            <option value="glasses">Glasses</option>
            <option value="minutes">Minutes</option>
            <option value="sessions">Sessions</option>
            <option value="calories">Calories</option>
            <option value="points">Points</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
