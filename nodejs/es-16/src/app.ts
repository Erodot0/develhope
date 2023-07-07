import express from 'express';
import 'express-async-errors';
import prisma from './lib/prisma/client';
//importato express e l'async errors in aggiunta importare prisma 

const app = express();
//app diventa il nostro server

app.get('/planets', async (req, res) => {
	const planets = await prisma.planet.findMany()//metodo per restituire l'intero array, quando si fa il get passare in json
	res.json(planets);
});
//com il metodo get diciamo che in localhost:3000/ indirizzo planets chiediamo ci venga dato il responst di planets
//in formato json per essere letto

//npm run dev avvio del server
//curl localhost:3000/planets -v

export default app;