import addFormats from "ajv-formats";
import {Validator, ValidationError} from "express-json-validator-middleware";
import { ErrorRequestHandler } from "express";

//file di configurazione di ajv che viene utilizzata da validator middleware

const validator= new Validator({});

addFormats(validator.ajv, ["date-time"])
.addKeyword('kind')
.addKeyword('modifier')

export const validate = validator.validate

//error request response e next vengono tutti da express, sta roba la utilizziamo per gestire meglio gli errori
//va importato l'handleError da express e assegnato come tipo al nostro validationError
//se l'errore è parte degli errori della middleware ci diamo response 422 che invia come dato error.validationErrors
//settato il primo chiamiamo next() cosi da passare alla prossima middleware e qui diamo il nostro errore default
export const ValidationErrorMiddleware: ErrorRequestHandler = (error, request, response, next) =>{
    if(error instanceof ValidationError){
        response.status(422).send({
            errors: error.validationErrors
        })
        next()
    }else{
        next(error)
    }
}

export * from "./planet"
//con export * from planet possiamo exportare le robe in planet