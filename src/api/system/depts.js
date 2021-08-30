import request from '@/utils/request'

// 查询db部门列表
export function listDepts(query) {
    return request({
        url: '/system/depts/list',
        method: 'get',
        params: query
    })
}

// 查询党组织列表
export function listAllDepts(query) {
    return request({
        url: 'system/depts/getAll',
        method: 'get',
        params: query
    })
}

// 查询db部门详细
export function getDepts(deptId) {
    return request({
        url: '/system/depts/' + deptId,
        method: 'get'
    })
}

// 新增db部门
export function addDepts(data) {
    return request({
        url: '/system/depts',
        method: 'post',
        data: data
    })
}

// 修改db部门
export function updateDepts(data) {
    return request({
        url: '/system/depts',
        method: 'put',
        data: data
    })
}

// 删除db部门
export function delDepts(deptId) {
    return request({
        url: '/system/depts/' + deptId,
        method: 'delete'
    })
}

// 导出db部门
export function exportDepts(query) {
    return request({
        url: '/system/depts/export',
        method: 'get',
        params: query
    })
}