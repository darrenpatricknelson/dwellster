// this file will contain all the available api request functions
// user authentication requests 
// get user details - This request is made when the component mounts
export const getUserDetails = async (token) => {
    const res = await fetch(`/auth/user/${token}`);
    const data = await res.json();

    return data.user[0];

};

// this request is made when a user signs in or registers 
export const userPostRequest = async (payload, url) => {
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


//
//
//
// community api requests
// export const; 