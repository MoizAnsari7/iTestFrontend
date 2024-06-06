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

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" Component={ TestScreen } />
          <Route path="/dashboard" Component={TestScreen } />
          <Route path="/test" Component={ CreateTestComponent } />
          <Route path="/question" Component={ CreateQuestionForm } />
          <Route path="/assessment" Component={ CreateAssessmentForm  } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
