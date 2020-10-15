import React, { useState } from "react";
import data from "./data.json";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  const filteredJobs = jobs.filter(filterFunc);

  function filterFunc({ role, level, tools, languages }) {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (languages) {
      tags.push(...languages);
    }

    if (tools) {
      tags.push(tools);
    }

    return filters.every((filter) => tags.includes(filter));
  }

  function handleTagClick(tag) {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  function handleFilterClick(passedFilter) {
    setFilters(filters.filter((f) => f !== passedFilter));
  }

  function clearFilters() {
    setFilters([]);
  }

  React.useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img
          className="w-full"
          src="./images/bg-header-desktop.svg"
          alt="header-image"
        />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className="flex flex-wrap bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative">
            {filters.map((filter) => {
              return (
                <span
                  className="mr-4 mb-4 p-6 rounded font-bold cursor-pointer lg:mb-0"
                  onClick={() => handleFilterClick(filter)}
                >
                  <span className="text-teal-500 bg-teal-100 p-2">
                    {filter}
                  </span>
                  <span className="bg-teal-500 text-teal-100 p-2">×</span>
                </span>
              );
            })}
            <button
              className="font-bold text-gray700 ml-auto"
              onClick={clearFilters}
            >
              Clear
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
