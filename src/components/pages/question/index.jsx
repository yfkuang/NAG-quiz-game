import React from 'react'
import './question.css'
import PropTypes from 'prop-types'
import { useParams,
        Link } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import { Questions } from '../../../questions';
import { Form } from 'react-bootstrap';
import freedom from '../../../assets/freedom.jpg'

export const Question = (props) => {
    const { id } = useParams();
    let hint = false;

    const displayHint = () => {
        hint = !hint

        if (hint == false) {
            document.getElementById('hint').style.visibility = 'hidden'
        } else {
            document.getElementById('hint').style.visibility = 'visible'
        }
    }

    const validateAnswer = (e) => {
        if (!Questions[id].answers.some(answer => e.target.value.toUpperCase()  === answer.toUpperCase() )) {
            e.target.style.background = '#FFCCCB'
        } else {
            e.target.style.background = '#DFFFE9'
            e.target.disabled = true
            document.getElementById('hintButton').disabled = true
        }
    }

    return (
        <Container className='question-container'>

            { id == 22 ? <img src={freedom} alt="Freedom"/> : null }
            <p>{ Questions[id].question }</p>
            <Form.Control size="lg" type="text" placeholder="Answer" onChange={validateAnswer} />
            <div>
                <Button variant="warning" id="hintButton" onClick={displayHint}>Hint</Button><br />
                <p id="hint">{ Questions[id].hint }</p>
            </div>
            <div>
                <Link to="/"><Button>Go back</Button></Link>
            </div>
        </Container>
    )
}

Question.propTypes = {
    index: PropTypes.number
}

export default Question