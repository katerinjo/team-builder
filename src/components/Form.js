import React, { useState, useEffect } from "react";

function Form({ submitFun, targetMember }) {
    const defaults = { name: "", role: "", power: "", email: "" };
    const [member, setMember] = useState(defaults);

    function inputHandler({ target }) {
        setMember({ ...member, [target.id]: target.value });
    }

    function add(ev) {
        ev.preventDefault();
        submitFun(member);
        setMember(defaults);
    }

    useEffect(() => {
        if (targetMember) {
            setMember(targetMember);
        } else {
            setMember(defaults);
        }
    }, [targetMember]);

    return (
        <form onSubmit={add}>
            <label>
                Name:
            <input type="text" id="name" value={member.name} onChange={inputHandler} />
            </label>
            <label>
                Role:
            <input type="text" id="role" value={member.role} onChange={inputHandler} />
            </label>
            <label>
                Power:
            <input type="text" id="power" value={member.power} onChange={inputHandler} />
            </label>
            <label>
                Email:
            <input type="text" id="email" value={member.email} onChange={inputHandler} />
            </label>
            <input type="submit" value="Add To Team" />
        </form>
    );

}

export default Form;