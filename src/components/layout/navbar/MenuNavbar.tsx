"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

export const MenuNavbar = ({ children }: { children: React.ReactNode }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
        <Button
          variant="ghost"
          className="focus:bg-white"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <HamburgerMenuIcon className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-col gap-4 w-full">{openMenu && children}</div>
    </>
  );
};
