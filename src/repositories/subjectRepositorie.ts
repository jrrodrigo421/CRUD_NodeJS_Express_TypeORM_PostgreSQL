
import { AppDataSource } from "../data-source";
import { Subject } from "../entities/Subject";

export const subjectReposiroty = AppDataSource.getRepository(Subject)