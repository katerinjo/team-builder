import React, { useState } from "react";

function Form({ submitFun }) {
    const [member, setMember] = useState({});

    function inputHandler({ target }) {
        setMember({ ...member, [target.id]: target.value });
    }
    return (
        <form onSubmit={submitFun}>
            <label>
                Name:
            <input type="text" id="name" value={member.name} />
            </label>
            <input type="submit" value="Add To Team" />
        </form>
    );

}

export default Form;