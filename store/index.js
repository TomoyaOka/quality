const defaultData = {
    contactInfo: {
        contactType: "",
        companyName: "",
        personName: "",
        mail: "",
        text: ""
    },
    openingSeen: false

}

export const state = () => ({
    ...defaultData
});


export const mutations = {
    update(state, data) {
        for (let key of Object.keys(data)) {
            state[key] = data[key];
        }
    },

    delete(state) {
        state["contactInfo"] = defaultData["contactInfo"]
    },
    openingSeen(state) {
        state.openingSeen = true
    }
};