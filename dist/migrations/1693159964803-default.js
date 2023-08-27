"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default1693159964803 = void 0;
class Default1693159964803 {
    constructor() {
        this.name = 'Default1693159964803';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
    }
}
exports.Default1693159964803 = Default1693159964803;
//# sourceMappingURL=1693159964803-default.js.map