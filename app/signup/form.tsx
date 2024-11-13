import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the Zod schema for validation
const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" })
});

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message?.toString()}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p className="text-red-500">{errors.password.message?.toString()}</p>}
      </div>

      <button className="text-black">Sign up</button>
    </form>
  );
}
