import React from "react";
import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';

export default function App() {


    return (
    <section className="text">
        <h1 className="title">Send-Jar</h1>
        <div className="Christmas-one-text">
        <Link to="/createChristmas"><Button variant="primary">Christmas 1</Button>{' '}</Link>
        <Button variant="primary">Story 2</Button>{' '}
        <Button variant="primary">Story 3</Button>{' '}
        

        </div>
    </section>
    );
}