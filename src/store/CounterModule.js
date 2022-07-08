export default {
    namespaced: true,
    state: {
        counter: {
            count: 0
        }
    },
    mutations: {
        INCR_COUNTER: (state) => {
            state.counter.count++
        },
        DECR_COUNTER: (state) => {
            state.counter.count--
        },
        INCRBY_COUNTER: (state, payload) => {
            state.counter.count = state.counter.count + payload.val
        }
    },
    actions: {
        IncrementCounter: ({ commit }) => {
            commit('INCR_COUNTER')
        },
        DecrementCounter: ({ commit }) => {
            commit('DECR_COUNTER')
        },
        IncreByCounter: ({ commit }, payload) => {
            commit('INCRBY_COUNTER', payload)
        },
    },

}
