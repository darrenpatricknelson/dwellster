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
// fetching a community (SINGULAR)
export const getCommunity = async (title) => {
    const response = await fetch(`/community/fetch/blogs/${title}`);
    const data = await response.json();

    return data;

};

// fetching a community (PLURAL)
export const getCommunities = async (token) => {
    const response = await fetch(`/community/fetch/${token}`);
    const data = await response.json();

    return data;

};

// admin creating a new community
export const createNewCommunity = async (payload) => {
    const response = await fetch('/community/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();

    return data;

};

// user joining a community
export const joinCommunity = async (payload) => {
    const response = await fetch('/community/join', {
        method: 'PATCH',
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
// Blogs api requests
// adding a new blog
export const addNewBlog = async (payload) => {
    const response = await fetch(`/blog/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();

    return data;

};

// deleting a blog
export const deleteBlog = async (payload) => {
    const response = await fetch(`/blog/delete`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();

    return data;

};