async function getContacts() {
    const axios = require('axios');
    let useToken = localStorage.getItem('token');

    let token = JSON.parse(useToken);
    token = token.token;


    const response = await axios.get('http://127.0.0.1:3000/api/contacts', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    const users = await response.data;
    return users
}


export { getContacts }