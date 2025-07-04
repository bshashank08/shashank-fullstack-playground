import { query } from '../../../lib/dbConnect.js'
import { NextResponse } from "next/server";

export async function GET() {
    try {
        console.log('Fetching appointment details...');
        const result = await query('SELECT id, name, email, phone_number, appointment_date FROM appointments');
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