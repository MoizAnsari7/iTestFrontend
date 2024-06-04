import axios from 'axios';
import './QuestionPanelComponent.css';
const  OptionPanelComponent = ({ options })=>{
    console.log("options",options?.answerOptions);
    const saveAnswer = ( selectedOption)=>{
        console.log("answer saved", selectedOption);
        let reqBody = {
            "userId":"664b5b70f28e8242bf2b1494",
            "questionId": selectedOption?.questionId,
            "selectedOptionId":selectedOption?._id,
            "responseTime":100,
            "correct" : selectedOption?.isCorrect
        }
        saveAnswerByUser( reqBody)
    }

    async function saveAnswerByUser(answer)
    {
        try{
            let answerResponse = await axios.post("http://localhost:5000/v1/answer/save", answer)
            alert("answer saved",answerResponse )
        }catch(e){
            console.log("error in save answer by user", e);
        }
    }
    return (
        <>
 <div className="right-section-question">
                {/* Header */}
                <div className="header-box">Choose the correct option</div>
                {/* Options */}
                <div className="options">

                    {  (options?.answerOptions) && options?.answerOptions?.map( (option, index)=>{
                        return (<>
                        <div className="option" onClick={ ()=>{saveAnswer(option)}}>
                        <input type="radio" id="option1" name="options"  />
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