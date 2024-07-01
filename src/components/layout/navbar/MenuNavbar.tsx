"use client";

import { Button } from "@/components/ui/button";
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
            <Link
              href="/"
              className="text-lg font-semibold text-content-foreground"
            >
              <span className="text-primary">Axolote</span>
              <span>Web</span>
            </Link>
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
