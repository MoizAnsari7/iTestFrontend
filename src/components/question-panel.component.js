import React from 'react';
import './QuestionPanelComponent.css';
import OptionPanelComponent from './option-panel.component';
import QuestionComponent from './question-box';
import QuestionPanelListComponent from './QuestionPanelList.component';

const QuestionPanelComponent = () => {
    return (
        <div className="question-panel">
            <QuestionPanelListComponent/>
            {/* Left Section */}
            <QuestionComponent/>        
            <div className="divider"></div>
            {/* Right Section */}
            <OptionPanelComponent/>
        </div>
    );
}

export default QuestionPanelComponent; 