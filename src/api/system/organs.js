import request from '@/utils/request'

// 查询党组织列表
export function listOrgans(query) {
    return request({
        url: '/system/organs/list',
        method: 'get',
        params: query
    })
}

// 查询所有党组织列表
export function listAllOrgans(query) {
    return request({
        url: '/system/organs/getOrangesAll',
        method: 'get',
        params: query
    })
}

// 查询党组织详细
export function getOrgans(organId) {
    return request({
        url: '/system/organs/' + organId,
        method: 'get'
    })
}

// 新增党组织
export function addOrgans(data) {
    return request({
        url: '/system/organs',
        method: 'post',
        data: data
    })
}

// 修改党组织
export function updateOrgans(data) {
    return request({
        url: '/system/organs',
        method: 'put',
        data: data
    })
}

// 删除党组织
export function delOrgans(organId) {
    return request({
        url: '/system/organs/' + organId,
        method: 'delete'
    })
}

// 导出党组织
export function exportOrgans(query) {
    return request({
        url: '/system/organs/export',
        method: 'get',
        params: query
    })
}