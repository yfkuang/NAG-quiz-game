import React, { createContext, useState, useContext } from 'react'
import { Questions } from '../questions'

export const AnswerContext = createContext({
    answerState: {},
    init: () => {},
    setAnswerState: () => {},
})

export function useAnswer() {
    return useContext(AnswerContext)
}

export function AnswerProvider(props) {
    const [answerState, setAnswerState] = useState([])

    const init = () => {
        Questions.forEach((question, key) => {
            setAnswerState(answerState => [...answerState, [key, false]])
        })
    }

    return (
        <AnswerContext.Provider value={{answerState: answerState, setAnswerState: setAnswerState, init: init}}>
            {props.children}
        </AnswerContext.Provider>
    )
}