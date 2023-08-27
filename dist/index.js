"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const routes_1 = __importDefault(require("./routes/routes"));
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(routes_1.default);
    //testando endpoint para inicialização primaria
    // app.get('/', (req, res) => {
    //   return res.json('HELLLOOOO TYPE')
    // })
    console.log('\n\nConectado na porta: \n', process.env.PORT);
    return app.listen(process.env.PORT);
});
//# sourceMappingURL=index.js.map