import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { setUser } from "@/store/user/actions";

const loginFormSchema = z.object({
  username: z.string().trim().min(1, "required"),
  password: z.string().trim().min(1, "required"),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const formSubmit = (data: LoginFormValues) => {
    console.log(data);
    setUser(data.username);
  };

  return (
    <form
      className="border flex flex-col gap-4 p-4"
      onSubmit={handleSubmit(formSubmit)}
    >
      <input
        className="border"
        placeholder="username"
        {...register("username")}
      />
      <p className="text-red-600">{errors.username?.message}</p>
      <input
        className="border"
        placeholder="password"
        {...register("password")}
      />
      <p className="text-red-600">{errors.password?.message}</p>

      <button className="bg-gray-200" type="submit">
        submit
      </button>
    </form>
  );
};

const Login = () => {
  return <LoginForm />;
};

export default Login;
