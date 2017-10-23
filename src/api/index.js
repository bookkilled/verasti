/**
 * 接口请求API
 */
import reqwest from 'reqwest'

const setTimeout = 20000
const DEV_ENV = process.env.DEV_ENV || ''

// const domain = (DEV_ENV === 'production')
// 	? `${location.protocol}//admin.verasti.com`
//   : `${location.protocol}//116.62.165.234`
const domain = `${location.protocol}//116.62.165.234`;
// const domain = ( DEV_ENV.replace(/\s/g,"") === 'production')
// 	? `http://devwww.ineleadbank.com.cn`
//   : `http://devwww.ineleadbank.com.cn`
// const Hmethod =  (DEV_ENV.replace(/\s/g,"") === 'production') ? `POST` : `GET`
const Hmethod = 'GET'

// 获取banner地址
export function getBanner() {
  return reqwest({
    url: `${domain}/foreign/banners`,
    method: Hmethod,
    type: 'jsonp',
    timeout: setTimeout,
    contentType: 'application/json;charset=UTF-8',
    data: {}
  })
}

// 获取新闻列表
export function getNews() {
    return reqwest({
      url: `${domain}/foreign/news`,
      method: Hmethod,
      type: 'jsonp',
      timeout: setTimeout,
      contentType: 'application/json;charset=UTF-8',
      data: {}
    })
}

