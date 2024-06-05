import CreateAssessmentComponent from "./components/assessment.component";
import AssessmentList from "./components/assessment-list.component";
import CreateTestComponent from "./components/test.component";
import TestCompoent from "./components/test-list.component"
import CreateQuestionComponent from "./components/question.component";
import QuestionList from "./components/question-list";
import TimerComponent from "./components/test-timer.component"
import TestScreen from "./screens/test.screen";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestList from "./components/test-list.component";

function App() {
  return (
    <>
        <Router>
          <Routes>
      <div className="app">
        <Route path="/" exact render={() => <AssessmentList  />} />
        <Route path="/testlist" exact render={() => <TestList  />} />
        <Route path="/testDasboard" exact render={() => <TestScreen  />} />
        </div>
      </Routes>
    </Router>
    </>
  );
}

export default App;
