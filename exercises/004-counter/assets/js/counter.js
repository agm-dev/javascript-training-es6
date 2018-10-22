(function (w) {

  let options = {}
  let interval = null

  const getOriginToTarget = (origin, target, unit) => {
    const timeOrigin = origin.getTime()
    const timeTarget = target.getTime()
    let timeToTarget = (timeTarget - timeOrigin) / unit
    timeToTarget = timeToTarget > 0 ? timeToTarget : 0
    return Math.floor(timeToTarget)
  }

  const getDaysToTarget = (origin, target) => {
    const timePerDay = 24 * 60 * 60 * 1000
    return getOriginToTarget(origin, target, timePerDay)
  }

  const getHoursToTarget = (origin, target) => {
    const timePerHour = 60 * 60 * 1000
    const daysToTarget = getDaysToTarget(origin, target)
    const totalHoursToTarget = getOriginToTarget(origin, target, timePerHour)

    const hoursToSubstract = daysToTarget * 24
    return totalHoursToTarget - hoursToSubstract
  }

  const getMinutesToTarget = (origin, target) => {
    const timePerMinute = 60 * 1000
    const daysToTarget = getDaysToTarget(origin, target)
    const hoursToTarget = getHoursToTarget(origin, target)
    const totalMinutesToTarget = getOriginToTarget(origin, target, timePerMinute)

    const minutesToSubstract = daysToTarget * 24 * 60 + hoursToTarget * 60
    return totalMinutesToTarget - minutesToSubstract
  }

  const getSecondsToTarget = (origin, target) => {
    const timePerSecond = 1000
    const daysToTarget = getDaysToTarget(origin, target)
    const hoursToTarget = getHoursToTarget(origin, target)
    const minutesToTarget = getMinutesToTarget(origin, target)
    const totalSecondsToTarget = getOriginToTarget(origin, target, timePerSecond)

    const secondsToSubstract = daysToTarget * 24 * 60 * 60 + hoursToTarget * 60 * 60 + minutesToTarget * 60
    return totalSecondsToTarget - secondsToSubstract
  }

  const setValue = (value, className) => {
    const element = document.querySelector(`.${className}`)
    let valueString = String(value)
    if (valueString.length === 1) {
      valueString = `0${valueString}`
    }
    if (element) {
      element.innerText = valueString
    }
  }

  const calculate = () => {
    const curdate = new Date()
    const target = new Date(options.target)

    return {
      days: getDaysToTarget(curdate, target),
      hours: getHoursToTarget(curdate, target),
      minutes: getMinutesToTarget(curdate, target),
      seconds: getSecondsToTarget(curdate, target),
    }
  }

  const print = () => Object.entries(calculate()).reduce((result, [key, value]) => [...result, String(value).length === 1 ? `0${value}` : `${value}`], []).join(':')

  const update = () => {
    const { days, hours, minutes, seconds } = calculate()

    if (options.days) setValue(days, options.days)
    if (options.hours) setValue(hours, options.hours)
    if (options.minutes) setValue(minutes, options.minutes)
    if (options.seconds) setValue(seconds, options.seconds)
    if (options.targetText) setValue(options.target, options.targetText)

    const updateEvent = new Event('counter-update')
    w.dispatchEvent(updateEvent)
  }

  const destroy = () => {
    clearInterval(interval)
  }

  const init = data => {
    options = data
    interval = setInterval(update, 1000)
    update()
  }

  w.counter = {
    init,
    calculate,
    print,
    destroy,
  }

})(window)