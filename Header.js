import {Flex, Text, Link} from "./Elements.js";
export const Header = () => {
   return Flex({class:"header__cont"},
	 Text({class:"Texto"},"Header"),
	 Link({class:"link__1",href:"/Hola"},"Inicio"),
	       Link({class:"link__2",href:"/Adios"},"Segundo"))
}
