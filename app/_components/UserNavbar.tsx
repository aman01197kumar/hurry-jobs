"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleLogout = () => {
        router.push("/");
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        // navigate with search query
        router.push(`/jobs?search=${encodeURIComponent(search)}`);
    };

    return (
        <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
            <h1
                onClick={() => router.push("/jobs")}
                className="text-xl font-bold text-indigo-600 cursor-pointer"
            >
                JobPortal
            </h1>

            <form
                onSubmit={handleSearch}
                className="flex items-center flex-1 max-w-md mx-6 gap-2"
            >
                <input
                    type="text"
                    placeholder="Search jobs by job type or location"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                    type="submit"
                    className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
                >
                    Search
                </button>
            </form>


            <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition"
            >
                Logout
            </button>
        </nav>
    );
};

export default Navbar;
