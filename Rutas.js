import { Hola } from "./Hola.js"
import { Adios } from "./Adios.js"
import { Route } from "./bic.js";

export const Rutas = () => {
    return Route(
	Hola,
	Adios
    )
}
