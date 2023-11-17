import Image from "next/image";
import Link from "next/link";
import NextAuth from "./ui/components/login-btn";
import Regisbtn from "@/app/ui/components/regisbtn"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-4 m-4">
      <div className="mb-8">
        <Image src="/logo.png" alt="Logo Reqres" width={300} height={200} />
      </div>
      <div className="text-center gap-2">
        <h1 className="text-3xl font-bold mb-4">Bienvenido a mi aplicación Next.js</h1>
        <p className="text-lg">
          Esta aplicación es parte de mi práctica con Next.js y utiliza el servicio gratuito de Reqres.in para simular
          interacciones con una API REST. Reqres.in proporciona endpoints predefinidos que puedes utilizar para
          desarrollar y probar tu frontend sin necesidad de configurar una API propia.
        </p>
        <p className="text-lg mt-4">
          Agradezco a Reqres.in por ofrecer este servicio gratuito y facilitar la práctica y desarrollo de aplicaciones
          frontend sin la necesidad de una API personalizada.
        </p>
        <div className="flex justify-center items-center gap-2 m-2">
          <div>
          <NextAuth/>
          </div>
          <div>
          <Regisbtn/>
          </div>
        </div>
      </div>
    </main>
  );
}
