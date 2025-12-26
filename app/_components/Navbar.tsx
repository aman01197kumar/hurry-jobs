"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // clear auth / redux / token here
    // dispatch(logout())
    router.push("/");
  };

  return (
    <nav className="w-full bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Job<span className="text-indigo-200">Portal</span>
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/admin/create-job-post"
            className="hover:text-indigo-200 transition"
          >
            Create Jobs
          </Link>

          <Link
            href="/admin/job-posted"
            className="hover:text-indigo-200 transition"
          >
            Job Posted
          </Link>


          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 px-4 py-1.5 rounded-lg font-medium hover:bg-indigo-100 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
