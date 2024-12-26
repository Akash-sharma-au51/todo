import React from "react";

const Filter = ({ currentFilter, onFilterChange }) => {
    return (
        <div>
            <button
                onClick={() => onFilterChange("all")}
                disabled={currentFilter === "all"}
            >
                All
            </button>
            <button
                onClick={() => onFilterChange("completed")}
                disabled={currentFilter === "completed"}
            >
                Completed
            </button>
            <button
                onClick={() => onFilterChange("pending")}
                disabled={currentFilter === "pending"}
            >
                Pending
            </button>
        </div>
    );
};

export default Filter;
