import {Static, Type} from "@sinclair/typebox"

//e che ci sarà mai qui dentro se non l'aspettattiva del nostro schema buildato su prisma
//import di static e type da sinclair

//ci si aspetta un oggetto nel nostro caso quindi Type.Object con all'interno la costruzione dello schema
//va tenuta in considerazione ogni parametro sia il tipo che la condizione

export const planetSchema = Type.Object({
    name: Type.String(),
    description: Type.Optional(Type.String()),
    diameter: Type.Integer(),
    moons: Type.Integer(),
}, {additionalProperties: false})

//additionaProperties false server per non far passare ulteriori dati se non quelli che ci si aspetta
//ora possiamo exportare

export type PlanetData = Static<typeof planetSchema>