import React, {useState} from "react";
import Button from "./Button";
import {createDestination} from "../api/destinations";

///onNewDestination????????????

function NewDestination({onNewDestination}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleAddDestination = e => {
        e.preventDefault();
        const destination = {
            name,
            description,
            status: "open"
        };

        createDestination(destination, onNewDestination);
    };
    return (
        <div className="">
            <div className="">
                <h1 className="">New destination</h1>
                <form onSubmit={handleAddDestination}>
                    <div className="">
                        <input type=""
                               className=""
                               name=""
                               placeholder=""
                               value={name}
                               onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="">
                        <input type="text"
                               className=""
                               name="description"
                               placeholder="Description"
                               value={description}
                               onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <Button color={""} icon={""}>Add destination</Button>
                </form>
            </div>
        </div>
    );
}
export default NewDestination;

