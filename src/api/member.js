import {
    request,
    javaURL
} from '@/utils/request'

export const getInterestList = () => {
    return request(`${javaURL}/u/member/interests/v2/list`, 'get')
}