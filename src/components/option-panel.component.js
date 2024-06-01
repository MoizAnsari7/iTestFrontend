import './QuestionPanelComponent.css';
const  OptionPanelComponent = ()=>{
    return (
        <>
 <div className="right-section-question">
                {/* Header */}
                <div className="header-box">Choose the correct option</div>
                {/* Options */}
                <div className="options">
                    {/* Option 1 - Radio box */}
                    <div className="option">
                        <input type="radio" id="option1" name="options" />
                        <label htmlFor="option1">Option 1</label>
                    </div>
                    {/* Option 2 - Radio box */}
                    <div className="option">
                        <input type="radio" id="option1" name="options" />
                        <label htmlFor="option1">Option 2</label>
                    </div>
                    {/* Option 3 - Checkbox */}
                    <div className="option">
                        <input type="checkbox" id="option2" name="options" />
                        <label htmlFor="option2">Option 3</label>
                    </div>
                    {/* Option 4 - Checkbox */}
                    <div className="option">
                        <input type="checkbox" id="option3" name="options" />
                        <label htmlFor="option3">Option 4</label>
                    </div>
                </div>
                {/* Buttons */}
                <div className="action-buttons">
                    <button className="clear-button">Clear</button>
                    <button className="next-button">Next</button>
                </div>
            </div>
        </>
    )
}

export default OptionPanelComponent;