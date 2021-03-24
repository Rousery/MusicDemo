export default {
    category(state) {
        let typeArr = [];
        for (let i = 0; i < 5; i++) {
            typeArr[i] = state.cats.filter(item => item.category == i);
        }
        return typeArr
    }
}