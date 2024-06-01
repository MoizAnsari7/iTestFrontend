import TimerComponent from "./test-timer.component";
import "./test-header.component.css"
const TestHeaderComponent = ()=>{
    return (
        <header className="header">
          <div className="right-section">
            <button className="action-button">Pause Test</button>
            <button className="action-button">Finish Test</button>
            <div className="timer-circle">
              <TimerComponent />
            </div>
            <div>
              <span className="username">Moiz Ansari</span>
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
      );
}

export default TestHeaderComponent;