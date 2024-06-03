import { useEffect, useState } from "react";
import TimerComponent from "./test-timer.component";
import "./test-header.component.css"
import axios from "axios";
const TestHeaderComponent = () => {

    const [ questionList , setQuestionList ] = useState([]);
    const [ currentIndex, setCurrentIndex ] = useState(0);
    useEffect(() => {
        const fetchQuestionList = async () => {
          try {
            //through test id we will get question and its options
            const response = await axios.get('http://localhost:5000/v1/question/questionWithAnswer/664f5fa79cadea9bd09f44ed');
            console.log("test header data list",response.data.data);
            setQuestionList(response.data.data)
          } catch (error) {
            console.error('Error fetching the question with options for a test:', error);
          }}
          fetchQuestionList()
    },[])
    
    const handleNextClick= ()=>{
        setCurrentIndex((prevIndex)=>{
            return ( prevIndex < questionList.length -1 ) ? prevIndex + 1 : prevIndex;
        })
    }

    const handlePreviousClick= ()=>{
        setCurrentIndex((prevIndex)=>{
            return ( prevIndex > 0 ) ? prevIndex - 1 : prevIndex
        })
    }
    return (
        <>
            <header className="header">
                <div className="right-section">
                    <button className="action-button">Pause Test</button>
                    <button className="action-button">Finish Test</button>
                    <div className="timer-circle">
                        <TimerComponent />
                    </div>
                    <div>
                        <span className="username"><b>@</b> Moiz Ansari</span>
                    </div>
                </div>
                <div className="left-section">
                    <span className="company-name">Learning Mate</span>
                    <b>| &nbsp;</b>
                    <select className="test-dropdown">
                        <option value="test1">Test 1</option>
                        <option value="test2">Test 2</option>
                        <option value="test3">Test 3</option>
                        <option value="test4">Test 4</option>
                    </select>
                </div>
            </header>
            <div className="subheader">
                <div className="subheader-left">
                    <span className="section-name">Angular &nbsp; <b>|</b> &nbsp; Question <b>{ currentIndex + 1}</b> of <b>{ questionList.length }</b></span>
                </div>
                <div className="subheader-center">
                    <button onClick={handlePreviousClick} className="prev-next-circle" style={{ padding: 0, margin: 0, border: '2px solid gray'  }}>
                        <div >Prev</div>
                    </button>
                    {
                        ( questionList.map((question, index)=>{
                            // console.log("hellow");
                            return (
                            <div key={index} className={`number-circle ${ (index === currentIndex) && "active" }`}>
                            {index + 1}
                        </div>)
                        }))
                    }
                    {/* Button with hollow circle for "next" */}
                    <button  onClick={handleNextClick} className="prev-next-circle" style={{ padding: 0, margin: 0, border: '2px solid gray'  }}>
                        <div className="">Next</div>
                    </button>
                </div>
                <div className="subheader-right">
                    <img src="./video-image.jpeg" alt="Rectangular" className="rectangular-image" />
                </div>
            </div>
        </>
    );
}

export default TestHeaderComponent;