const state = {
    comments: [
        {
            from: "小明",
            content: "我一定会督促孩子好好学习的。"
        },
        {
            from: "小华",
            content: "我一定会督促孩子好好学习的。"
        },
        {
            from: "小李",
            content: "我一定会督促孩子好好学习的。"
        },
    ]
}


const actions = {
    addComment({ commit }, comment) {
        commit('add', comment);
    }
};


const mutations = {
    add(state, comment) {
        state.comments.push(comment);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
} 