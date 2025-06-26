import { Pool } from "pg";

// connection pool
export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ENVATO-APP',
  password: 'incorrect@psql',
  port: 5433,
});

export const query = (text, params) => pool.query(text, params);
