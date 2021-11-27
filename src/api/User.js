const CREATE_USER_API = 'http://localhost:4000/user';
const GET_LIST_USER_API = 'http://localhost:4000/user';

const user = {
    create: (param) => {
        return fetch(CREATE_USER_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(param),
        });
    },
    get: () => {},
    getList: () => {
        return fetch(GET_LIST_USER_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    },
    update: () => {},
    delete: () => {},
};

export default user;
