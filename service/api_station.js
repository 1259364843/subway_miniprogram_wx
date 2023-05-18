// 站点相关api
import myRequest from './index';

/**
 * 1.获取站点详情:站点周边信息
 * @param{stationNo} 站点ID
 */
export function getStationDetail(stationNo) {
    return myRequest.get(`/op/stations/${stationNo}`)
}

/**
 * 2.获取站点列车信息:列车到站信息
 *  @param{stationNo} 站点ID
 */
export function getStationTrains(stationNo) {
    return myRequest.get("/op/trains/nearby-station", {
        stationNo
    })
}
/**
 * 3.乘换引导
 *  @param{currenStationNo} 当前站点ID
 *  @param{endStationNo} 终点站点ID
 *  @param{lineNo} 线路
 */
export function getStationTransferGuidance(currenStationNo, endStationNo, lineNo) {
    return myRequest.get(`/op/stations/transfer-guid/${currenStationNo}?lineNo=${lineNo}&endStationNo=${endStationNo}`)
}