import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

import emailjs from "@emailjs/browser";
import { Button } from "../components/Button";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId: string = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ?? "";
    const templateId: string =
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey: string = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY ?? "";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Julie",
          message: form.message,
        },
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <div className="flex flex-col pl-6 pr-6">
        <h1>Get In Touch</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            className="input outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="name">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="input"
            required
          />
          <label htmlFor="name">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Hi! I'd like to connect."
            className="input"
            required
          />

          <Button type="submit" variant="ghost" className="flex gap-2">
            <Send />
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
