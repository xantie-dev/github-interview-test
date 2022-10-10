import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((item, index) => {
          return <Route key={index} {...item} />
        })}
      </Routes>
    </div>
  );
}

export default App;
