import React from 'react';
import QuestionPanelComponent from "../components/question-panel.component";
import TestFooterComponent from "../components/test-footer.component";
import TestHeaderComponent from "../components/test-header.component";
import './test.screen.css';

const TestScreen = () => {
  return (
    <div className="test-screen-container">
      <TestHeaderComponent />
      <div className="content-container">
        <QuestionPanelComponent />
      </div>
      <TestFooterComponent />
    </div>
  );
}

export default TestScreen;
