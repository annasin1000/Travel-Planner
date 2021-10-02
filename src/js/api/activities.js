// export const getActivities = (id, successCallback) => {
//     fetch(`${API}/destinations/${id}/activities`, {
//
//     })
//         .then(r => r.json())
//         .then(data => {
//             if (data.error === false && typeof successCallback === "function") {
//                 successCallback(data.data);
//             }
//         })
//         .catch(err => console.log(err));
// };
//
// export const createActivity = (id, activity, successCallback) => {
//     fetch(`${API}/destinations/${id}/activities`, {
//
//         method: "POST",
//         body: JSON.stringify(activity)
//     })
//         .then(r => r.json())
//         .then(data => {
//             if (data.error === false && typeof successCallback === "function") {
//                 successCallback(data.data);
//             }
//         })
//         .catch(err => console.log(err));
// };
//
// export const updateActivity = (id, activity, successCallback) => {
//     fetch(`${API_URL}/activities/${id}`, {
//
//         method: "PUT",
//         body: JSON.stringify(operation)
//     })
//         .then(r => r.json())
//         .then(data => {
//             if (data.error === false && typeof successCallback === "function") {
//                 successCallback(data.data);
//             }
//         })
//         .catch(err => console.log(err));
// };
//
// export const removeActivity = (id, successCallback) => {
//     fetch(`${API_URL}/activities/${id}`, {
//         headers: {
//             "Authorization": API_KEY
//         },
//         method: "DELETE"
//     })
//         .then(r => r.json())
//         .then(data => {
//             if (data.error === false && typeof successCallback === "function") {
//                 successCallback();
//             }
//         })
//         .catch(err => console.log(err));
// };
