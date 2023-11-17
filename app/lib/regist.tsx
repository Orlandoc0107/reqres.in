'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("pistol");
  const [registrationMessage, setRegistrationMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const res = await fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseAPI = await res.json();

    if (!res.ok) {
      setErrors(responseAPI.message);
      return;
    }

    // Guardar la respuesta en la variable
    console.log(responseAPI)
    setRegistrationMessage(responseAPI.message);

    // Redirigir a la página de confirmación
    const queryString = new URLSearchParams({ data: JSON.stringify(responseAPI) }).toString();
    router.push(`/confirmation?${queryString}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-color4 p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-color3">
              Email
            </label>
            <input
              type="email"
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
              placeholder="pistol"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
            Registrarse
          </button>
        </form>
        <div className="p-4">
            <p>email : eve.holt@reqres.in</p>
            <br/>
            <p>Password : pistol</p>
          </div>
        {errors.length > 0 && (
          <div className="mt-4">
            <ul className="list-disc list-inside text-red-500">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        {registrationMessage && (
          <div className="mt-4">
            <p>Registro exitoso: {registrationMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
