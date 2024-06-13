import CreateAssessmentComponent from "./components/assessment.component";
import AssessmentList from "./components/assessment-list.component";
import CreateTestComponent from "./components/test.component";
import TestCompoent from "./components/test-list.component"
import CreateQuestionComponent from "./components/question.component";
import QuestionList from "./components/question-list";
import TimerComponent from "./components/test-timer.component"
import TestScreen from "./screens/test.screen";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import TestList from "./components/test-list.component";
import CreateAssessmentForm from "./components/assessment.component";
import CreateQuestionForm from "./components/question.component";
import TestWithQuestionListDashboard from "./components/question-test-dashboard";
import OptionsComponent from "./components/options-component";
import TestResult from "./screens/test-result-screen";
// import addOptionForm from "./components/option.component";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" Component={ TestScreen } />
          <Route path="/dashboard" Component={TestScreen } />
          <Route path="/addtest" Component={ CreateTestComponent } />
          <Route path="/testlist" Component={ TestCompoent } />
          <Route path="/addquestion" Component={ CreateQuestionForm } />
          <Route path="/questionlist" Component={ QuestionList  } />
          <Route path="/addassessment" Component={ CreateAssessmentForm  } />
          <Route path="/assessmentlist" Component={ AssessmentList } />    
          <Route path="/testDashboard" Component={ TestWithQuestionListDashboard } />
          <Route path="/addOption" Component={ OptionsComponent } />
          <Route path="/testResult" Component={ TestResult } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
