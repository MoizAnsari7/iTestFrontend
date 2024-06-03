const QuestionComponent = ( {question, questionList, currentQuestionIndex })=>{
    console.log("question",question);
    return (<> 
<div className="left-section-question">
                {/* Top section with question number and buttons */}
                <div className="top-section">
                    <div className="question-number">Question { currentQuestionIndex + 1 } of { questionList.length }</div>
                    <div className="action-buttons">
                        <button className="info-button">Info</button>
                        <button className="flag-button">Flag</button>
                    </div>
                </div>
                {/* Question section */}
                <div className="question">{ question }</div>
            </div>
            </>)
}

export default QuestionComponent;