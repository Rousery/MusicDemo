import localStorage from './localStorage'

export default {
    cats: JSON.parse(localStorage.getItem("cats")),
    buttonList: JSON.parse(localStorage.getItem("buttonList"))
}