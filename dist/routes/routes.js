"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SubjectController_1 = require("../controllers/SubjectController");
const routes = (0, express_1.Router)();
routes.post('/subject', new SubjectController_1.SubjectController().create);
exports.default = routes;
//# sourceMappingURL=routes.js.map