"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
//import di validate che va messo all'interno di app.post, e che usa planetSchema per aspettarsi il valore valido
//se valido il nostro const planet sarà di tipo PlanetData
const validation_1 = require("./lib/validation");
const app = (0, express_1.default)();
app.use(express_1.default.json()); //questo server per usare le middleware
app.post('/planets', (0, validation_1.validate)({ body: validation_1.planetSchema }), async (req, res) => {
    const planet = req.body;
    res.status(201).json(planet);
});
//importante!!! il validationErrorMiddleware va passato dopo che siano state gestite le request
app.use(validation_1.ValidationErrorMiddleware);
//npm run dev avvio del server
//curl localhost:3000/planets -v
exports.default = app;
//# sourceMappingURL=app.js.map