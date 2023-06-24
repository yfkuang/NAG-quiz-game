import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './QuestionButton.css'

const QuestionButton = (props) => {
    return (
            <Link to={`/` + props.index}>
                <Button className='question-button' variant="secondary">{props.index + 1}</Button>
            </Link>
    )
}

QuestionButton.propTypes = {
    index: PropTypes.number
}

export default QuestionButton