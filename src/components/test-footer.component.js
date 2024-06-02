import "./test-footer.component.css"
const TestFooterComponent = ()=>{
    return (
    <footer className="footer">
      <div className="left-text">
        <span className="footer-text">Some left text 1</span>
        <span className="footer-text">Some left text 2</span>
      </div>
      <button className="finish-test-button">Finish Test</button>
    </footer>
  );
}

export default TestFooterComponent;