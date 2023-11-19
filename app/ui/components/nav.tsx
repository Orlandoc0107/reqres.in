import React from "react";
import { useRouter } from 'next/navigation'

export default function Nav() {
  const router = useRouter()
  return (
    <div className="flex gap-2">
      <div>
        <button className="p-2 bg-color3 text-color1 border-color2 rounded-lg" type="button" onClick={() => router.push('/dashboard')}>
          Home
        </button>
      </div>
      <div>
        <button className="p-2 bg-color3 text-color1 border-color2 rounded-lg" type="button" onClick={() => router.push('/dashboard/users')}>
          Users
          </button>
      </div>
    </div>
  );
}
