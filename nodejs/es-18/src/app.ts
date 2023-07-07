import express from 'express';
import 'express-async-errors';
import prisma from './lib/prisma/client';

import { 
    validate,
    ValidationErrorMiddleware,
    planetSchema,
    PlanetData 
} from './lib/validation';

const app = express();

app.use(express.json())

//route planets
app.get('/planets', async (req, res) => {
	const planets = await prisma.planet.findMany()
	res.json(planets);
});

//route per tutti i dati dentro planets
//(\\d+)redux per dire di entrare 1 digir o più
app.get('/planets/:id(\\d+)', async (req, res, next) => {
    const planetId = Number(req.params.id) //con questo stiamo dicendo preleva dalla richiesta il parametro in entrata come id ovvero /:id

    //da qui si dice ok prima, trovami l'unico id, where(cerca nel database sul valore id) id corrispondente a planetId (/planets/:id <<si sto id che entra nella request) 
	const planet = await prisma.planet.findUnique({
        where:{ id: planetId}
    })
    
    //gestione dell'assenza di un planet, se no il test fallisce per cui status 404 e messaggio d'errore
    if(!planet){
        res.status(404)
        return next(`cannot GET planets/${planetId}`)
    }

	res.json(planet);
});//test su postman e restituisce quelli presenti nel database

app.post('/planets', validate({body:planetSchema}),async (req, res) => {
	const planetData: PlanetData = req.body;

    //con questa parte attraverso il create stiamo andando a passare il dato nel db
    const planet = await prisma.planet.create({
        data: planetData
    })

	res.status(201).json(planet);
});

//route per la modifica dei dati
app.put('/planets/:id(\\d+)', validate({body:planetSchema}),async (req, res, next) => {
	const planetData: PlanetData = req.body;
    const planetId = Number(req.params.id);

    //con questa parte attraverso l'update stiamo andando a richiedere where id è di tipo number allora i data tutto nel trycatch
    try {
        const planet = await prisma.planet.update({
            where: {id: planetId},
            data: planetData
        })
        res.status(200).json(planet);
    } catch (error) {
        res.status(404)//gestione dell'errore
        next(`Cannot PUT /planets/${planetId}`)
    }
});

//route per la cancellazione dei dati
app.delete('/planets/:id(\\d+)',async (req, res, next) => { //non ci serve nessuna validazione del body, tanto meno ricevere un body
    const planetId = Number(req.params.id);

    //con questa parte attraverso il delete stiamo andando a richiedere "where id" per la cancellazione di quest ultimo
    try {
        const planet = await prisma.planet.delete({
            where: {id: planetId}
        })
        res.status(204).end();//con end diciamo che 204 è l'ultima cosa che si invia, se end contenesse qualcosa li sarebbe la fine dei dati
    } catch (error) {
        res.status(404)//gestione dell'errore
        next(`Cannot DELETE /planets/${planetId}`)
    }
});

app.use(ValidationErrorMiddleware)

//npm run dev avvio del server
//curl localhost:3000/planets -v

export default app;