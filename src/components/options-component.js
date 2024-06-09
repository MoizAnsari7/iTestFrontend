import axios from "axios";
import { useState } from "react"
import { useLocation } from "react-router";

const OptionsComponent = ()=>{
    const location = useLocation()
    const [ formData, setFormData ] = useState({
        answerText : "",
        explaination : "",
        solution : "",
        order : "",
        isCorrect : false
    })

    const handleChange = (e)=>{
        console.log("e", e.target.value);
        setFormData({ ...formData, [e.target.name] : e.target.value })
    }
    
    const handleFormSubmit = (e)=>{
        e.preventDefault()
        console.log("body", formData);
        const { questionId } = location.state;
        const body = { ...formData, questionId : questionId }
        axios.post("http://localhost:5000/v1//option/save", body).then((response)=>{
            console.log("response", response.data);
        }).catch((e)=>{
            console.log("error in adding option",e,body);
        })
    }
    return (<>
        <h1>options component </h1>
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