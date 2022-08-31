import {Flex, Text, Link} from './Elements.js';
import {init} from './bic.js';

const Container = () => (
    Flex(
        {
            class:"Flex__Cont",
            id:"container",
            style:style.container
        },
        Text({id:"owo",className:"Texto__uwu",sty:style.text},"Esto es un Texto"),
        Link({"class":"Link__owo","href":"./"},"Esto si es texto")
    )
)


let style = {
    text:`
        color:#3cb4dd;
        font-size:25px;

    `,
    container:`
        background-color:green;
        width:100vw;
        height:100vh;
`
}

init("app").Childs(Container())
