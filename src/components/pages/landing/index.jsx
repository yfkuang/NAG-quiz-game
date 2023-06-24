//import "./styles.css"
import { Questions } from '../../../questions'
import { Container,
         Col } from 'react-bootstrap'
import QuestionButton from '../../QuestionButton'

const Index = () => {
    return (
        <Container fluid>
            { Questions.map( (question, index) =>
                <QuestionButton index={index}/>
            ) }
        </Container>
    )
}

export default Index