import TimerComponent from "./test-timer.component";
import "./test-header.component.css"
const TestHeaderComponent = () => {
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
                    <span className="section-name">Angular &nbsp; <b>|</b> &nbsp; Question <b>3</b> of <b>25</b></span>
                </div>
                <div className="subheader-center">
                    <button className="prev-next-circle" style={{ padding: 0, margin: 0, border: '2px solid gray'  }}>
                        <div >Prev</div>
                    </button>
                    {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="number-circle">
                            {i + 1}
                        </div>
                    ))}
                    {/* Button with hollow circle for "next" */}
                    <button className="prev-next-circle" style={{ padding: 0, margin: 0, border: '2px solid gray'  }}>
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