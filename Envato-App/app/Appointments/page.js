// This is a server component
export default async function AppointmentsPage() {

  let appointments = [];
  let error = null;
  try {
    const res = await fetch('http://localhost:3000/api/appointments', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch appointments');
    }
    const data = await res.json();
    appointments = data.appointments || [];
  } catch (err) {
    error = err.message || 'Unknown error';
  }
 
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-[#f5f7fa] py-10 px-2">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-8 text-center tracking-tight">
          Booked Appointments
        </h1>
        {error && (
          <div className="text-[#f15b5a] bg-[#fff0f0] border border-[#f15b5a]/20 rounded-lg px-4 py-3 mb-6 text-center font-semibold">
            Error: {error}
          </div>
        )}
        {!error && appointments.length === 0 && (
          <div className="text-[#888] text-center py-8 text-lg">No appointments found.</div>
        )}
        {!error && appointments.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#00a3c8]">
                  <th className="py-3 px-4 text-left font-bold text-[text-white]">Name</th>
                  <th className="py-3 px-4 text-left font-bold text-[text-white]">Email</th>
                  <th className="py-3 px-4 text-left font-bold text-[text-white]">Phone</th>
                  <th className="py-3 px-4 text-left font-bold text-[text-white]">Booked At</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, idx) => (
                  <tr
                    key={appt.id}
                    className={
                      idx % 2 === 0
                        ? 'bg-white hover:bg-[#eaf7fa] transition-colors'
                        : 'bg-[#f8fafc] hover:bg-[#eaf7fa] transition-colors'
                    }
                  >
                    <td className="py-3 px-4 font-semibold text-[#222]">{appt.name}</td>
                    <td className="py-3 px-4 text-[#4670ce] underline underline-offset-2">
                      {appt.email}
                    </td>
                    <td className="py-3 px-4 text-black">{appt.phone_number}</td>
                    <td className="py-3 px-4 text-[#666] text-sm">
                      {new Date(appt.appointment_date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
 
 