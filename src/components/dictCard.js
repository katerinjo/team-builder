import React from "react";

function DictCard({ data }) {
    return (
        <div className="card">
            {Object.keys(data).map(key => {
                <p>{key}: {data[key]}</p>
            })}
        </div>
    );
}

export default DictCard;