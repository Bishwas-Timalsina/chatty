 
import Text from "../../../components/Atomic/Text";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "../../../Interface/Interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../../schema/Schema";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <div>
        <Text content="Name" className="text-sm font-medium text-secondary/70" />
        <input
          {...register("name")}
          placeholder="Enter your name"
          className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:outline-none"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Text content="Email" className="text-sm font-medium text-secondary/70" />
        <input
          {...register("email")}
          placeholder="Enter your email"
          type="email"
          className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Text content="Message" className="text-sm font-medium text-secondary/70" />
        <textarea
          {...register("message")}
          placeholder="Write your message..."
          rows={5}
          className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:outline-none"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-accent text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
