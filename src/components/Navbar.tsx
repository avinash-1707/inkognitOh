"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from "./ui/button";

const Navbar = () => {
  const { data: session } = useSession();

  const user: User = session?.user;
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/30 to-black/10 bg-opacity-20 backdrop-blur-sm p-4 rounded-b-md ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a
          href="/"
          className="text-white text-2xl font-bold font-inter tracking-wide"
        >
          inkognitOh!
        </a>
        {session ? (
          <>
            <span className="mr-4 text-white/70 text-xl">
              Welcome, {user?.username || user?.email}
            </span>
            <Button onClick={() => signOut()} className="w-full md:w-auto">
              Logout
            </Button>
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="w-full md:w-auto">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
