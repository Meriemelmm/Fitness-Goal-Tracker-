import Home from "./Home";

const Header = () => {
  return (

    <header>

      <div className="container header-content">
        <div className="logo">
          <h1>Fitness Goal Tracker</h1>
        </div>
        <button>New Goal</button>
      </div>
    </header>
  );
}

export default Header;