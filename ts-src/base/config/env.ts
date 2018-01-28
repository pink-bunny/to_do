export const DEV_ENV  = process.env.NODE_ENV === 'development'
export const PROD_ENV = process.env.NODE_ENV === 'production'

export const CLIENT_WEBPACK_BUILD_TARGET = process.env.WEBPACK_BUILD_TARGET === 'client'
export const SERVER_WEBPACK_BUILD_TARGET = process.env.WEBPACK_BUILD_TARGET === 'server'
