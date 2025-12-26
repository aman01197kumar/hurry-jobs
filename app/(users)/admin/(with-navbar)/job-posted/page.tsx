'use client'

import { CreateJobType } from "@/app/_types/CreateJobType";
import { editJob, removeJob } from "@/redux/features/job/jobSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useState } from "react";   

const JobPosted = () => {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [jobForm, setJobForm] = useState<CreateJobType>({
        title: "",
        description: "",
        location: "",
        job_type: "",
        postedDate: "",
    });
    const jobs = useAppSelector((state) => state.job.jobs);
    const dispatch = useAppDispatch();


    const startEdit = (index: number) => {
        setEditingIndex(index);
        setJobForm(jobs[index]);
    };

    const saveEdit = () => {
        if (editingIndex !== null) {
            dispatch(editJob({ index: editingIndex, updatedJob: jobForm }));
            setEditingIndex(null);
        }
    };

    if (jobs.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-2xl font-bold text-gray-700">
                    Create new job posts!!
                </p>
            </div>
        );
    }


    return (
        <div className="p-6 space-y-6">
            {jobs.map((job, idx) => (
                <div key={idx} className="border p-4 rounded-lg flex justify-between items-center">
                    <div>
                        <h3 className="font-bold">{job.title}</h3>
                        <p>{job.description}</p>
                        <p>{job.location} — {job.job_type}</p>
                        <p className="text-sm text-gray-500">Posted: {job.postedDate}</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <button
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-indigo-600 transition"
                            onClick={() => startEdit(idx)}
                        >
                            Edit
                        </button>
                        <button
                            className="flex items-center justify-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
                            onClick={() => dispatch(removeJob(idx))}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}

            {/* Edit Form Modal */}
            {editingIndex !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white p-6 rounded-lg w-96 space-y-4">
                        <h2 className="text-xl font-bold">Edit Job</h2>
                        <input
                            type="text"
                            placeholder="Job Title"
                            className="w-full border px-3 py-2 rounded"
                            value={jobForm.title}
                            onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                        />
                        <textarea
                            placeholder="Description"
                            className="w-full border px-3 py-2 rounded"
                            value={jobForm.description}
                            onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full border px-3 py-2 rounded"
                            value={jobForm.location}
                            onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                        />
                        <select
                            className="w-full border px-3 py-2 rounded"
                            value={jobForm.job_type}
                            onChange={(e) => setJobForm({ ...jobForm, job_type: e.target.value as CreateJobType["job_type"] })}
                        >
                            <option value="">Select type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                        </select>
                        <input
                            type="date"
                            className="w-full border px-3 py-2 rounded"
                            value={jobForm.postedDate}
                            onChange={(e) => setJobForm({ ...jobForm, postedDate: e.target.value })}
                        />
                        <div className="flex justify-end gap-3 mt-2">
                            <button className="px-4 py-2 rounded bg-gray-300" onClick={() => setEditingIndex(null)}>Cancel</button>
                            <button className="px-4 py-2 rounded bg-blue-500 text-white" onClick={saveEdit}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobPosted;
