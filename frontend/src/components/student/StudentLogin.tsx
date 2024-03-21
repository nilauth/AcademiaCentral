import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { axiosClient } from "@/api/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
});

export function StudentLogin() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        await axiosClient.get("/sanctum/csrf-cookie", {
          baseURL: import.meta.env.VITE_BACKEND_URL,
        });
      } catch (error) {
        console.error("Failed to fetch CSRF token:", error);
      }
    };

    fetchCSRFToken();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const navigate = useNavigate();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await axiosClient
      .post("/login", values)
      .then((value) => {
        if (value.status === 204) {
          window.localStorage.setItem("ACCESS_TOKEN", "test");
          navigate("/student/dashboard");
        }
      })
      .catch(({ response }) => {
        console.log(response);
        form.setError("email", {
          message: response.data.errors.email.join(),
        });
        form.setError("password", {
          message: response.data.message,
        });
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='name@example.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.formState.isSubmitting ? (
          <>
            <Button disabled className='w-28 relative'>
              <LoaderCircle className='absolute left-4 h-4 w-4 animate-spin' />
              Submit
            </Button>
          </>
        ) : (
          <Button type='submit' className='w-28'>
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
}

export default StudentLogin;
