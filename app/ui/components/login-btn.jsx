"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NextAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    if (session) {
      await router.push("/");
    }

    await signOut({ redirect: false });
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div>
        <button
          className="p-2 bg-color3 text-color1 border-color2 rounded-lg"
          onClick={handleSignOut}
        >
          Salir
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        className="p-2 bg-color3 text-color1 border-color2 rounded-lg"
        onClick={() => signIn()}
      >
        Ingresar
      </button>
    </div>
  );
}
