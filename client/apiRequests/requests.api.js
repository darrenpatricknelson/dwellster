// this file will contain all the available api request functions
// Post request
export const postRequest = async (payload, url) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();

    return data;
};