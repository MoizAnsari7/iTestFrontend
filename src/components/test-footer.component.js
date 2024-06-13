import { useNavigate } from "react-router";
import "./test-footer.component.css"
const TestFooterComponent = ()=>{
  const navigate = useNavigate()
  const handleSubmitTest = ()=>{
    console.log("handle submit test");
    navigate("/testResult", { state :  { userId : "664b5b70f28e8242bf2b1494" , testId : "666497822f16e27239ff07d6" } });
  }
    return (
    <footer className="footer">
      <div className="left-text">
        <span className="footer-text">Angular Test &nbps; | &nbsp;</span>
        <span className="footer-text">ansari moiz ( user@gmail.com )</span>
      </div>
      <button className="finish-test-button" onClick={handleSubmitTest}>Finish Test</button>
      <button className="finish-test-button" onClick={handleSubmitTest}>Submit Assessment</button>
    </footer>
  );
}

export default TestFooterComponent;