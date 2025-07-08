import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(() => setStatus("sent"))
      .catch((error) => {
        console.error("Error al enviar email:", error);
        setStatus("error");
        console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC);

      });

  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-900 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>

      {status === "sent" ? (
        <p className="text-green-400 font-semibold">
          ¡Gracias! Tu mensaje fue enviado.
        </p>
      ) : (
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            required
            className="px-4 py-3 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Tu email"
            required
            className="px-4 py-3 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Escribime tu idea o consulta..."
            required
            className="px-4 py-3 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition disabled:opacity-50"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-sm">
              Hubo un problema. Intentá de nuevo más tarde.
            </p>
          )}
        </form>
      )}
    </section>
  );
};

export default Contact;
