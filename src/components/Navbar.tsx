"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();

  const user: User = session?.user;
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/30 to-black/10 bg-opacity-20 backdrop-blur-sm p-4 rounded-b-md ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/web-logo.png"
            alt="logo"
            height={120}
            width={120}
            priority={true}
            className="w-auto h-auto"
          />
        </Link>
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
            <Button
              variant="outline"
              className="w-full cursor-pointer md:w-auto"
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
