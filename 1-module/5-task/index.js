function truncate(str, maxlength) {

  console.log('Длина строки:', str.length, typeof str.length, 'Ограничение:', maxlength, typeof maxlength);

  if (str.length > maxlength) {

    return str.slice(0, maxlength - 1) + '…'
  }

  return str
}