import axios from 'axios'
const token = localStorage.getItem('token')
export default {
    namespaced: true,
    state: {
        links: [],
        linkId: {}
    },
    getters: {
    },
    mutations: {
        getLinks(state, data) {
            state.links = data
        },
    },

    actions: {
        async get({ commit }) {
            const res = await axios('http://localhost:3000/api/links', {
                headers: {
                    "x-access-token": token
                }
            });
            const data = res.data;
            commit('getLinks', data)

            //Para el metodo check verificar si hay link | ciclo de vida de vue
            return data

        },

        async post({ commit }, link) {
            await axios.post('http://localhost:3000/api/links', link, {
                headers: {
                    "x-access-token": token
                }
            })
        },

        async update({ commit }, link) {
            await axios.put(`http://localhost:3000/api/links/${link.id}`, link, {
                headers: {
                    "x-access-token": token
                }
            })
        },

        async delet({ commit }, id) {
            await axios.delete(`http://localhost:3000/api/links/${id}`, {
                headers: {
                    "x-access-token": token
                }
            });
        },
    },
}