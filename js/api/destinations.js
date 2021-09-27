const API = "http://localhost:3000";
//Opcja 1
export const getDestination = successCallback => {
    fetch(`${API}/db`, {

    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};

// Opcja 2
// export const getDestination = successCallback => {
//     fetch(`${API)/db`)
//       .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

export const createDestination = (destination, successCallback) => {
    fetch(`${API}/db`, {

        method: "POST",
        body: JSON.stringify(destination)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};

