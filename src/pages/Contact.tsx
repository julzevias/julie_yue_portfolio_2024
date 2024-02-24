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
    <section className="content-container relative flex flex-col min-w-72">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="title-text text-center">Get In Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col mt-4 lg:mt-8 bg-slate-500 rounded-md shadow-2xl"
        >
          <div className="flex flex-col gap-5 p-5 lg:p-12">
            <div>
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="input mt-2"
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john.doe@example.com"
                className="input mt-2"
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="font-semibold">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hi! I'd like to connect."
                className="input resize-none h-36 mt-2"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="flex gap-2 mt-4 mb-5 ml:mb-7 ml:mt-8"
              size="icon"
            >
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <Send />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
