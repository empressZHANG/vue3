import {
    request,
    panguURL
} from '@/utils/request'

export const subFilterData = () => {
    return request('/lumenapi/v5/c/class/new_filter', 'get')
}

export const typeFilterData = (param) => {
    return request('/lumenapi/v5/pc/c/new_cate', 'get', param)
}

export const courseListData = (param, header) => {
    return request('lumenapi/v5/pc/c/new_class_list', 'get', param, header)
}