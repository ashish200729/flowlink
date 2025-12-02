import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnAuth } from "@/lib/auth-utils";
import Link from "next/link";
import Image from "next/image";

const page = async () => {
    await requireUnAuth();

    return (
        <LoginForm />
    )
}

export default page;