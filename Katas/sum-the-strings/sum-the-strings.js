function sumStr(a,b) {
  if (a === "" && b === "") { return "0" }
  result = Number(a) + Number(b)
  return result.toString()
}

sumStr("4","5")