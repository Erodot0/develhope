"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaMock = void 0;
const jest_mock_extended_1 = require("jest-mock-extended");
const client_1 = __importDefault(require("./client"));
jest.mock('./client', () => ({
    __esModule: true,
    default: (0, jest_mock_extended_1.mockDeep)()
}));
beforeEach(() => {
    (0, jest_mock_extended_1.mockReset)(exports.prismaMock);
});
exports.prismaMock = client_1.default;
//roba importata da www.prisma.io/guides/testing/unit-testing
//serve per fare test senza inviare richieste al database, va solo copiato e schiaffato dentro
//il modulo va importato nel server test
//# sourceMappingURL=client.mock.js.map