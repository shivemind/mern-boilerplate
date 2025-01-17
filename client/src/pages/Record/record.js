import React from "react";
import RecorderControls from "../../components/recorder-controls";
import RecordingsList from "../../components/recordings-list";
import useRecorder from "../../hooks/useRecorder";



export default function App() {
    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;
    console.log('record handler +++', handlers);

    return (
    <section className="voice-recorder">
        <h1 className="title">Voice Recorder</h1>
        <div className="recorder-container">
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} />
        </div>
    </section>
    );
}
