import myRequest from './index';

/**
 * 1.获取乘车码
 */
export function getQRcode() {
    // https://cdmetro.cnzhiyuanhui.com/
    return myRequest.post(`/platform/mlc/opencard`, {
        cardType: "00"
    })
}