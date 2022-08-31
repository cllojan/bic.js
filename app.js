import {Flex, Text, Link} from './Elements.js';
import {init} from './bic.js';

let style = {
    texto:`
        color:white;
        font-size:25px;
    `,
    container:`
        background-color:blue;
        width:100vw;
        height:100vh;
    `,
    link:`
        text-decoration:none;
        color:white;
    `
}

const Container = () => (
    Flex({
        id:"owo",
        className:"Texto__uwu",
        styles:style.container
    },
         Text({id:"Text",styles:style.texto},"Hola uwu"),
    Link({className:"Link",styles:style.link,href:"./"},"Link"),
        )
)


init("app").Childs(Container())
