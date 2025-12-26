import toast, { Toaster } from "react-hot-toast";

interface ApplyModalProps {
    onClose: () => void;
}

const ApplyJobModal = ({ onClose }: ApplyModalProps) => {

    const onSubmitHandler = (e: any) => {
        e.preventDefault()
        toast.success('Application submitted successfully!!')
    }
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 animate-fadeIn">

                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Apply for this job
                </h2>

                <form className="space-y-4" onClick={onSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                        required
                    />

                    <input
                        type="url"
                        placeholder="Resume Link (Google Drive, Dropbox, etc.)"
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                        required
                    />

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default ApplyJobModal