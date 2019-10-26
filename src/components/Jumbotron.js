import React from 'react';
import { Jumbotron} from 'reactstrap';

const JumbotronBox = (props) => {
    return (
        <Jumbotron>
            <h1 className="display-3">Clicky Game</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            <hr className="my-2" />
            <p>Display for score and top score {props.count}</p>
        </Jumbotron>

    );
};

export default JumbotronBox;