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

//creiamo un oggetto che va a contenere il nostro origin
const optionCors ={
    origin:"http://localhost:8080"
}

const app = express();

app.use(express.json())

//la nostra app andrà ad utilizzare cors che è un metodo al quale passiamo le opzioni decise sopra
//questi parametri verranno letti nell'header
app.use(cors(optionCors))

app.get('/planets', async (req, res) => {
	const planets = await prisma.planet.findMany()
	res.json(planets);
});

app.get('/planets/:id(\\d+)', async (req, res, next) => {
    const planetId = Number(req.params.id)
    
    const planet = await prisma.planet.findUnique({
        where:{ id: planetId}
    })
    
    if(!planet){
        res.status(404)
        return next(`cannot GET planets/${planetId}`)
    }

	res.json(planet);
});

app.post('/planets', validate({body:planetSchema}),async (req, res) => {
	const planetData: PlanetData = req.body;

    const planet = await prisma.planet.create({
        data: planetData
    })

	res.status(201).json(planet);
});

app.put('/planets/:id(\\d+)', validate({body:planetSchema}),async (req, res, next) => {
	const planetData: PlanetData = req.body;
    const planetId = Number(req.params.id);

    try {
        const planet = await prisma.planet.update({
            where: {id: planetId},
            data: planetData
        })
        res.status(200).json(planet);
    } catch (error) {
        res.status(404)
        next(`Cannot PUT /planets/${planetId}`)
    }
});

app.delete('/planets/:id(\\d+)',async (req, res, next) => {
    const planetId = Number(req.params.id);

    try {
        const planet = await prisma.planet.delete({
            where: {id: planetId}
        })
        res.status(204).end();
    } catch (error) {
        res.status(404)
        next(`Cannot DELETE /planets/${planetId}`)
    }
});

app.use(ValidationErrorMiddleware)

//npm run dev avvio del server

export default app;