function ucFirst(str) {

  if (str === null) { return false }

  console.log('Длина строки:', str.length);

  if (str.length === 0) {
    console.log('Нет данных');
    return ''
  }

  return str[0].toUpperCase() + str.slice(1)
}