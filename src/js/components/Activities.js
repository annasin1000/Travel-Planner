import React, {useState} from "react";
import Activity from "./Activity";
import {createActivity } from "../api/activities";
import Button from "./Button";
function Activities({destinationID, form, setForm, activities, setActivities, status}) {
    const [activityDescription, setActivityDescription] = useState("");
    const handleNewActivity = e => {
        e.preventDefault();
        const activity = {
            description: activityDescription,
            timeSpent: 0
        };
        createActivity(destinationID, activity, data => {

            setActivities(prevState => {
                return [
                    data,
                    ...prevState
                ];
            });
            // Hide new operation form
            setForm(false);
            // Reset operation form input
            setActivityDescription("");
        });
    };
    const handleRemoveActivity = id => {
        setActivities(prevState => prevState.filter(activity => activity.id !== id));
    };
    return (
        <>
            {form && (
                <div className="">
                    <form onSubmit={handleNewActivity}>
                        <div className="">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Activity description"
                                   value={activityDescription}
                                   onChange={e => setActivityDescription(e.target.value)}/>
                            <div className="">
                                <Button color={""} icon="">Add</Button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            <ul className="">
                {activities.map(activity => (
                    <Activity key={activity.id} {...activity} onRemoveActivity={handleRemoveActivity} status={status}/>
                ))}
            </ul>
        </>
    );
}
export default Activities;
