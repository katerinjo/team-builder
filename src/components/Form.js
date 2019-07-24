import React, { useState } from "react";

function Form({ submitFun }) {
    const [member, setMember] = useState({});

    function inputHandler({ target }) {
        setMember({ ...member, [target.id]: target.value });
    }

    function add(ev) {
        ev.preventDefault();
        submitFun(member);
    }

    return (
        <form onSubmit={add}>
            <label>
                Name:
            <input type="text" id="name" value={member.name} onChange={inputHandler} />
            </label>
            <input type="submit" value="Add To Team" />
        </form>
    );

}

export default Form;