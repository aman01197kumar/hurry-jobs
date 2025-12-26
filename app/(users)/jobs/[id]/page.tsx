"use client";

import ApplyJobModal from "@/app/_components/ApplyJobModal";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "next/navigation";
import { useState } from "react";

const JobDetails = () => {
    const params = useParams();

    // convert id to number safely
    const id = Number(params.id);

    const [open, setOpen] = useState(false);

    const jobs = useAppSelector((state) => state.job.jobs);

    // guard against invalid id or missing job
    if (isNaN(id) || !jobs[id]) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Job not found</p>
            </div>
        );
    }

    const job = jobs[id];

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white max-w-3xl w-full rounded-xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-indigo-600 mb-4">
                    {job.title}
                </h1>

                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                        {job.job_type}
                    </span>
                    <span className="text-gray-600">{job.location}</span>
                    <span className="text-gray-400">
                        Posted: {job.postedDate}
                    </span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8">
                    {job.description}
                </p>

                <button
                    onClick={() => setOpen(true)}
                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all"
                >
                    Apply Now
                </button>
            </div>

            {open && <ApplyJobModal onClose={() => setOpen(false)} />}
        </div>
    );
};

export default JobDetails;
