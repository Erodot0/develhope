import supertest from "supertest";
import app from "./app";
import { prismaMock } from './lib/prisma/client.mock'

const req = supertest(app);

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
            .expect('Content-Type', /application\/json/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080");//ci aspettiamo che sono la porta 8080 abbia accesso

        expect(res.body).toEqual(planets);
    });
})

describe("GET /planets/:id", () => {
    test("verifica", async () => {
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
        prismaMock.planet.findUnique.mockResolvedValue(planet);

        const res = await req
            .get('/planets/2')
            .expect(200)
            .expect('Content-Type', /application\/json/);

        expect(res.body).toEqual(planet);
    });

    test('il pianeta non esiste', async ()=>{
        // @ts-ignore
        prismaMock.planet.findUnique.mockResolvedValue(null);

        const res = await req
        .get('/planets/102')
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('cannot GET planets/102')
    })

    test('l\'id del pianeta non è valido', async ()=>{

        const res = await req
        .get('/planets/asd')
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot GET /planets/asd')
    })
})

describe("POST /planets", () => {
    test("valid request", async () => {
        const planet ={
            "id": 3,
            "name": "Venus",
            "description": null,
            "diameter": 5678,
            "moons": 2,
            "createdAt": "2022-12-03T12:55:16.720Z",
            "updatedAt": "2022-12-03T12:55:16.720Z"
        }

        // @ts-ignore
        prismaMock.planet.create.mockResolvedValue(planet);

        const res = await req
            .post('/planets')
            .send({
                name: "Venus",
                diameter: 5678,
                moons: 2,
            })
            .expect(201)
            .expect('Content-Type', /application\/json/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080");//ci aspettiamo che sono la porta 8080 abbia accesso

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
        prismaMock.planet.update.mockResolvedValue(planet)

        const res = await req
            .put('/planets/3')
            .send({
                name: "Venus",
                diameter: 5678,
                description:'this is a planet??',
                moons: 2,
            })
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080");//ci aspettiamo che sono la porta 8080 abbia accesso

        expect(res.body).toEqual(planet);
    });

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
        prismaMock.planet.update.mockRejectedValue(new Error('error'));

        const res = await req
        .put('/planets/102')
        .send({
            name: "Venus",
            diameter: 5678,
            description:'this is a planet??',
            moons: 2,
        })
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot PUT /planets/102')
    })

    test('l\'id del pianeta non è valido', async ()=>{

        const res = await req
        .put('/planets/asd')
        .send({
            name: "Venus",
            diameter: 5678,
            description:'this is a planet??',
            moons: 2,
        })
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot PUT /planets/asd')
    })
})

describe("DELETE /planets/:id", () => {
    test("verifica", async () => {

        const res = await req
            .delete('/planets/2') 
            .expect(204)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080");//ci aspettiamo che sono la porta 8080 abbia accesso

        expect(res.text).toEqual("");
    });

    test('il pianeta non esiste', async ()=>{
        // @ts-ignore
        prismaMock.planet.delete.mockRejectedValue(new Error("error"));

        const res = await req
        .delete('/planets/102')
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot DELETE /planets/102')
    })

    test('l\'id del pianeta non è valido', async ()=>{

        const res = await req
        .delete('/planets/asd')
        .expect(404)
        .expect('Content-Type', /text\/html/);

        expect(res.text).toContain('Cannot DELETE /planets/asd')
    })
})