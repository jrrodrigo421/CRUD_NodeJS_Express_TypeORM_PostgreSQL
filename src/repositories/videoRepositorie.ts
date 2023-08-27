import { AppDataSource } from "../data-source";
import { Video } from "../entities/Video";

export const videoRespository = AppDataSource.getRepository(Video)