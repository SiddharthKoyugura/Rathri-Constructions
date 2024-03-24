import Link from "next/link";

import { OAuthSignIn } from "@/components/auth/oauth-sign-in";
import { AuthForm } from "@/components/auth/auth-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthCardProps {
  authType: "signin" | "signup";
}

export const AuthCard: React.FC<AuthCardProps> = ({ authType }) => {
  return (
    <Card className="w-[500px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          {authType === "signin" ? "Sign in" : "Sign up"}
        </CardTitle>
        <CardDescription>
          Choose your preferred {authType === "signin" ? "sign in" : "sign up"}{" "}
          method
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <OAuthSignIn />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <AuthForm authType={authType} />
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          <span className="mr-1 hidden sm:inline-block">
            {authType === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>
          <Link
            aria-label={authType === "signin" ? "Sign up" : "Sign in"}
            href={authType === "signin" ? "/sign-up" : "/sign-in"}
            className="text-primary underline-offset-4 transition-colors hover:underline"
          >
            {authType === "signin" ? "Sign up" : "Sign in"}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};