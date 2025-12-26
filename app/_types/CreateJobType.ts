export interface CreateJobType {
    title: string;
    description: string;
    location: string;
    job_type: "" | "Full-time" | "Part-time" | "Contract";
    postedDate: string; // ISO date string (YYYY-MM-DD)
}