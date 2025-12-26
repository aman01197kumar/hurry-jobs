"use client"

import { useState } from "react";
import { CreateJobType } from "../_types/CreateJobType";
import toast, { Toaster } from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import { addJob } from "@/redux/features/job/jobSlice";

const CreateJobPost = () => {
  const [jobDetails, setJobDetails] = useState<CreateJobType>({
    title: '',
    description: '',
    location: '',
    job_type: '',
    postedDate: ''
  })

  const dispatch = useAppDispatch()

  const jobPostSubmitHandler = (e: any) => {
    e.preventDefault()

    const { title, description, location, job_type, postedDate } = jobDetails

    if (!title || !description || !location || !job_type || !postedDate) {
      toast.error('Please fill all the fields')
      return
    }

    dispatch(addJob({
      title: title,
      description: description,
      location: location,
      job_type: job_type,
      postedDate: postedDate,
    }))

    toast.success('job created successfully!!')

    setJobDetails({
      title: '',
      description: '',
      location: '',
      job_type: '',
      postedDate: '',
    })
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Job Post
        </h1>

        {/* Form */}
        <form className="space-y-5" onSubmit={jobPostSubmitHandler}>

          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              placeholder="e.g. Frontend Developer"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={jobDetails.title}
              onChange={(e) =>
                setJobDetails(prev => ({
                  ...prev,
                  title: e.target.value
                }))
              }
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              rows={4}
              placeholder="Describe the role, responsibilities, and requirements..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={jobDetails.description}
              onChange={(e) =>
                setJobDetails(prev => ({
                  ...prev,
                  description: e.target.value
                }))
              }
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. New York, Remote"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={jobDetails.location}
              onChange={(e) =>
                setJobDetails(prev => ({
                  ...prev,
                  location: e.target.value
                }))
              }
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Type
            </label>
            <select
              value={jobDetails.job_type}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) =>
                setJobDetails(prev => ({
                  ...prev,
                  job_type: e.target.value as CreateJobType["job_type"]
                }))
              }
            >
              <option value="">Select job type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          {/* Posted Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Posted Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={jobDetails.postedDate}
              onChange={(e) =>
                setJobDetails(prev => ({
                  ...prev,
                  postedDate: e.target.value
                }))
              }
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Publish Job
            </button>
          </div>

        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default CreateJobPost;
