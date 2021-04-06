import request from '@/plugins/axios'

/**推荐歌单 
 * 说明 : 调用此接口 , 可获取推荐歌单
 * limit: 取出数量 , 默认为 30 (不支持 offset)
*/
export function getPersonalized(params) {
    return request({
        method: 'get',
        url: '/personalized',
        params
    })
}

/**推荐电台
 * 说明 : 调用此接口 , 可获取推荐电台
 */
export function getDJ() {
    return request({
        method: 'get',
        url: '/personalized/djprogram'
    })
}

/**全部新碟
 * limit : 返回数量 , 默认为 30
 * offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * area : ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
 */
export function getAlbum(params) {
    return request({
        method: 'get',
        url: '/album/new',
        params
    })
}

/**歌单分类
 * 说明 : 调用此接口,可获取歌单分类,包含 category 信息
 */
export function getCats() {
    return request({
        method: 'get',
        url: '/playlist/catlist',
    })
}