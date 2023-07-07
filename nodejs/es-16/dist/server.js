"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
//import della nostra app e del dotenvconfig per leggere i dati
const port = process.env.PORT;
//assegnamo a port il valore della porta nascosto dentro .env
app_1.default.listen(port, () => {
    console.log(`The server is actually running in http://localhost:${port}`);
});
//app.listen assegna la porta e fa partire il server, a sto giro c'è solo un console.log che ci dice in che porta
//eseguiamo npm build cosi ci compila il nostro file in distribution
//npm run build
//# sourceMappingURL=server.js.map