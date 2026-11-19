import dotenv from 'dotenv';
import { neon } from "@neondatabase/serverless";

dotenv.config({ path: './neon.env' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não definida em neon.env');
}

const sql = neon(process.env.DATABASE_URL);

export default sql;