import supertest from "supertest";
import app from "./app";
//importiamo supertest ed app

//import di prismaMock cosi da fare i test
import {prismaMock} from './lib/prisma/client.mock'

const req = supertest(app);
//assegnamo a req supertest che processa la nostra app

test("GET /planets", async () => {
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
    prismaMock.planet.findMany.mockResolvedValue(planets);//findmany trova tutti i valori, mockResolve applica il singleton al valore che passiamo

	const res = await req
    .get('/planets')
    .expect(200)
    .expect('Content-Type', /application\/json/);

	expect(res.body).toEqual(planets);
});
//dentro test andiamo a definire il metodo GET, al quale passiamo la route /planets
//callback async per attendere la risposta assegnamo a res l'await della req ovvero di supertest(app)
//concatenazione di .get(route >/planets).expect(tutto a buon fine >200).expect(tipo di dato >"Content-Type", /application\/json/)
//valore in uscita atteso expect(res.body).toEqual([nostra array con valori])

//eseguiamo npm test per vedere se tutto è come ci si aspetta

//npm test