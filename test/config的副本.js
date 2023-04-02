const embedValue = false // 代码嵌入其他小程序使用true 可以从全局变量统一读取服务器地址 独立发布使用false
const config = {
  embed: embedValue, 
  host: embedValue?getApp().globalData.pochanConfig.pochanServerUrl:'https://pcglrpt.jiulaw.cn/', // 服务器地址 嵌入时使用app的全局变量 因为是分包。否则取不到app
  serviceName: embedValue?getApp().globalData.pochanConfig.pochanServiceName:'xcxback/', // 服务名 默认为空 如果是通过网关调用或者nginx需要映射 可添加服务名称
  hostType:'xcx', // 接口前缀如：open,api,xcx等默认为xcx
  nginxMinio: false, //使用nginx代理minio 体验版外网演示时候设置为true，在前端把局域网minio地址替换为域名地址 正式环境false 因为后端接口已经替换过地址
  jiupinHost:embedValue?getApp().globalData.pochanConfig.jiupinServerUrl:'https://ept.jiulaw.cn/', // 九品登录服务器地址
  xxwUrl: 'https://pcglrpt.jiulaw.cn/' // 配置当前环境下的信息网ip地址和端口号，域名需在开发者公众平台配置
}
export function getConfig() {
  return config
}