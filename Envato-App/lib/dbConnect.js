// import { NextResponse } from "next/server";
import { Pool } from "pg";

// connection pool
export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ENVATO-APP',
  password: 'incorrect@psql',
  port: 5433,
});

// export default async function dbConnect(){
//     await pool.connect((err, client, release) =>{
//         if (err) {
//             return console.error('Error acquiring client', err.stack);
//             // return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
//         }
//         client.query('SELECT NOW()', (err, result) => {
//             release();
//             if (err) {
//                 return console.error('Error executing query', err.stack);
//                 // return NextResponse.json({ error: 'Query execution failed' }, { status: 500 });
//             }
//             console.log('Database connected successfully:', result.rows[0]);
//         });
//     })
// }

// export default async function dbConnect() {
//   try {
//     const client = await pool.connect();
//     return client;
//   } catch (err) {
//     console.error("Database connection error:", err.stack);
//     throw err;
//   }
// }

// Exporting a query function for reuse
export const query = (text, params) => pool.query(text, params);
