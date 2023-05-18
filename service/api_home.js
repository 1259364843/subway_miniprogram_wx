// 首页相关api
import myRequest from './index';

/**
 * 1.获取首页信息
 */
export function getHomeDetail() {
    return myRequest.get(`/op/index`)
}