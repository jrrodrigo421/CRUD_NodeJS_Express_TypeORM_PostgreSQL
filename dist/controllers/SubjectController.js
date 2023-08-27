"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectController = void 0;
class SubjectController {
    async create(req, res) {
        // return res.json("Primeiro controller criado e testado no postaman!!")
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ mensagem: 'O nome é Obrigatório' });
        }
    }
}
exports.SubjectController = SubjectController;
//# sourceMappingURL=SubjectController.js.map