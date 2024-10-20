import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Flashcard, MonsterCard, NPCCard } from "../entities/FlashCard";
import { Plan } from "../entities/Plan";
import { PointOfInterest } from "../entities/PointOfInterest";
import { Scenario } from "../entities/Scenario";
import { User } from "../entities/User";

dotenv.config();
const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;

export const dataSource = new DataSource({
  entities: [
    User,
    Scenario,
    Plan,
    PointOfInterest,
    Flashcard,
    NPCCard,
    MonsterCard,
  ],

  type: "postgres",
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: Number(DB_PORT),

  synchronize: true,
  logging: true,
});
