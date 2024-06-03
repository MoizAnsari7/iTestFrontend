import './QuestionPanelComponent.css';
const  OptionPanelComponent = ({ options })=>{
    console.log("options",options?.answerOptions);
    return (
        <>
 <div className="right-section-question">
                {/* Header */}
                <div className="header-box">Choose the correct option</div>
                {/* Options */}
                <div className="options">

                    {  (options?.answerOptions) && options?.answerOptions?.map( (option, index)=>{
                        return (<>
                        <div className="option">
                        <input type="radio" id="option1" name="options" />
                        <label htmlFor="option1">{ option.answerText }</label>
                    </div>
                    </>)
                    }) }
                    {/* Option 4 - Checkbox */}
                    {/* <div className="option">
                        <input type="checkbox" id="option3" name="options" />
                        <label htmlFor="option3">Option 4</label>
                    </div> */}
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