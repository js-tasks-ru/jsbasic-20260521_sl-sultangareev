function checkSpam(str) {

  if (str.toUpperCase().indexOf('XXX') == -1 && str.toUpperCase().indexOf('1XBET') == -1) {
    console.log('Спам не найден! (false)')
    return false
  }

  console.log('Спам найден! (true)')

  return true
}