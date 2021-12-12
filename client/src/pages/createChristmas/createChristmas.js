import React from "react";
import RecorderControls from "../../components/recorder-controls";
import RecordingsList from "../../components/recordings-list";
import useRecorder from "../../hooks/useRecorder";
import { Link, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



export default function App() {
    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;

    return (
    <section className="voice-recorder">
        <h1 className="title">Voice Recorder</h1>
        <div className="recorder-container">
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} />
        </div>
        <div className="Christmas-one-text">
        <h2>There once was a forgotten Christmas tree.</h2> <br/>
        <h2>Alone in the frozen forest.</h2> <br/>
        </div>
        <div>
        <Link to="/openJar"><Button variant="primary">Send</Button>{' '}</Link>
        </div>
    </section>
    );
}