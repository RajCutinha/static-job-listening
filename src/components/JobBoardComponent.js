import React from "react";

const JobBoardComponent = ({ job, handleTagClick }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }

  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div
      className={
        "flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded lg:flex-row " +
        (job.featured && "border-l-4 border-teal-500 border-solid") +
        " lg:my-8"
      }
    >
      <div>
        <img
          src={job.logo}
          alt={job.company}
          className="w-20 h-20 -mt-16 mb-4 lg:h-24 lg:w-24 lg:my-0"
        />
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <h3 className="font-bold text-teal-500">
          {job.company}
          {job.new && (
            <span className="bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full uppercase text-base">
              New
            </span>
          )}
          {job.featured && (
            <span className="bg-gray-900 text-white font-bold py-1 px-2 rounded-full uppercase text-base">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
        {tags
          ? tags.map((tag) => (
              <span
                className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded cursor-pointer lg:mb-0"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
