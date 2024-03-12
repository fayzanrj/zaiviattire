"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  closeMenu?: () => void;
  variant: "SEARCH_MENU" | "PAGE";
}

const SearchBar: React.FC<SearchBarProps> = ({ closeMenu, variant }) => {
  // Getting query params from URL
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  // Getting path from URL
  const path = usePathname();

  // Setting initial value of search input if URL path is '/search'
  const [searchText, setSearchText] = useState<string>(
    q && path === "/search" ? q : ""
  );
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${searchText}`);

    if (variant === "SEARCH_MENU") {
      closeMenu && closeMenu();
    }
  };

  return (
    <form className="relative w-full h-12" onSubmit={handleSubmit}>
      {/* label for screen readers only */}
      <label className="sr-only" htmlFor="searchInput">
        Search
      </label>
      {/* Search Input */}
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget?.value)}
        placeholder="Search something e.g. Tees, Bottoms"
        id="searchInput"
        className="relative w-full h-full p-2 pr-12 outline-none rounded-xl"
      />
      <button
        className="absolute right-0 h-12 px-2 rounded-l-none rounded-xl"
        aria-label="search button"
      >
        {/* Search Icon */}
        <IoSearch size={"1.7rem"} />
      </button>
    </form>
  );
};

export default SearchBar;
