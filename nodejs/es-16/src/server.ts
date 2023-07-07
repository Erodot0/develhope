import "dotenv/config";
import app from "./app";
//import della nostra app e del dotenvconfig per leggere i dati

const port = process.env.PORT;
//assegnamo a port il valore della porta nascosto dentro .env

app.listen(port, () => {
    console.log(`The server is actually running in http://localhost:${port}`)
})
//app.listen assegna la porta e fa partire il server, a sto giro c'è solo un console.log che ci dice in che porta
//eseguiamo npm build cosi ci compila il nostro file in distribution

//npm run build