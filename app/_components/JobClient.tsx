"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const JobClient = () => {
  const jobs = useAppSelector((state) => state.job.jobs);
  const searchParams = useSearchParams();

  const search = searchParams.get("search")?.toLowerCase().trim() || "";

  const filteredJobs = jobs.filter((job) => {
    if (!search) return true;

    return (
      job.job_type.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search)
    );
  });

  if (filteredJobs.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-xl font-semibold text-gray-500">
          No matching jobs found
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {filteredJobs.map((job, idx) => (
        <Link key={idx} href={`/jobs/${idx}`}>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6">
            <h2 className="text-xl font-bold text-indigo-600">{job.title}</h2>
            <p className="text-gray-500">{job.location}</p>

            <div className="flex justify-between items-center my-4">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                {job.job_type}
              </span>
              <span className="text-gray-400 text-sm">
                Posted: {job.postedDate}
              </span>
            </div>

            <p className="text-gray-700 line-clamp-3">{job.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobClient;
