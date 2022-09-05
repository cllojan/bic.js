import { Flex, Text , Link}   from "./Elements.js";
import { init,Router } from "./bic.js";
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import {Rutas} from "./Rutas.js"; 

Rutas();

init("#app").Childs(
    Header(),
    Flex({id:"container"}),
    Footer());
