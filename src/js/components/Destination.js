import React, {useState, useEffect} from "react";
import Activities from "../components/Activities";
import Button from "../components/Button";
import {removeDestination, updateDestination} from "../api/destinations";
import {getActivities} from "../api/activities";

function Destination({name, continent, id, onRemoveTask}) {
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
            name,
            continent
        };


    };

    const handleRemove = () => {
        removeDestination(id, () => {
           // onRemoveDestination(id);
        });
    };
    return (
        <section className="">
            <div className="">
                <div>
                    <h5>{name}</h5>
                    <h6 className="">{continent}</h6>
                </div>
            </div>

        </section>
    );
}

export default Destination;

