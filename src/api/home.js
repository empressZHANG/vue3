import {
    request,
    panguURL
} from '@/utils/request'

//首页category
export const findAllCategory = () => {
    return request('/lumenapi/v4/blue/class/cate_list', 'get')
}
export const findCategoryClassify = (param) => {
    return request('/lumenapi/v5/pc/c/cate_type', 'get', param)
}

//首页banner
export const findBanner = (param) => {
    return request(`${panguURL}/v1/c/carousel/carousel_list`, 'get', param)
}