import request from '@/utils/request'

//首页category
export const findAllCategory = () => {
    return request('/v4/blue/class/cate_list', 'get')
}
export const findCategoryClassify = (param) => {
    return request('/v5/pc/c/cate_type', 'get', param)
}