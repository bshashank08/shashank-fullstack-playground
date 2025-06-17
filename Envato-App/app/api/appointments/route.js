import { query } from '../../../lib/dbConnect.js'
import { NextResponse } from "next/server";
import { Pool } from "pg";

// connection pool
// export const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'ENVATO-APP',
//   password: 'incorrect@psql',
//   port: 5433,
// });

export async function GET() {
    try {
        const result = await query('SELECT * FROM appointments', []);
        return NextResponse.json({appointments: result.rows}, {status: 200});
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'Failed to fetch Appointment details' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { name, email, phone_number, appointment_date } = await req.json();
        const result = await query(
            'INSERT INTO appointments (name, email, phone_number, appointment_date) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, phone_number, appointment_date]
        );
        return NextResponse.json({success: true, id: result.rows[0]}, {status: 201});
    } catch (error) {
        console.error('Error adding appointment details:', error);
        return NextResponse.json({ error: 'Failed to add appointment details' }, { status: 500 });
    }
}