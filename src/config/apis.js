// 返回本环境下对应的API结果
const apis = {
  dev : {
    main:"https://report.xh-mind.com:8443"
  },
  xhTest : {
    main:"https://report.xh-mind.com:8443"
  },
  xaTest : {
    main:"http://172.16.71.246:8088"
  }
}

export default apis[process.env.API_TYPE]
