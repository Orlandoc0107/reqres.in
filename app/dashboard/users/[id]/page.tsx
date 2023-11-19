"use client";

// ...

import { useEffect, useState } from "react";
import { fetchSingleUser } from "@/app/lib/reqres";
import { User, UserSimpleResponse } from "@/app/lib/definitions";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  const [userData, setUserData] = useState<UserSimpleResponse | null>(null);
  console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: UserSimpleResponse = await fetchSingleUser(params.id);
        console.log("Data from API:", data);

        if (data.data) {
          const user: User = data.data;
          console.log("User Data:", user);
          setUserData(data);
        } else {
          console.error("No se encontraron datos de usuario.");
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 m-4">
<div className="bg-color3 p-8 rounded-md shadow-md">
  {userData && userData.data ? (
    <div key={userData.data.id} className="text-center">
      <h1 className="text-4xl font-bold text-color1 mb-4">
        {userData.data.first_name} {userData.data.last_name}
      </h1>
      <p className="text-lg text-color4 mb-6">{userData.data.email}</p>
      <Image
        src={userData.data.avatar}
        alt={`${userData.data.first_name} Avatar`}
        width={150}
        height={100}
        className="rounded-full mx-auto"
      />
    </div>
  ) : null}
</div>
    </div>

  );
}
