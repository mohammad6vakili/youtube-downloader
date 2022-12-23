import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full py-2 shadow  h-[65px] flex justify-between items-center px-5">
      <span style={{ opacity: ".5" }}>©2022, All rights reserved.</span>
      <div className="flex items-center">
        <Link href={"https://uncutino.ir/contact_us"}>
          <div className="text-sm font-light cursor-pointer">Contact us</div>
        </Link>
        <Link href={"https://uncutino.ir/add"}>
          <div
            style={{ marginLeft: "20px" }}
            className="text-sm font-light cursor-pointer"
          >
            Add Video
          </div>
        </Link>
      </div>
    </div>
  );
}
