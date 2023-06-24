import { useEffect } from 'react'
import { Questions } from '../../../questions'
import { Container,
         Col } from 'react-bootstrap'
import QuestionButton from '../../QuestionButton'
import { useAnswer } from '../../../context/answerContext'

const Index = () => {
    const { answerState } = useAnswer()
    const { init } = useAnswer()

    useEffect(() => {
        if (answerState.length < 24) {
            init()
        }

        console.log(answerState)
    },)

    return (
        <Container fluid>
            { Questions.map( (question, index) =>
                <QuestionButton index={index} key={index}/>
            ) }
        </Container>
    )
}

export default Index