import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Index from './components/pages/landing/'
import Question from './components/pages/question/'

function App() {

  return (
    <div className="App">
      
      <Router>
          <Routes>
            {/* Index */}
            <Route exact path="/" element={<Index/>} />
            {/* Question */}
            <Route path="/fighter/:id" element={<Question/>} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;