import request from '@/utils/request'

// 查询党组织通知发布列表
export function listNotices(query) {
  return request({
    url: '/system/notices/list',
    method: 'get',
    params: query
  })
}

// 查询党组织通知发布详细
export function getNotices(noticeId) {
  return request({
    url: '/system/notices/' + noticeId,
    method: 'get'
  })
}

// 新增党组织通知发布
export function addNotices(data) {
  return request({
    url: '/system/notices',
    method: 'post',
    data: data
  })
}

// 修改党组织通知发布
export function updateNotices(data) {
  return request({
    url: '/system/notices',
    method: 'put',
    data: data
  })
}

// 删除党组织通知发布
export function delNotices(noticeId) {
  return request({
    url: '/system/notices/' + noticeId,
    method: 'delete'
  })
}

// 导出党组织通知发布
export function exportNotices(query) {
  return request({
    url: '/system/notices/export',
    method: 'get',
    params: query
  })
}