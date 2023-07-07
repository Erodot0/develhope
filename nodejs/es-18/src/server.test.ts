import supertest from "supertest";
import app from "./app";
import { prismaMock } from './lib/prisma/client.mock'

const req = supertest(app);

//Test del GET - chiamata di tutti i planets
describe("GET /planets", () => {
    test("verifica", async () => {
        const planets = [
            {
                "id": 2,
                "name": "Venus",
                "description": null,
                "diameter": 5678,
                "moons": 2,
                "createdAt": "2022-12-02T19:18:53.231Z",
                "updatedAt": "2022-12-02T19:20:04.375Z"
            },
            {
                "id": 1,
                "name": "Mercury",
                "description": null,
                "diameter": 1234,
                "moons": 12,
                "createdAt": "2022-12-02T19:18:08.998Z",
                "updatedAt": "2022-12-02T19:20:04.375Z"
            }
        ]
        // @ts-ignore
        prismaMock.planet.findMany.mockResolvedValue(planets);

        const res = await req
            .get('/planets')
            .expect(200)
            .expect('Content-Type', /application\/json/);

        expect(res.body).toEqual(planets);
    });
})

//Test del GET - chiamata del singolo planet il tutto avviene con route/:id paro paro come su react
describe("GET /planets/:id", () => {
    test("verifica", async () => {
        //il nostro oggetto è singolo
        const planet = {
                "id": 2,
                "name": "Venus",
                "description": null,
                "diameter": 5678,
                "moons": 2,
                "createdAt": "2022-12-02T19:18:53.231Z",
                "updatedAt": "2022-12-02T19:20:04.375Z"
            }
        // @ts-ignore
        prismaMock.planet.findUnique.mockResolvedValue(planet);//con il metodo findUnique ci si fa restituire l'unico con quell'id

        const res = await req
            .get('/planets/2') //qui nel mio caso passo id 2 per cui mi aspetto il rientro del pianeta id 2
            .expect(200)
            .expect('Content-Type', /application\/json/);

        expect(res.body).toEqual(planet);//ci si aspetta che venga restituito nel body il planet dichiarato qui
    });

    //gestione di un pianeta inesistente
    test('il pianeta non esiste', async ()=>{
        // @ts-ignore
        prismaMock.planet.findUnique.mockResolvedValue(null);//vogliamo trovare il null

        //mettiamo un pianeta che non c'è, il 102 in questo caso, ci si aspetta errore 404 ed il tipo di dato restituito sarà di testo
        const res = await req
        .get('/planets/102')
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('cannot GET planets/102')//ci aspettiamo un response testuale che contiene la frase
    })

    //gestione di un valore stringa
    test('l\'id del pianeta non è valido', async ()=>{

        //mettiamo un pianeta che non c'è, il 102 in questo caso, ci si aspetta errore 404 ed il tipo di dato restituito sarà di testo
        const res = await req
        .get('/planets/asd')
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot GET /planets/asd')//ci aspettiamo un response testuale che contiene la frase
    })
})

//Test del POST - Creazione di un singolo planet
describe("POST /planets", () => {
    test("valid request", async () => {
        const planet ={ //qua dentro si cambia planet con il contenuto che viene generato su postman
            "id": 3,
            "name": "Venus",
            "description": null,
            "diameter": 5678,
            "moons": 2,
            "createdAt": "2022-12-03T12:55:16.720Z",
            "updatedAt": "2022-12-03T12:55:16.720Z"
        }

        // @ts-ignore
        prismaMock.planet.create.mockResolvedValue(planet);//aggiungiamo il mockResolve di planet con modalità create

        const res = await req
            .post('/planets')
            .send({//qua mettiamo il vecchio contenuto della const planet
                name: "Venus",
                diameter: 5678,
                moons: 2,
            })
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

        const res = await req
            .post('/planets')
            .send(planet)
            .expect(422)
            .expect('Content-Type', /application\/json/);

        expect(res.body).toEqual({
            errors: {
                body: expect.any(Array),
            },
        });
    });
})

//Test del put - Modifica di un componente
describe("PUT /planets/:id", () => {
    test("valid request", async () => {
        const planet ={
            "id": 3,
            "name": "Venus",
            "description":'this is a planet??',
            "diameter": 5678,
            "moons": 2,
            "createdAt": "2022-12-03T12:55:16.720Z",
            "updatedAt": "2022-12-03T12:55:16.720Z"
        }

        // @ts-ignore
        prismaMock.planet.update.mockResolvedValue(planet);//metodo update per il mock

        const res = await req
            .put('/planets/3')//metodo put, con id del planet passato
            .send({
                name: "Venus",
                diameter: 5678,
                description:'this is a planet??',//aggiunta di un nuovo dato
                moons: 2,
            })
            .expect(200)  //ci si aspetta il 200 non come create ma come tutto OK
            .expect('Content-Type', /application\/json/);

        expect(res.body).toEqual(planet);
    });

    //gestione dell'invalid request
    test("invalid request", async () => {
        const planet =
        {
            diameter: 5678,
            moons: 2
        }

        const res = await req
            .put('/planets/102')
            .send(planet)
            .expect(422)
            .expect('Content-Type', /application\/json/);

        expect(res.body).toEqual({
            errors: {
                body: expect.any(Array),
            },
        });
    });

    test('il pianeta non esiste', async ()=>{
        // @ts-ignore
        prismaMock.planet.update.mockRejectedValue(new Error('error'));//vogliamo che all'update ci sia un reject del valore mockauppato che ci dia errore

        const res = await req
        .put('/planets/102')
        .send({//qua si mette il valore put che dovrebbe andare a buon fine
            name: "Venus",
            diameter: 5678,
            description:'this is a planet??',
            moons: 2,
        })
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot PUT /planets/102')//ci aspettiamo un response testuale che contiene la frase
    })

    //gestione di un valore stringa
    test('l\'id del pianeta non è valido', async ()=>{

        const res = await req
        .put('/planets/asd')
        .send({//qua c'è il send per completezza ma è inutile
            name: "Venus",
            diameter: 5678,
            description:'this is a planet??',
            moons: 2,
        })
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot PUT /planets/asd')//ci aspettiamo un response testuale che contiene la frase
    })
})

//Test del delete - cancellazione di un elemento attraverso il delete
describe("DELETE /planets/:id", () => {
    test("verifica", async () => {

        //nessun oggetto in entrata giustamente

        const res = await req
            .delete('/planets/2') 
            .expect(204)// 204 sta per no content, quindi è ciò che ci serve se si cancella

        expect(res.text).toEqual("");//ci si aspetta che venga restituito una stringa di testo vuoto
    });

    //gestione di un pianeta già inesistente
    test('il pianeta non esiste', async ()=>{
        // @ts-ignore
        prismaMock.planet.delete.mockRejectedValue(new Error("error"));//se un pianeta è stato eliminato non va rieseguita la sua eliminazione

        //mettiamo un pianeta che non c'è, il 102 in questo caso, ci si aspetta errore 404 ed il tipo di dato restituito sarà di testo
        const res = await req
        .delete('/planets/102')
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot DELETE /planets/102')//ci aspettiamo un response testuale che contiene la frase
    })

    //gestione di un valore stringa non esistente, non capisco perché questo test
    test('l\'id del pianeta non è valido', async ()=>{

        //mettiamo un pianeta che non c'è, il 102 in questo caso, ci si aspetta errore 404 ed il tipo di dato restituito sarà di testo
        const res = await req
        .delete('/planets/asd')
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot DELETE /planets/asd')//ci aspettiamo un response testuale che contiene la frase
    })
})