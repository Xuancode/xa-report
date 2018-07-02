// 返回本环境下对应的API结果
const apis = {
  dev : {
    main:"http://144.7.127.82:8088"
  },
  xhTest : {
    main:"https://report.xh-mind.com:8443"
  },
  xaTest : {
    main:"http://144.7.127.82:8088"
  }
}
export default apis[process.env.API_TYPE]
