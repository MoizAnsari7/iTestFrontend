const QuestionComponent = ()=>{
    return (<> 
<div className="left-section-question">
                {/* Top section with question number and buttons */}
                <div className="top-section">
                    <div className="question-number">Question 4 of 10</div>
                    <div className="action-buttons">
                        <button className="info-button">Info</button>
                        <button className="flag-button">Flag</button>
                    </div>
                </div>
                {/* Question section */}
                <div className="question">What is your name?</div>
            </div>
            </>)
}

export default QuestionComponent;