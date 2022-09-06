import { Hola } from "./Hola.js"
import { Adios } from "./Adios.js"
import { Route } from "./bic.js";
import { NotFound } from "./NotFound.js" 
export const Rutas = () => {
    return Route(
	Hola,
	Adios,
	NotFound
    )
}
