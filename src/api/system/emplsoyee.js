import request from '@/utils/request'

// 查询人员信息列表
export function listEmplsoyee(query) {
  return request({
    url: '/system/emplsoyee/list',
    method: 'get',
    params: query
  })
}

// 查询人员信息详细
export function getEmplsoyee(eid) {
  return request({
    url: '/system/emplsoyee/' + eid,
    method: 'get'
  })
}

// 新增人员信息
export function addEmplsoyee(data) {
  return request({
    url: '/system/emplsoyee',
    method: 'post',
    data: data
  })
}

// 修改人员信息
export function updateEmplsoyee(data) {
  return request({
    url: '/system/emplsoyee',
    method: 'put',
    data: data
  })
}

// 删除人员信息
export function delEmplsoyee(eid) {
  return request({
    url: '/system/emplsoyee/' + eid,
    method: 'delete'
  })
}

// 导出人员信息
export function exportEmplsoyee(query) {
  return request({
    url: '/system/emplsoyee/export',
    method: 'get',
    params: query
  })
}