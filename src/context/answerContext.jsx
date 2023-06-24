import React, { createContext, useState, useContext } from 'react'

export const Questions = [
    {
        question: ["My story is set and told in the ", <b>18th century</b>, ". I commanded an army for Great-Britain. You will see my contemporaries surround my dying body in Christ-like lamentation. Among them, an indigenous man peers at me, pensive, like 'The Thinker' as if I am a dying wolf. Who am I?"],
        answers: [
            "Wolfe",
            "General Wolfe",
            "James Wolfe",
            "General James Wolfe"
        ],
        hint: "c208"
    },
    {
        question: ["Rembrandt is the most celebrated of painters of the ", <b>Dutch Golden Age</b>, ", yet my painting depicting a classical torment of the Old Testament is the centerpiece in that room. Who am I?"],
        answers: [
            "Jan Lievens",
            "Lievens",
        ],
        hint: "c205"
    },
    {
        question: ["The fog covers the sun, turning it red as it is reflected in the River Thames below me, leaving a ghostly ", <b>impression</b>, ". What am I?"],
        answers: [
            "Waterloo Bridge"
        ],
        hint: "c213"
    },
    {
        question: ["This ", <b>Art Nouveau (1883-1914)</b>, " painting depicts contradictory themes of life, represented by a young, nude, red-headed, pregnant woman; and death, represented by dark figures, a monster, and a skull (an important art tradition of memento mori). What is the title of this painting?"],
        answers: [
            "Hope",
            "Hope 1",
            "Hope I",
        ],
        hint: "c215"
    },
    {
        question: ["I am depicted in a ", <b>20th century</b>, " oil painting as a nude man sitting on a rock, holding a smaller version of myself. I stole fire from the gods to give to man. Who am I?" ],
        answers: [
            "Prometheus",
        ],
        hint: "c215"
    },
    {
        question: ["This ", <b>black-and-white photograph</b>, " displaying a blank screen in a theater inspired by the richness of French Renaissance stages. Where was this photograph taken?" ],
        answers: [
            "Ohio",
        ],
        hint: "b203"
    },
    {
        question: ["I am a pioneer of ", <b>abstract</b>, " art. My painting is a series of horizontal and vertical lines and a blue square. I painted it with the intention to evoke the dense, dynamic, bustling energy of New York City. Who am I?" ],
        answers: [
            "Piet Mondrian",
            "Mondrian",
        ],
        hint: "c216"
    },
    {
        question: ["This ", <b>abstract contemporary painting from 2017</b>, " depicts several white geometric shapes atop a terra cotta (orange-brown) ground, an orange terra cotta (orange-brown) sphere whose excess outline is separating the sky and a several line exploding from the center. What is the title of this painting?" ],
        answers: [
            "Park",
        ],
        hint: "b204"
    },
    {
        question: ["I am a ", <b>modernist</b>, " black sculpture of a robotic, radically abstractified human male. I look like General Grievous or his battle droids from Star Wars. Who is my sculptor?" ],
        answers: [
            "Jacob Epstein",
            "Epstein",
        ],
        hint: "c216"
    },
    {
        question: ["This ", <b>impressionist/post-impressionist</b>, " painting depicts a European woman lying on a couch in a cozy, somewhat cluttered room, examining a scroll of eastern origin. Behind her, outside the window, is a garden with abundant plants and flowers. The rendering of the lighting evokes elements of realism and romanticism. What is the title of this painting?" ],
        answers: [
            "The Japanese Scroll",
        ],
        hint: "c212"
    },
    {
        question: ["We are depicted in a ", <b>British romantic painting</b>, " that explores the calming yet nourishing nature of light. In this painting, the light of the afternoon sun floods a serene landscape of a mountainous, greenery-laden coast, as well as a soothing brook before falling upon us, two seemingly inconsequential men. Who are we?" ],
        answers: [
            "Mercury and Argus",
            "Mercury Argus",
            "Mercury/Argus",
            "Mercury & Argus",
            "Mercury, Argus",
            "Argus and Mercury",
            "Argus Mercury",
            "Argus/Mercury",
            "Argus & Mercury",
            "Argus, Mercury"
        ],
        hint: "c211"
    },
    {
        question: ["We are the subject of a ", <b>20th century</b>, " painting. The bold shading and our naturalistic human figures evoke realism, but the metallic gradients and sharp geometric shapes evoke the original futurist and cubist intentions of our creator. Among jagged metal beams, we industriously dig and reinforce a tunnel. What are we called?" ],
        answers: [
            "Sappers",
            "Combat Engineers",
            "Royal Canadian Engineers",
            "Corps of Royal Canadian Engineers"
        ],
        hint: "c219"
    },
    {
        question: ["Conceptualize. ", <b>Abstractify</b>, ". Feel. I am pure solid. Be unbalanced. Live on the edge. Lean toward my edge. Race to the edge, to my yellow finish line. What is my title?" ],
        answers: [
            "Yellow Edge"
        ],
        hint: "c214"
    },
    {
        question: ["This ", <b>post-impressionist</b>, " painting depicts a nude woman laying on a yellow chaise with a pink rose-themed 4-panel room divider in the background. The painting incorporates cubist and other modernist elements. Who is the artist?" ],
        answers: [
            "Henri Matisse",
            "Matisse"
        ],
        hint: "c216"
    },
    {
        question: ["This ", <b>20th Century</b>, " portrait depicts me from head-to-toe in an ornate and lavish white robe. I am surrounded by colorful oriental motifs, yet this is contrasted by my evident caucacity, flaunted by my wealth and social standing. Who am I?" ],
        answers: [
            "Elisabeth Lederer",
            "Lederer",
            "Elisabeth Bachofen-Ech",
            "Bachofen-Ech"
        ],
        hint: "c215"
    },
    {
        question: ["In this ", <b>renaissance</b>, " painting, a young naked woman is holding the tail of a weasel-headed snake. The snake binds itself to a tree and bites a rotting corpse. Who is the young woman?" ],
        answers: [
            "Eve"
        ],
        hint: "c202"
    },
    {
        question: ["In this still-life ", <b>post-impressionist</b>, " painting, there is a white vase with bright, warmly colorful flowers. To the right of the vase, is a water pitcher with the handle turned to the viewer. The painting is notable for how it evokes texture. What flowers are depicted?" ],
        answers: [
            "Nasturtiums"
        ],
        hint: "c219"
    },
    {
        question: ["Amongst a group of male activists, two women are wearing white cloaks and are strikingly bathed by the rose-tinted light of twilight. This ", <b>20th century</b>, " painting has elements of naturalism, romanticism, modernism and expressionism. What is the title of the painting?" ],
        answers: [
            "On Drumcliffe Strand",
            "Drumcliffe Strand"
        ],
        hint: "c219"
    },
    {
        question: ["I am a Picasso. What is my title?" ],
        answers: [
            "The Small Table"
        ],
        hint: "c216"
    },
    {
        question: ["This ", <b>post-impressionist</b>, " portrait depicts a famous World War I hero who integrated within the Arab military to fight the Ottomans. Who is the subject?" ],
        answers: [
            "T.E. Lawrence",
            "TE Lawrence",
            "Thomas Edward Lawrence",
            "Lawrence",
            "Lawrence of Arabia",
            "John Hume Ross",
            "John Ross",
            "Ross",
            "T.E. Shaw",
            "TE Shaw",
            "Colonel Lawrence",
            "Colonel T.E. Lawrence",
            "Colonel Shaw",
            "Aircraftman Shaw"
        ],
        hint: "c219"
    },
    {
        question: ["I am a black girl sitting on a red chair holding a doll depicted in a realist full-body portrait by a Canadian woman artist. What could my name be?" ],
        answers: [
            "Amy"
        ],
        hint: "a108"
    },
    {
        question: ["Who is my artist?" ],
        answers: [
            "Ibrahim Mahama",
            "Mahama"
        ],
        hint: "b107"
    },
    {
        question: ["I am so expansive of an artwork that I cover two walls, bridging the corner betwixt them. Who is my artist?" ],
        answers: [
            "Sol LeWitt",
            "LeWitt"
        ],
        hint: "b105"
    },
]

export const AnswerContext = createContext({
    answerState: {},
    questions: {},
    init: () => {},
    setAnswerState: () => {},
})

export function useAnswer() {
    return useContext(AnswerContext)
}

export function AnswerProvider(props) {
    const [answerState, setAnswerState] = useState([])
    const [questions, setQuestions] = useState([])

    const init = () => {
        Questions.forEach((question, key) => {
            setAnswerState(answerState => [...answerState, [key, false]])
            setQuestions(questions => [...questions, question])
        })
    }

    return (
        <AnswerContext.Provider value={{answerState: answerState, questions: questions, setAnswerState: setAnswerState, init: init}}>
            {props.children}
        </AnswerContext.Provider>
    )
}