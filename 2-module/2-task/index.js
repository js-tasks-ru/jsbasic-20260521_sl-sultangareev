function isEmpty(obj) {
  let keys = Object.keys(obj);

  console.log(keys);

  console.log("Длина:", keys.length);

  if (keys.length) {
    return false
  } else {
    return true
  }

}