import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { AiOutlineHome } from "react-icons/ai";
import { BsLightningCharge, BsPatchCheckFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { HiCollection } from "react-icons/hi";
export default function Header() {
  return (
    <header className="flex justify-between items-center  flex-col-reverse sm:flex-row h-auto">
      <div className="flex justify-evenly flex-grow max-w-2xl">
        {" "}
        {/*max-w-2xl use for -> responsiveness*/}
        <HeaderItem Icon={AiOutlineHome} title="HOME" />
        <HeaderItem Icon={BsLightningCharge} title="TRENDING" />
        <HeaderItem Icon={BsPatchCheckFill} title="VERIFIED" />
        <HeaderItem Icon={HiCollection} title="COLLECTIONS" />
        <HeaderItem Icon={BiSearch} title="SEARCH" />
        <HeaderItem Icon={CiUser} title="ACCOUNT" />
      </div>
      <Image
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        height={100}
        width={200}
        alt="Hulu 2.0"
      />
    </header>
  );
}
