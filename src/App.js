import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MovieDetails from './MovieDetails';

const Error=()=>{
 return<h1>Error</h1>
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
