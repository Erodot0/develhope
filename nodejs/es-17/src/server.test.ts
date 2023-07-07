import supertest from "supertest";
import app from "./app";
import { prismaMock } from './lib/prisma/client.mock'

const req = supertest(app);

//il test ora diventa di tipo post perché si pusha la roba nel database, quindi vediamo se ci entra, l'elemento è singolo
//stessa route ma elemento singolo, si possono togliere id create ed update visto che vengono generati 

//tramite describe possiamo eseguire molteplici test in simultanea

describe("POST /planets",()=>{
    test("valid request", async () => {
        const planet =
        {
            name: "Venus",
            diameter: 5678,
            moons: 2,
        }
        const res = await req
            .post('/planets')
            .send(planet)
            .expect(201)
            .expect('Content-Type', /application\/json/);
    
        expect(res.body).toEqual(planet);
    });
    test("invalid request", async () => {
        const planet =
        {
            diameter: 5678,
            moons: 2
        }
    
        //deletando il nome la request non deve andare a buon fine visto che manca un parametro obbligatorio
        //quindi ci aspetteremo un errore, che andremo a sostituire sull'expect con codice 422 entity non processabile
        //.post(route /planets)
        //.send(oggetto> planet)
        //.expect(codice quando la richiesta non è processabile 422)
        const res = await req
            .post('/planets')
            .send(planet)
            .expect(422)
            .expect('Content-Type', /application\/json/);
    
            //in questo caso ci si aspetta nel body come response un errore, per cui dentro passeremo error contenente un array della sua roba
            //serve installare express-json-validator-middleware
        expect(res.body).toEqual({
            errors: {
              body: expect.any(Array),
            },
          });
    });

})
