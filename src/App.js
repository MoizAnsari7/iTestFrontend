import CreateAssessmentComponent from "./components/assessment.component";
import AssessmentList from "./components/assessment-list.component";
import CreateTestComponent from "./components/test.component";
import TestCompoent from "./components/test-list.component"
import CreateQuestionComponent from "./components/question.component";
import QuestionList from "./components/question-list";

function App() {
  return (
    <>
        {/* <CreateAssessmentComponent/>
        <AssessmentList/> */}
        {/* <CreateTestComponent/>
        <TestCompoent/> */}
        <CreateQuestionComponent/>
        <QuestionList/>
    </>
  );
}

export default App;
