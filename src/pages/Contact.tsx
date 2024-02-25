import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/Button";
import Loader from "@/components/Loader";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface Form {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);

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
      .then(() => {
        toast.success("Message sent!");
      })
      .catch((e) => {
        toast.error("Failed to send message: " + e.text);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="content-container relative flex flex-col items-center"
    >
      <h1 className="title-text">Get In Touch</h1>

      <form
        onSubmit={handleSubmit}
        className="teardrop-border w-fit sm:w-full flex flex-col items-center sm:flex-row mt-4 lg:mt-8 bg-slate-500 gap-2 lg:gap-5 p-5 lg:p-10"
      >
        <div className="flex-grow-0 flex-shrink">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Doe"
            className="input self-start mt-1 sm:mt-2"
            required
          />
        </div>

        <div className="flex-grow-0 flex-shrink">
          <label htmlFor="name" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="john.doe@example.com"
            className="input self-start mt-1 sm:mt-2"
            required
          />
        </div>

        <div className="flex-grow">
          <label htmlFor="name" className="font-semibold">
            Message
          </label>
          <input
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Hi! I'd like to connect."
            className="input self-start w-36 mt-1 sm:mt-2"
            required
          />
        </div>

        <div className="flex content-center sm:self-end flex-grow-0 flex-shrink mt-2">
          <Button type="submit" disabled={isLoading} className="flex input">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <div className="flex flex-end flex-row gap-2">
                  <Send size={16} />
                  <span className="">Send</span>
                </div>
              </>
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
