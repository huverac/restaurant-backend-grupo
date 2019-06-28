export const randomWord = (limit) => {
  let text = ''
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let generated = false
  // Por lo menos un número, una letra minúscula y una mayúscula
  // Al menos 6 caracteres
  let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])./
  while (!generated) {
    for (var i = 0; i < limit; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    if (re.test(text)) {
      generated = true
    } else {
      text = ''
    }
  }

  return text
}

export const isEmpty = (element) => {
  return (element === undefined || element === null || (typeof element === 'string' && element.trim() === ''))
}

export const printString = (cadena1, cadena2) => {
  if (!isEmpty(cadena1)) {
    return cadena1.trim()
  } else if (!isEmpty(cadena2)) {
    return cadena2.trim()
  } else {
    return ''
  }
}
