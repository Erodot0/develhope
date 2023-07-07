import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

import prisma from './client';

jest.mock('./client', () => ({
	__esModule: true,
	default: mockDeep<PrismaClient>()
}));

beforeEach(() => {
	mockReset(prismaMock);
});

export const prismaMock = (prisma as unknown) as DeepMockProxy<PrismaClient>;


//roba importata da www.prisma.io/guides/testing/unit-testing
//serve per fare test senza inviare richieste al database, va solo copiato e schiaffato dentro
//il modulo va importato nel server test