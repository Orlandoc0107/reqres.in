'use client'
import { useSession, signIn, signOut } from "next-auth/react";
import NextAuth from "./login-btn";
import Nav from '@/app/ui/components/nav'

export default function Header() {
  const { data: session, status } = useSession();
  
  if (session) {
    return (
      <div className='flex gap-2 bg-color4 justify-end'>
        <div className="p-2">
          <Nav/>
        </div>
        <div className="p-2">
        <NextAuth/>
        </div>
      </div>
    );
  }
  return (
    <div className='flex gap-2 bg-color4 justify-end'>
      <div className="flex p-4"></div>
    </div>
  );
}
