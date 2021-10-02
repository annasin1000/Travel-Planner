import React, {useState} from "react";
import {removeActivity, updateActivity} from "../api/activities";
import Button from "./Button";
function Activity({description, id, onRemoveActivity, timeSpent: _timeSpent, status}) {
    const [timeSpentForm, setTimeSpentForm] = useState(false);
    const [timeSpent, setTimeSpent] = useState(_timeSpent);
    const [timeSpentInput, setTimeSpentInput] = useState("");

    const handleTimeSave = e => {
        e.preventDefault();
        // Validate input (number > 0)
        if (isNaN(parseInt(timeSpentInput)) || timeSpentInput < 0) {
            return;
        }
        const activity = {
            description,
            timeSpent: parseInt(timeSpent) + parseInt(timeSpentInput)
        };

        updateActivity(id, activity, data => {
            // Update local time spent state
            setTimeSpent(data.timeSpent);
            // Hide form
            setTimeSpentForm(false);
            setTimeSpentInput("");
        });
    };

    const handleRemove = () => {

        removeActivity(id, () => {

            onRemoveActivity(id);
        });
    };
    const hours = Math.floor(timeSpent / 60);
    const minutes = timeSpent % 60;
    return (
        <li className="">
            <div>
                {description}
                {timeSpent > 0 && (
                    <span className="">
            {hours}h {minutes}m
          </span>
                )}
            </div>
            {timeSpentForm && (
                <form onSubmit={handleTimeSave}>
                    <div className="">
                        <input type=""
                               className=""
                               placeholder=""
                               value={timeSpentInput}
                               style={{width: ""}}
                               onChange={e => setTimeSpentInput(e.target.value)}/>
                        <div className="">
                            <Button color={""} outline icon={""}/>
                            <Button color={""} outline icon={""} onClick={() => setTimeSpentForm(false)}/>
                        </div>
                    </div>
                </form>
            )}
            {!timeSpentForm && (
                <div>
                    {status === "" && (
                        <Button
                            icon={""}
                            color={""}
                            outline
                            small
                            className={""}
                            onClick={() => setTimeSpentForm(true)}>
                            Add time
                        </Button>
                    )}
                    <Button icon={""} color={""} outline small onClick={handleRemove}/>
                </div>
            )}
        </li>
    );
}
export default Activity;
