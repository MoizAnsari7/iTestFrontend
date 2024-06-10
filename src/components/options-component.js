import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation } from "react-router";

const OptionsComponent = ()=>{
    const location = useLocation();
    const [ selectedQuestion, setSelectedQuestion ] = useState({})
    const [ formData, setFormData ] = useState({
        answerText : "",
        explaination : "",
        solution : "",
        order : "",
        isCorrect : false
    })

    useEffect(()=>{
        const { question } = location.state;
        // const body = { ...formData, questionId : question.id }
        setSelectedQuestion(question)

    })
    const handleChange = (e)=>{
        console.log("e", e.target.value);
        if(e.target.name === "isCorrect")
            {
                setFormData({ ...formData, isCorrect : e.target.checked })
            }else{
        setFormData({ ...formData, [e.target.name] : e.target.value })
            }
    }
    
    const handleFormSubmit = (e)=>{
        e.preventDefault()
        console.log("body", formData);
        const { question } = location.state;
        const body = { ...formData, questionId : question.id }
        axios.post("http://localhost:5000/v1//option/save", body).then((response)=>{
            console.log("response", response.data);
        }).catch((e)=>{
            console.log("error in adding option",e,body);
        })
    }
    return (<>
        <h1>Q : { selectedQuestion.question }</h1>
        <hr/>
        <h2>Add new option</h2>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>
                    AnswerTest : 
                    <input 
                    type="text"
                    name="answerText"
                    value={formData.answerTest}
                    onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    order : 
                    <input 
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                explaination : 
                    <input 
                    type="text"
                    name="explaination"
                    value={formData.explaination}
                    onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    solution : 
                    <input 
                    type="text"
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    is Correct : 
                    <input 
                    type="checkbox"
                    name="isCorrect"
                    value={formData.isCorrect}
                    onChange={handleChange}
                    />
                </label>
            </div>
            <button>Add option</button>
        </form>
    </>)
}

export default OptionsComponent