import React from "react";

const Result=({score,playagain})=>(
    <div className="score-board">
        <div className="score">You scored {score}/5 correct answers!</div>
        <button className="playBtn btn btn-sucuess" onClick={playagain}>Play again!</button>
    </div>
)
export default Result