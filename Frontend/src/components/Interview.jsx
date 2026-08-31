import "../assets/Interview.css";
import speaking from "../assets/images/speaking.gif"
import  listening from "../assets/images/listening.gif"
import { APP_CONSTANT } from "../util/constant";


const Interview = ({ skipQuestion, endInterview, state }) => {
  return (
    <div className="interview-container">
      {/* Col 1: AI Bot */}
      <div className="interview-column">
        <div className="bot-section">
          <h2>AI Interviewer</h2>
          {state === APP_CONSTANT.ASKING ? (
            <div className="gif-placeholder">
              <img src={speaking} alt="Bot Speaking..." />
            </div>
          ) : (
            <div className="gif-placeholder-gray"></div>
          )}
        </div>
      </div>

      {/* Col 2: Controls */}
      <div className="interview-column controls-section">
        <button onClick={skipQuestion} className="control-btn skip-btn">
          Skip Question
        </button>
        <button onClick={endInterview} className="control-btn end-btn">
          End Interview
        </button>
      </div>

      {/* Col 3: Candidate */}
      <div className="interview-column">
        <div className="candidate-section">
          <h2>You</h2>
          {state === APP_CONSTANT.LISTENING ? (
            <div className="gif-placeholder">
              <img src={listening} alt="You are Speaking..." />
            </div>
          ) : (
            <div className="gif-placeholder-gray"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interview;
