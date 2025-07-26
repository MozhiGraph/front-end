export default function translate(text) {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:8000/translate", 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    text: text
                })
            }
        )
        .then(resp => {
            if (resp.ok) {
                resolve(resp.text());
            } else {
                reject(new Error("Network response was not ok"));
            }
        })
        .catch(error => {
            reject(error);
        })
    });
}