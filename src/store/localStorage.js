let buttonList = ["全部", "推荐歌单", "精品歌单", "官方", "排行榜"]
if (!localStorage.getItem('buttonList')) {
    localStorage.setItem('buttonList', JSON.stringify(buttonList))
}
export default localStorage;