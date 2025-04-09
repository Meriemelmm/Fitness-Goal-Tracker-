const Statistique = () => {
    return (  

        <div class="stats">
        <div class="stat-card">
          <div class="stat-label">Total Goals</div>
          <div class="stat-value" id="total-goals">0</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Completed Goals</div>
          <div class="stat-value" id="completed-goals">0</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Average Completion</div>
          <div class="stat-value" id="average-completion">0%</div>
        </div>
      </div>

        
    );
}
 
export default Statistique;