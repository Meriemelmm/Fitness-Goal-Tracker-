const Statistique = ({goals}) => {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(g => g.progress >= g.target).length;
  const completionRate = totalGoals > 0 
    ? Math.round((completedGoals / totalGoals) * 100) 
    : 0;
    return (  

        <div class="stats">
        <div class="stat-card">
          <div class="stat-label">Total Goals</div>
          <div class="stat-value" id="total-goals">{totalGoals}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Completed Goals</div>
          <div class="stat-value" id="completed-goals">{completedGoals}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Average Completion</div>
          <div class="stat-value" id="average-completion">{completionRate}%</div>
        </div>
      </div>

        
    );
}
 
export default Statistique;