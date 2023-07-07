import multer from 'multer';
//import di multer

import mime from "mime";
//import di mime

import { randomUUID } from "node:crypto";
//import di random uuid

//funzione per avere un random id per prevenire che le immagini di due utenti abbiano lo stesso seriale
export const generatePhotoFilename = (mimeType: string) => {
  const randomFilename = `${randomUUID()}-${Date.now()}`;
  const fileExtension = mime.getExtension(mimeType);
  const filename = `${randomFilename}.${fileExtension}`;

  return filename;
};

//creazione di uno storage
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, callback)=>{
        return callback(null, generatePhotoFilename(file.mimetype))
    }
})

//il nostro setting di multer
export const multerOption ={}

//export dell'inizializzazione
export const initMulterMiddleware = ()=>{
    return multer({storage, ...multerOption})
}