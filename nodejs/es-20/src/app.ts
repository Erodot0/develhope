import express from 'express';
import 'express-async-errors';
import prisma from './lib/prisma/client';
import cors from 'cors';
//importiamo cors

import {
    validate,
    ValidationErrorMiddleware,
    planetSchema,
    PlanetData
} from './lib/validation';

//import di initMulterMiddleware che importa le impostazioni
import { initMulterMiddleware } from './lib/middleware/multer';

//cosi la si richiama easy
const upload = initMulterMiddleware()

const optionCors = {
    origin: "http://localhost:8080"
}

const app = express();

app.use(express.json())

app.use(cors(optionCors))

app.get('/planets', async (req, res) => {
    const planets = await prisma.planet.findMany()
    res.json(planets);
});

app.get('/planets/:id(\\d+)', async (req, res, next) => {
    const planetId = Number(req.params.id)

    const planet = await prisma.planet.findUnique({
        where: { id: planetId }
    })

    if (!planet) {
        res.status(404)
        return next(`cannot GET planets/${planetId}`)
    }

    res.json(planet);
});

app.post('/planets', validate({ body: planetSchema }), async (req, res) => {
    const planetData: PlanetData = req.body;

    const planet = await prisma.planet.create({
        data: planetData
    })

    res.status(201).json(planet);
});

app.put('/planets/:id(\\d+)', validate({ body: planetSchema }), async (req, res, next) => {
    const planetData: PlanetData = req.body;
    const planetId = Number(req.params.id);

    try {
        const planet = await prisma.planet.update({
            where: { id: planetId },
            data: planetData
        })
        res.status(200).json(planet);
    } catch (error) {
        res.status(404)
        next(`Cannot PUT /planets/${planetId}`)
    }
});

app.delete('/planets/:id(\\d+)', async (req, res, next) => {
    const planetId = Number(req.params.id);

    try {
        const planet = await prisma.planet.delete({
            where: { id: planetId }
        })
        res.status(204).end();
    } catch (error) {
        res.status(404)
        next(`Cannot DELETE /planets/${planetId}`)
    }
});

//upload di single (un solo elemento) photo fa riferimento al nome dato nell'input nel file upload.html
app.post('/planets/:id(\\d+)/photo',
    upload.single("photo"),
    async (req, res, next) => {
        console.log('request file', req.file)

        //se non c'è nessun file errore 400
        if (!req.file) {
            res.status(400)
            return next('no file uploaded')
        }

        //altrimenti il file esist
        const photoFile = req.file.filename;
        res.status(201).json({photoFile})
    })


app.use(ValidationErrorMiddleware)

//npm run dev avvio del server

export default app;