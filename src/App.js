import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import MovieDetail from './Pages/MovieDetails';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:id' element={<MovieDetail/>}/>
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
