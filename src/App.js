

import Header from './Header';
import Statistique from './Statistique';
import Home from './Home';
import Create from './Create';
import Goals from './Goals';

function App() {
  // const title="hello ana";
  // const number=45;
  // const link="google.com";
  return (

    <div className="App">
      <Header></Header>
      <div className="container">
      <div class="page-header">
      <h1 class="page-title">Fitness Goal Tracker</h1>
      <p class="page-description">Set, track, and achieve your fitness goals.</p>
    </div>
    <Statistique></Statistique>
    <Create></Create>
    <Goals></Goals>




      </div>
    </div>
  );
}

export default App;
