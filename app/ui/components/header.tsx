"use client";

import { useSession, signOut } from "next-auth/react";
import NextAuth from "./login-btn";
import Nav from "@/app/ui/components/nav";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleGoBack = () => {
    router.back();
  };

  if (session) {
    return (
      <div className="flex justify-between items-center bg-color4 p-2">
        <div>
          <button
            className="p-2 bg-color3 text-color1 border-color2 rounded-lg"
            onClick={handleGoBack}
          >
            Regresar
          </button>
        </div>
        <div className="flex gap-2">
          <div className="p-2">
            <Nav />
          </div>
          <div className="p-2">
            <NextAuth />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-end bg-color4 p-2">
    </div>
  );
}
