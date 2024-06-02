import "./test-footer.component.css"
const TestFooterComponent = ()=>{
    return (
    <footer className="footer">
      <div className="left-text">
        <span className="footer-text">Angular Test &nbps; | &nbsp;</span>
        <span className="footer-text">ansari moiz ( user@gmail.com )</span>
      </div>
      <button className="finish-test-button">Finish Test</button>
      <button className="finish-test-button">Submit Assessment</button>
    </footer>
  );
}

export default TestFooterComponent;