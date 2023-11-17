import Link from "next/link";
import React from "react";

export default function Regisbtn() {
  return (
    <div>
      <button className="p-2 bg-color3 text-color1 border-color2 rounded-lg">
        <Link href="/register">Registrarse</Link>
      </button>
    </div>
  );
}
