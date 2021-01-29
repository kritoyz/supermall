import {request} from './request'

export function getHomemultiData(){
    return request({
        url:'/home/multidata'
    })
}