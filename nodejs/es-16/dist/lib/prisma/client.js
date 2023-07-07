"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//creare il PrismaClient per creare le query ed esportarlo per andare in app.ts
exports.default = prisma;
//# sourceMappingURL=client.js.map