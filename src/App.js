import CreateAssessmentComponent from "./components/assessment.component";
import AssessmentList from "./components/assessment-list.component";
import CreateTestComponent from "./components/test.component";
import TestCompoent from "./components/test-list.component"
import CreateQuestionComponent from "./components/question.component";
import QuestionList from "./components/question-list";
import TimerComponent from "./components/test-timer.component"
import TestScreen from "./screens/test.screen";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        {/* <CreateAssessmentComponent/>*/}
        <AssessmentList/>
        {/* <CreateTestComponent/>
        <TestCompoent/> */}
        {/* <CreateQuestionComponent/>
        <QuestionList/> */}
        {/* <TimerComponent /> */}
        {/* <TestScreen/> */}
        <Router>
          <Routes>
      <div className="app">
        <h1>Assessment List</h1>
        <Route path="/" exact render={() => <AssessmentList  />} />
        {/* Add more routes as needed */}
      </div>
      </Routes>
    </Router>
    </>
  );
}

export default App;
