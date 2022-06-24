import Home from './components/Home';
import EventDetail from "./components/EventDetail";
import './App.css';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'

function App() {
    const Wrapper = (props) => {
        const params = useParams();
        return <EventDetail id={params.id} />;
    }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/event/:id' element={<Wrapper/>}/>
      </Routes>
    </Router>
  );
}

export default App;
