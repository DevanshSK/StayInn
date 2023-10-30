"use client";
import React from "react";
import { Search, Logo, UserMenu } from "./index";
import Container from "../Container";

function Navbar() {
  return (
    <div className="sticky w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
