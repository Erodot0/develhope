module.exports ={
    preset: 'ts-jest',
    testEnvironment: 'node',
	verbose: true,
	clearMocks: true,
	setupFilesAfterEnv: ["./src/lib/prisma/client.mock.ts"],
}

//clearMocks fa la pulizia dopo ogni test che effettuiamo
//setupFilesAfterEnve rinizializza alla fine del test il mock definito