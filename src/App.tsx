import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <nav>
        <Link to="/vite-react-router/">Home</Link>
        {' | '}
        <Link to="/vite-react-router/contact">Contact</Link>
      </nav>

      <Outlet />

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
