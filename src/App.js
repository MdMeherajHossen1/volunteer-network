import logo from './logo.svg';
import './App.css';

function App() {
  const colors = ['green', 'blue', 'yellow']
  const style = {
    backgruondColor: Math.ceil(Math.random().colors.length)
  }
  return (
    <div className="App" style={style}>
      <h2>this is something like tahn</h2>
    </div>
  );
}

export default App;
