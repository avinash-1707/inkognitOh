"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from "./ui/button";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const { data: session } = useSession();

  const user: User = session?.user;
  return (
    <nav className="absolute top-0 left-0 w-full z-20 py-4 px-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/web-logo.png"
            alt="logo"
            height={120}
            width={120}
            priority={true}
            className="w-auto h-auto dark:invert-0 invert"
          />
        </Link>
        <div className="flex gap-3 items-center">
          <ModeToggle />
          {session ? (
            <>
              <Button
                onClick={() => signOut()}
                className="w-full md:w-auto rounded-2xl"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/sign-in">
              <Button className="w-full md:w-auto rounded-3xl text-[13px] h-7.5 px-7">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
