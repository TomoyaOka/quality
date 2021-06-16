const defaultData = {
    contactInfo: {
        contactType: "",
        companyName: "",
        personName: "",
        mail: "",
        text: ""
    }

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
    }
};