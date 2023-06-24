import React from 'react'
import PropTypes from 'prop-types'
import { useParams,
        Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Questions } from '../../../questions';
import { Form } from 'react-bootstrap';

export const Question = (props) => {
    const { id } = useParams();

    return (
        <>
            <p>{ Questions[id].question }</p>
            <Form.Control size="lg" type="text" placeholder="Answer" />
            <Button variant="warning">Hint</Button><br />
            <Link to="/"><Button>Go back</Button></Link>
        </>
    )
}

Question.propTypes = {
    index: PropTypes.number
}

export default Question