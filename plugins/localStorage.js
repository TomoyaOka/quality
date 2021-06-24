import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        paths: ['contactInfo'],  // localStorageに保存したいstoreを入れる
    })(store);
};