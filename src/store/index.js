import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/api'
});

let user = localStorage.getItem('token');
if (!user) {
    user = {
        token: '',
    };
} else {
    try {
        user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = user.token;
    } catch (ex) {
        user = {
            token: '',
        };
    }
}

// Create a new store instance.
const store = createStore({
    state: {
        status: '',
        user: user,
        userInfos: {
            email: '',
        },
    },
    computed: {
        console: () => console,
        window: () => window,
    },
    mutations: {
        setStatus: function(state, status) {
            state.status = status;
        },
        logUser: function(state, user) {
            instance.defaults.headers.common['Authorization'] = user.token;
            localStorage.setItem('token', JSON.stringify(user));
            state.user = user;
        },
        userInfos: function(state, userInfos) {
            state.userInfos = userInfos;
        },
        logout: function(state) {
            state.user = {
                token: '',
            }
            localStorage.removeItem('token');
        }
    },
    actions: {
        login: ({ commit }, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/login', {
                        email: userInfos.email,
                        password: userInfos.password
                    })
                    .then(function(response) {
                        commit('setStatus', '');
                        commit('logUser', response.data);
                        resolve(response);
                    })
                    .catch(function(error) {
                        commit('setStatus', 'error_login');
                        reject(error);
                    });
            });
        },
        register: ({ commit }, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/signup', {
                        email: userInfos.email,
                        password: userInfos.password
                    })
                    .then(function(response) {
                        commit('setStatus', 'created');
                        resolve(response.JSON);
                    })
                    .catch(function(error) {
                        commit('setStatus', 'error_create');
                        reject();
                    });
            });
        },
        getUserInfos: ({ commit }) => {
            instance.post('/login')
                .then(function(response) {
                    commit('userInfos', response.data.infos);
                })
                .catch(function() {});
        },
        verifyJWT: ({ commit }) => {
            instance.get('/jwt')
                .then(function(response) {
                    commit('tokenIS', response.data.tokenValid);
                })
                .catch(function(err) {});
        },
        getUrl: ({ commit }) => {
            instance.get('/urlSAVE')
                .then(function(response) {
                    commit('urlSave', response.url);
                })
                .catch(function(err) {});
        },
    }
})

export default store;