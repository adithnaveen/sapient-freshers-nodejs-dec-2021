import winston from 'winston';

export const logConfiguration = {
  'transports': [
      new winston.transports.Console(),
      new winston.transports.File({
          level:'info',
          filename:"logs/sample.log"
      })
  ]
};