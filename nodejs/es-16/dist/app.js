"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const client_1 = __importDefault(require("./lib/prisma/client"));
//importato express e l'async errors in aggiunta importare prisma 
const app = (0, express_1.default)();
//app diventa il nostro server
app.get('/planets', async (req, res) => {
    const planets = await client_1.default.planet.findMany(); //metodo per restituire l'intero array, quando si fa il get passare in json
    res.json(planets);
});
//com il metodo get diciamo che in localhost:3000/ indirizzo planets chiediamo ci venga dato il responst di planets
//in formato json per essere letto
//curl localhost:3000/planets -v
exports.default = app;
//# sourceMappingURL=app.js.map