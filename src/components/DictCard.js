import React from "react";

function DictCard({ data, fun, buttonName }) {
    return (
        <div className="card">
            {Object.keys(data).map(key => (
                <p>{key}: {data[key]}</p>
            )).concat(fun ? [
                <button onClick={() => fun(data)}>{buttonName}</button>
            ] : [])}
        </div>
    );
}

export default DictCard;