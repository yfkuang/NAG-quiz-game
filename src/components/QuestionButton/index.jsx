import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './QuestionButton.css'
import { useAnswer } from '../../context/answerContext'

const QuestionButton = (props) => {
    const { answerState } = useAnswer()
    const { questions } = useAnswer()

    useEffect(() => {
        if(answerState.length !== 0 && answerState[props.index][1]) {
            document.querySelector('.question-button[index="' + props.index + '"]').style.background = 'green'
        } else {
            switch (questions[props.index].section) {
                case 1:
                    document.querySelector('.question-button[index="' + props.index + '"]').style.background = '#D3ADD1'
                    break;
                case 2:
                    document.querySelector('.question-button[index="' + props.index + '"]').style.background = '#FDC888'
                    break;
                case 3:
                    document.querySelector('.question-button[index="' + props.index + '"]').style.background = '#A6D8C0'
                    break;
            }
        }
    })

    return (
        <Link to={`/` + props.index}>
            <Button className='question-button' index={props.index} variant="secondary">{props.index + 1}</Button>
            {questions[props.index].section == 1 &&
                <p className='question-button-section'>European and American</p>
            }
            {questions[props.index].section == 2 &&
                <p className='question-button-section'>Indigenous and Canadian</p>
            }
            {questions[props.index].section == 3 &&
                <p className='question-button-section'>Contemporary</p>
            }
        </Link>
    )
}

QuestionButton.propTypes = {
    index: PropTypes.number
}

export default QuestionButton