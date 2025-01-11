import React from "react";
import searchIcon from "../assets/search-icon.svg";
import Image from "next/image";

export default function SearchInput({
  isFocused,
  setIsFocused,
}: {
  isFocused: boolean;
  setIsFocused: (state: boolean) => void;
}) {
  return (
    <div className="relative w-full">
      <Image
        src={searchIcon}
        alt="Search icon"
        width={28}
        height={28}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 ${
          isFocused ? "opacity-0" : "opacity-100"
        }`}
      />
      <input
        className={`bg-gray-200 w-full rounded-2xl outline-none text-xl h-14 transition-all duration-500 ease-in-out ${
          isFocused ? "pl-4" : "pl-14"
        } caret-violet-500`}
        placeholder="Busque pelo nome"
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
