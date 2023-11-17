"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }
    router.push("/dashboard");
  };

  return (
<div className="flex justify-center items-center h-screen">
  <div className="w-full max-w-md bg-color4 p-8 rounded shadow-md">
    <h1 className="text-2xl font-bold mb-4">Login</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-color3">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="eve.holt@reqres.in"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-color3">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="cityslicka"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Ingresar
        </button>
      </div>
    </form>
    {errors.length > 0 && (
      <div className="mt-4">
        <ul className="list-disc list-inside text-red-500">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    )}
      <div className="normal-case p-4">
    <p>Email: eve.holt@reqres.in </p>
    <p> Password: cityslicka</p>
  </div>
  </div>

</div>

  );
};
export default LoginPage;
