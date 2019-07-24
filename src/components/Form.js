import React, { useState } from "react";

function Form({ submitFun }) {
    const defaults = { name: "" };
    const [member, setMember] = useState(defaults);

    function inputHandler({ target }) {
        setMember({ ...member, [target.id]: target.value });
    }

    function add(ev) {
        ev.preventDefault();
        submitFun(member);
        setMember(defaults);
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