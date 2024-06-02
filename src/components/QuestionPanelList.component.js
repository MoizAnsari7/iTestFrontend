import React from 'react';
import './QuestionPanelListComponent.css';

const QuestionPanelListComponent = () => {
    return (
        <div className="side-panel">
            {/* Header with circles */}
            <div className="side-panel-header">
                <div className="status-circle answered">1</div>
                <div className="status-circle not-answered">2</div>
                <div className="status-circle marked">3</div>
                <div className="status-circle not-visited">4</div>
            </div>
            <div className="status-text">
                <span className="answered">Answered</span>
                <span className="not-answered">Not Answered</span>
                <span className="marked">Marked</span>
                <span className="not-visited">Not Visited</span>
            </div>
            {/* Section title */}
            <div className="section-title">
                <span className="section-title-text">Section Title</span>
                <span className="question-count">
                    10 Questions <span className="caret-icon">&#9660;</span>
                </span>
            </div>
            {/* List with colored borders */}
            <div className="side-panel-list">
                <div className="list-item answered-border">This is a long text that will be trimmed...</div>
                <div className="list-item not-answered-border">Another example of a long text...</div>
                <div className="list-item marked-border">This is yet another example...</div>
                <div className="list-item not-visited-border">Sample text for not visited...</div>
            </div>
        </div>
    );
}

export default QuestionPanelListComponent;
