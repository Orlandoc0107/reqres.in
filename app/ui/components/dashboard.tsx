"use client";
import { useSession } from "next-auth/react";
import ListUsers from "@/app/ui/components/ListUsers"

const UiDashboard = () => {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <div className="rounded min-h-screen min-w-full gap-4 flex flex-col">
        <div className="mx-2 my-2 flex justify-end">
        </div>
        <div className=" gap-2 flex flex-col p-4 my-2">
          <ListUsers />
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default UiDashboard;
