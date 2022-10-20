import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>
        <Profile />
        <Login />
      </h1>
    </div>
  );
}

export default App;
