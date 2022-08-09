/**
 * 配置响应状态码
 */
export const ResponseStatus = {
  200: "操作成功",
  201: "对象创建成功",
  204: "操作成功，没有返回数据",
  400: "参数错误(确实,格式不匹配)",
  401: "未授权",
  403: "访问受限，登录过期",
  405: "不允许的HTTP方法",
  429: "请求过多被限制",
  500: "系统内部错误",
  501: "接口未实现",
  205: "资源已经存在"
}

export type Code = 200 | 201 | 204 | 400 | 401 | 403 | 405 | 429 | 500 | 501 | 205;