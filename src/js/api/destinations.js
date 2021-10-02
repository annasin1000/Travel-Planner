const API = "http://localhost:3000";
//Opcja 1
//
//
//Fetch, mount przykład
// function FetchExample () {
//     const [data, setData] = useState(false);
//
//     useEffect(() => {
//         fetch("https://api.ipify.org")
//             .then(response => response.text())
//             .then(ip => {
//                 setData(ip);
//             });
//     }, []);
//
//     if (data === false) {
//         return <h1>Ustalam adres IP...</h1>
//     } else {
//         return <h1>Twoje IP: {data}</h1>
//     }
// }
// Funkcja - przyjmuje pobrane z serwera API dane i zapisywać je w stanie lokalnym,
//     aby wyrenderować odpowiednie elementy.
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
        // headers: {
        //     // "Authorization": API_KEY,
        //     // "Content-Type": "application/json",
        // },
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

export const updateDestination = (id, destination, successCallback) => {
    fetch(`${API}/db/${id}`, {
        // headers: {
        //     // "Authorization": API_KEY,
        //     // "Content-Type": "application/json",
        // },
        method: "PUT",
        body: JSON.stringify(task)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};


export const removeDestination = (id, successCallback) => {
    fetch(`${API}/db/${id}`, {
        // headers: {
        //     "Authorization": API_KEY
        // },
        method: "DELETE"
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback();
            }
        })
        .catch(err => console.log(err));
};
