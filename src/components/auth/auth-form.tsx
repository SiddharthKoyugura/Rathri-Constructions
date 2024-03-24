"use client";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useSignIn } from "@clerk/nextjs";
import { useSignUp } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { catchClerkError } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "./password-input";

const authSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
    }),
});

type Inputs = z.infer<typeof authSchema>;

interface SignInFormProps {
  authType: "signin" | "signup";
}

export const AuthForm: React.FC<SignInFormProps> = ({ authType }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();
  const { isLoaded: isSignUpLoaded, signUp } = useSignUp();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (data: Inputs) => {
    if (!isLoaded) return;
    try {
      setIsLoading(true);

      const result = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });

        router.push(`${window.location.origin}/documents`);
      }
    } catch (err) {
      catchClerkError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const registerUser = async (data: Inputs) => {
    if (!isSignUpLoaded) return;

    try {
      setIsLoading(true);
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });

      // Send email verification code
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      router.push("/sign-up/verify-email");
      toast.message("Check your email", {
        description: "We sent you a 6-digit verification code.",
      });
    } catch (err) {
      catchClerkError(err);
    } finally {
      setIsLoading(false);
    }
  };

  function onSubmit(data: Inputs) {
    if (authType === "signup") {
      registerUser(data);
    } else {
      handleSignIn(data);
    }
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="rodneymullen180@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading && (
            <Loader className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          {authType === "signin" ? "Sign in" : "Continue"}
          <span className="sr-only">
            {authType === "signin" ? "Sign In" : "Continue"}
          </span>
        </Button>
      </form>
    </Form>
  );
};