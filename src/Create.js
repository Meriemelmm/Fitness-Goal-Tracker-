const Create = () => {
    return ( 
      

        <div className="card">
        <div className="card-header">
          <h2 className="card-title">Create New Goal</h2>
        </div>
        <div className="card-content">
          <form className="goal-form" id="new-goal-form">
            <input type="text" placeholder="Goal title" required/>
            <input type="number" placeholder="Target" required/>
            <select required>
            <option value="">chooose</option>
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
}
 
export default Create;