declare module 'express-http-proxy' {
  interface Options {
    headers: { [index: string]: string }
  }

  interface ExpressHttpProxyOptions {
    proxyReqOptDecorator: (options: Options) => Options
  }

  interface ExpressHttpProxy {
    (host: string, options: ExpressHttpProxyOptions): any
  }

  const proxy: ExpressHttpProxy

  export default proxy
}
