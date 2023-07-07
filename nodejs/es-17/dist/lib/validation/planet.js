"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planetSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
//e che ci sarà mai qui dentro se non l'aspettattiva del nostro schema buildato su prisma
//import di static e type da sinclair
//ci si aspetta un oggetto nel nostro caso quindi Type.Object con all'interno la costruzione dello schema
//va tenuta in considerazione ogni parametro sia il tipo che la condizione
exports.planetSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    description: typebox_1.Type.Optional(typebox_1.Type.String()),
    diameter: typebox_1.Type.Integer(),
    moons: typebox_1.Type.Integer(),
}, { additionalProperties: false });
//# sourceMappingURL=planet.js.map