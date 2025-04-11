const Statistique = ({ goals }) => {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(g => g.progress >= g.target).length;
  const completionRate = totalGoals > 0
    ? Math.round((completedGoals / totalGoals) * 100)
    : 0;
  return (

    <div className="stats">
      <div className="stat-card">
        <div className="stat-label">Total Goals</div>
        <div className="stat-value" id="total-goals">{totalGoals}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Completed Goals</div>
        <div className="stat-value" id="completed-goals">{completedGoals}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Average Completion</div>
        <div className="stat-value" id="average-completion">{completionRate}%</div>
      </div>
    </div>


  );
}

export default Statistique;