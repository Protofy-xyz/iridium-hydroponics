import pino from 'pino';

var config = {
  ...(process.env.NODE_ENV === 'development' && typeof window === undefined ?
    {
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true
        }
      }
    } : {}),
  name: 'default',
  level: 'info'
}
var logger;

export const setLoggerConfig = (customConfig) => {
  logger = undefined //clear cache
  config = { ...config, ...customConfig }
  return config
}

export const getLogger = () => {
  if (!logger) {
    logger = pino(config)
  }
  return logger
}