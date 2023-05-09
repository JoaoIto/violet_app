import { PrismaClient } from '@prisma/client';

export const PORT = process.env.PORT || '8000';
export const prisma = new PrismaClient();
