const axios = require('axios')

module.exports = {
    add: (a, b) => a + b,
    getUser: (name, family) => ({ name, family }),
    fetchUser: () => {
        return axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error')
    }
}