import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)
export const timeConver = (time) => {
  const str = dayjs(time).fromNow(true)
  return (
    str
      .replace('years', '年')
      .replace('year', '年')
      .replace('months', '个月')
      .replace('month', '个月')
      .replace('days', '天')
      .replace('day', '天')
      .replace('hours', '小时')
      .replace('hour', '小时')
      .replace('minutes', '分钟')
      .replace('minute', '分钟')
      .replace('seconds', '秒')
      .replace('second', '秒')
      .replace('fews', '')
      .replace('few', '')
      .replace('an', '1')
      .replace('a', '1') + '之前'
  )
}

export const dateString = (time) => {
  const _time = dayjs(time).format('YYYY-MM-DD')
  const d = _time.replace('-', '年').replace('-', '月').split('').concat('日').join('')
  return d
}
