import type { Metadata } from "next";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import SignUpForm from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Create account",
  description: "Create an account to keep your generation history.",
};

export default function SignUpPage() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Free to start, ten generations a month, no card required."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/sign-in" className="font-medium text-brand hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <SignUpForm />
    </AuthCard>
  );
}
