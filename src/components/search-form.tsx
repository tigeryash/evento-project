"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px] ">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 focus:ring-2 focus:bg-white/10 transition"
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
};

export default SearchForm;
