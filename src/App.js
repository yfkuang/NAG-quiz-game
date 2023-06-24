import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Index from './components/pages/landing/'
import Question from './components/pages/question/'
import { AnswerProvider } from './context/answerContext'

function App() {

  return (
    <div className="App">

      <AnswerProvider>
        <Router>
          <Routes>
            {/* Index */}
            <Route exact path="/NAG-quiz-game/" element={<Index />} />
            {/* Question */}
            <Route path="/NAG-quiz-game/:id" element={<Question />} />
          </Routes>
        </Router>
      </AnswerProvider>

    </div>
  );
}

export default App;
