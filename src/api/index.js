/**
 * 接口请求API
 */
import reqwest from 'reqwest'

var setTimeout = 20000
var DEV_ENV = process.env.DEV_ENV || ''

// var domain = (DEV_ENV === 'production')
// 	? `${location.protocol}//admin.verasti.com`
//   : `${location.protocol}//116.62.165.234`
var domain = location.protocol+'//116.62.165.234';
// var domain = ( DEV_ENV.replace(/\s/g,"") === 'production')
// 	? `http://devwww.ineleadbank.com.cn`
//   : `http://devwww.ineleadbank.com.cn`
// var Hmethod =  (DEV_ENV.replace(/\s/g,"") === 'production') ? `POST` : `GET`
var Hmethod = 'GET'

// 获取banner地址
export function getBanner() {
  return reqwest({
    url: domain+'/foreign/banners',
    method: Hmethod,
    type: 'jsonp',
    timeout: setTimeout,
    contentType: 'application/json;charset=UTF-8',
    data: {}
  })
}

// 获取新闻列表
export function getNews(pageNo) {
    return reqwest({
      url: domain+'/foreign/news',
      method: Hmethod,
      type: 'jsonp',
      timeout: setTimeout,
      contentType: 'application/json;charset=UTF-8',
      data: {
        pageNo: pageNo,
        pageSize: 4
      }
    })
}

// 获取新闻详情
export function getNewsDstail(id) {
    return reqwest({
      url: domain+'/foreign/news/' + id,
      method: Hmethod,
      type: 'jsonp',
      timeout: setTimeout,
      contentType: 'application/json;charset=UTF-8',
      data: {}
    })
}
