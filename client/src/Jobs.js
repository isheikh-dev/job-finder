import React from "react";
import { Typography } from "@material-ui/core";
import Job from "./Job";

export default function Jobs({ jobs }) {
    return (
        <div className={"jobs"}>
            <Typography variant="h1">Entry level software Jobs</Typography>
            <div>
                {jobs.map(job => (
                    <Job job={job} />
                ))}
            </div>
        </div>
    );
}
