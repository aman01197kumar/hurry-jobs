import { Suspense } from "react";
import JobClient from "@/app/_components/JobClient";
const Jobs = () => {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading jobs...</p>}>
      <JobClient />
    </Suspense>
  );
};

export default Jobs;
