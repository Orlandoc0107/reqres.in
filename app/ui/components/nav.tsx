import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <div>
        <button className="p-2 bg-color3 text-color1 border-color2 rounded-lg">
          <Link href="dashboard">Home</Link>
        </button>
      </div>
    </div>
  );
}
