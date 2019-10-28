import React from 'react';
import { Jumbotron} from 'reactstrap';

const JumbotronBox = (props) => {
    return (
        <Jumbotron className="jumbotron">
            <h1 className="display-3 jumbotronTitle">Clicky Game - NFL Edition</h1>
            <p className="lead jumbotronDescription">Click on an image to earn points but don't click on any more than once!</p>
            <hr className="my-2" />
            <p className="highDisplay">High score: {props.high}</p>
            <p className="countDisplay">Current score: {props.count}</p>
        </Jumbotron>

    );
};

export default JumbotronBox;