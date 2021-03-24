import localStorage from './localStorage'
export default {
    handleButton(state, item) {
        // item.activity = !item.activity;
        state.cats.map((current) => {
            if (current.name == item.name) current.activity = !current.activity;
        });
        if (item.activity && state.buttonList.indexOf(item.name) == -1) {
            state.buttonList.push(item.name);
        } else if (!item.activity) {
            let index = state.buttonList.indexOf(item.name);
            state.buttonList.splice(index, 1);
        }
        localStorage.setItem('buttonList', JSON.stringify(state.buttonList))
        localStorage.setItem('cats', JSON.stringify(state.cats))
    }
}