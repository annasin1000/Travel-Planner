import React, {useState, useEffect} from "react";
import Activities from "../components/Activities";
import Button from "../components/Button";
import {removeDestination, updateDestination} from "../api/destinations";
import {getActivities} from "../api/activities";

function Destination({title, description, id, status: _status, onRemoveTask}) {
    const [status, setStatus] = useState(_status);
    const [activities, setActivities] = useState([]);
    const [activitiesForm, setActivitiesForm] = useState(false);
    useEffect(() => {

        getActivities(id, setActivities);
    }, []);

    const toggleActivitiesForm = () => {
        setActivitiesForm(prevState => !prevState);
    };

    const handleFinish = () => {
        const destination = {
            title,
            description,
            status: "closed"
        };

        updateDestination(id, destination, () => {
            setStatus("closed");
        });
    };

    const handleRemove = () => {

        removeDestination(id, () => {
            onRemoveDestination(id);
        });
    };
    return (
        <section className="">
            <div className="">
                <div>
                    <h5>{title}</h5>
                    <h6 className="">{description}</h6>
                </div>
                <div>
                    {status === "open" && (
                        <>
                            <Button icon=""
                                    color=""
                                    small
                                    onClick={toggleActivitiesForm}
                                    className="">
                                Add activity
                            </Button>
                            <Button icon=""
                                    color=""
                                    small
                                    onClick={handleFinish}>
                                Finish
                            </Button>
                        </>
                    )}
                    {activities.length === 0 &&
                    <Button icon={""} color={""} outline size={""} onClick={handleRemove}
                            className=""/>}
                </div>
            </div>
            <Activities destinationID={id}
                        form={activitiesForm}
                        setForm={setActivitiesForm}
                        activities={activities}
                        setOActivities={setActivities}
                        status={status}/>
        </section>
    );
}

export default Destination;

