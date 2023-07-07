import express from 'express';
import 'express-async-errors';
import prisma from './lib/prisma/client';

//import di validate che va messo all'interno di app.post, e che usa planetSchema per aspettarsi il valore valido
//se valido il nostro const planet sarà di tipo PlanetData
import { 
    validate,
    ValidationErrorMiddleware,
    planetSchema,
    PlanetData 
} from './lib/validation';

const app = express();

app.use(express.json())//questo server per usare le middleware

app.post('/planets', validate({body:planetSchema}),async (req, res) => {
	const planet: PlanetData = req.body
	res.status(201).json(planet);
});


//importante!!! il validationErrorMiddleware va passato dopo che siano state gestite le request
app.use(ValidationErrorMiddleware)

//npm run dev avvio del server
//curl localhost:3000/planets -v

export default app;