import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
//creare il PrismaClient per creare le query ed esportarlo per andare in app.ts

export default prisma