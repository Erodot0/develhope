"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMulterMiddleware = exports.multerOption = exports.generatePhotoFilename = void 0;
const multer_1 = __importDefault(require("multer"));
//import di multer
const mime_1 = __importDefault(require("mime"));
//import di mime
const node_crypto_1 = require("node:crypto");
//import di random uuid
//funzione per avere un random id per prevenire che le immagini di due utenti abbiano lo stesso seriale
const generatePhotoFilename = (mimeType) => {
    const randomFilename = `${(0, node_crypto_1.randomUUID)()}-${Date.now()}`;
    const fileExtension = mime_1.default.getExtension(mimeType);
    const filename = `${randomFilename}.${fileExtension}`;
    return filename;
};
exports.generatePhotoFilename = generatePhotoFilename;
//creazione di uno storage
const storage = multer_1.default.diskStorage({
    destination: "uploads/",
    filename: (req, file, callback) => {
        return callback(null, (0, exports.generatePhotoFilename)(file.mimetype));
    }
});
//il nostro setting di multer
exports.multerOption = {};
//export dell'inizializzazione
const initMulterMiddleware = () => {
    return (0, multer_1.default)({ storage, ...exports.multerOption });
};
exports.initMulterMiddleware = initMulterMiddleware;
//# sourceMappingURL=multer.js.map