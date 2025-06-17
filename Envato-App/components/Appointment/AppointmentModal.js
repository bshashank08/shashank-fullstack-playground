import React, { useState } from "react";
import classes from "./AppointmentModal.module.css";

export default function AppointmentModal({ dialogRef }) {
  const [form, setForm] = useState({ name: "", email: "", phone_number: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleClose = () => {
    if (dialogRef && dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = "Invalid email address";
    }
    if (!form.phone_number.trim()) {
      errs.phone_number = "Phone is required";
    } else if (!/^[\d\s+()-]{7,}$/.test(form.phone_number)) {
      errs.phone_number = "Invalid phone number";
    }
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setSuccess(null);

    try {
      // Format the appointment_date to yyyy/mm/dd
      const formattedDate = form.appointment_date
        ? new Date(form.appointment_date)
            .toISOString()
            .split("T")[0]
            .replace(/-/g, "/")
        : "";

      console.log("Formatted Date:", formattedDate); // Debugging log
      console.log("Request Body:", { ...form, appointment_date: formattedDate }); // Debugging log

      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...form, appointment_date: formattedDate}),
      });

      console.log("Response Status:", res.status); // Debugging log
      const responseData = await res.json();
      console.log("Response Data:", responseData); // Debugging log

      if (res.ok) {
        setSuccess("Appointment booked successfully!");
        setForm({
          name: "",
          email: "",
          phone_number: "",
          appointment_date: "",
        });
        setTimeout(() => {
          setSuccess(null);
          handleClose();
        }, 1200);
      } else {
        setSuccess("Failed to book appointment.");
      }
    } catch(error) {
      console.error("Error:", error); // Debugging log
      setSuccess("Failed to book appointment.");
    }
    setSubmitting(false);
  };

  return (
    <dialog className={classes.dialog} ref={dialogRef}>
      <div className={classes.modalContent}>
        <button
          type="button"
          aria-label="Close"
          onClick={handleClose}
          className={classes.closeButton}
        >
          &times;
        </button>
        <h2 className={classes.modalTitle}>Schedule your Appointment</h2>
        <form
          className={classes.modalForm}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className={classes.modalInput}
            value={form.name}
            onChange={handleChange}
            disabled={submitting}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && (
            <span
              id="name-error"
              style={{ color: "#f15b5a", fontSize: "0.95em" }}
            >
              {errors.name}
            </span>
          )}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className={classes.modalInput}
            value={form.email}
            onChange={handleChange}
            disabled={submitting}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <span
              id="email-error"
              style={{ color: "#f15b5a", fontSize: "0.95em" }}
            >
              {errors.email}
            </span>
          )}
          <input
            name="phone_number"
            type="tel"
            placeholder="Your Phone Number"
            className={classes.modalInput}
            value={form.phone_number}
            onChange={handleChange}
            disabled={submitting}
            aria-invalid={!!errors.phone_number}
            aria-describedby="phone-error"
          />
          {errors.phone_number && (
            <span
              id="phone-error"
              style={{ color: "#f15b5a", fontSize: "0.95em" }}
            >
              {errors.phone_number}
            </span>
          )}
          <input
            name="appointment_date"
            type="date"
            placeholder="dd/mm/yyyy"
            className={classes.modalInput}
            value={form.appointment_date}
            onChange={handleChange}
            disabled={submitting}
            aria-invalid={!!errors.appointment_date}
            aria-describedby="date-error"
          />
          {errors.appointment_date && (
            <span
              id="date-error"
              style={{ color: "#f15b5a", fontSize: "0.95em" }}
            >
              {errors.appointment_date}
            </span>
          )}
          <button
            type="submit"
            className={classes.modalSubmit}
            disabled={submitting}
          >
            {submitting ? "Booking..." : "Submit"}
          </button>
          {success && (
            <div
              style={{
                color: success.includes("success") ? "#34c5a1" : "#f15b5a",
                marginTop: 8,
                textAlign: "center",
              }}
            >
              {success}
            </div>
          )}
        </form>
      </div>
    </dialog>
  );
}
