import React from "react";




export default function App() {
    const { storyState, ...handlers } = useStory();
    const { story } = storyState;

    return (
    <section className="story">
        <h1 className="title">Story-1</h1>
        <div className="story-container">
        <StoryControls storyState={storyState} handlers={handlers} />
        <StoryList story={story} />
        </div>
    </section>
    );
}