//import "./styles.css"
import { Questions } from '../../../questions'
import PropTypes from 'prop-types'
import Button from '../../button/button'

const Index = () => {
    return (
        <div>
            { Questions.map( question =>
                <Button question={question.name} answers={question.products} hint={question.products}/>
            ) }
        </div>
    )
}

export default Index