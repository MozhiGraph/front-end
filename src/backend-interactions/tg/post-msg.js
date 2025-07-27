export default function postMessage(message, dialogId) {    
    return new Promise((resolve, reject) => {
        fetch("http://localhost:8000/post-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message,
                dialogId: dialogId
            })
        })
        .then(resp => {
            if (resp.ok) {
                resolve(resp.json());
            } else {
                reject(new Error("Network response was not ok"));
            }
        })
        .catch(error => reject(error));
    });
}