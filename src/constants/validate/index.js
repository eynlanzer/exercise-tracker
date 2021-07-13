export const required = value =>
  value ? undefined : 'Campo Obrigatório'

export const selected = value =>
  value ? undefined : 'Opção Inexistente'

export const minLength = min => value =>
  value && value.length < min ? `Campo Incompleto` : undefined

export const minLength6 = minLength(6)

export const minLength13 = minLength(13)

export const minLength14 = minLength(14)

export const minLength18 = minLength(18)

export const minLength25 = minLength(25)

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ?
    'Email Inválido' : true

export const phone = value => {
  const phoneOnlyNumber = onlyNumber(value)

  if (!value) {
    return value
  }
  if (value.length <= 2) {
    return `(${phoneOnlyNumber.slice(0, 2)}`
  }
  if (value.length <= 3) {
    return `(${phoneOnlyNumber.slice(0, 2)}`
  }
  if (value.length <= 8) {
    return `(${phoneOnlyNumber.slice(0, 2)})${phoneOnlyNumber.slice(2, 6)}`
  }
  if (value.length <= 13) {
    return `(${phoneOnlyNumber.slice(0, 2)})${phoneOnlyNumber.slice(2, 6)}-${phoneOnlyNumber.slice(6, 11)}`
  }
  if (value.length <= 14) {
    return `(${phoneOnlyNumber.slice(0, 2)})${phoneOnlyNumber.slice(2, 7)}-${phoneOnlyNumber.slice(7, 11)}`
  }
  else {
    return `(${phoneOnlyNumber.slice(0, 2)})${phoneOnlyNumber.slice(2, 7)}-${phoneOnlyNumber.slice(7, 11)}`
  }
}

export const validateOab = value =>
  value.length !== 9 ? `Formato incorreto. Ex: 123123/RJ` : true

export const onlyNumber = value => {
  return value.replace(/[^\d]/g, '')
}

export const formatDocument = (value) => {
  if (onlyNumber(value).length <= 11) {
    value = cpf(value)
  }
  else if (onlyNumber(value).length >= 12) {
    value = cnpj(value.slice(0, 14))
  }
  return value
}

export const cpf = value => {
  const cpfOnlyNumber = onlyNumber(value)

  if (!value) {
    return value
  }
  if (value.length <= 3) {
    return `${cpfOnlyNumber}`
  }
  if (value.length <= 6) {
    return `${cpfOnlyNumber.slice(0, 3)}.${cpfOnlyNumber.slice(3, 6)}`
  }
  if (value.length <= 9) {
    return `${cpfOnlyNumber.slice(0, 3)}.${cpfOnlyNumber.slice(3, 6)}.${cpfOnlyNumber.slice(6, 9)}`
  }
  if (value.length <= 14) {
    return `${cpfOnlyNumber.slice(0, 3)}.${cpfOnlyNumber.slice(3, 6)}.${cpfOnlyNumber.slice(6, 9)}-${cpfOnlyNumber.slice(9, 11)}`
  }
}

export const cnpj = value => {
  const cnpjOnlyNumber = onlyNumber(value)

  if (!value) {
    return value
  }
  if (value.length <= 2) {
    return `${cnpjOnlyNumber.slice(0, 2)}`
  }
  if (value.length <= 5) {
    return `${cnpjOnlyNumber.slice(0, 2)}.${cnpjOnlyNumber.slice(2, 5)}`
  }
  if (value.length <= 8) {
    return `${cnpjOnlyNumber.slice(0, 2)}.${cnpjOnlyNumber.slice(2, 5)}.${cnpjOnlyNumber.slice(5, 8)}`
  }
  if (value.length <= 12) {
    return `${cnpjOnlyNumber.slice(0, 2)}.${cnpjOnlyNumber.slice(2, 5)}.${cnpjOnlyNumber.slice(5, 8)}/${cnpjOnlyNumber.slice(8, 12)}`
  }
  if (value.length <= 14) {
    return `${cnpjOnlyNumber.slice(0, 2)}.${cnpjOnlyNumber.slice(2, 5)}.${cnpjOnlyNumber.slice(5, 8)}/${cnpjOnlyNumber.slice(8, 12)}-${cnpjOnlyNumber.slice(12, 14)}`
  }
}

export const unformatDocument = (value) => {
  return value = value.replace(/(\.|\/|)/g, "");
}

export const expiredAt = (value) => {
  const expiredAtOnlyNumber = onlyNumber(value)

  if (!value) {
    return value
  }
  if (value.length <= 2) {
    return `${expiredAtOnlyNumber}`
  }
  else {
    return `${expiredAtOnlyNumber.slice(0, 2)}/${expiredAtOnlyNumber.slice(2, 4)}`
  }
}

export const creditCard = (value) => {
  const creditCardOnlyNumber = onlyNumber(value)
  if (!value) {
    return value
  }
  if (value.length <= 4) {
    return `${creditCardOnlyNumber}`
  }
  if (value.length <= 8) {
    return `${creditCardOnlyNumber.slice(0, 4)}.${creditCardOnlyNumber.slice(4, 8)}`
  }
  if (value.length <= 12) {
    return `${creditCardOnlyNumber.slice(0, 4)}.${creditCardOnlyNumber.slice(4, 8)}.${creditCardOnlyNumber.slice(8, 12)}`
  }
  else {
    return `${creditCardOnlyNumber.slice(0, 4)}.${creditCardOnlyNumber.slice(4, 8)}.${creditCardOnlyNumber.slice(8, 12)}.${creditCardOnlyNumber.slice(12, 16)}`
  }
}

export const cvc = (value) => {
  if (value.length <= 3) {
    return value
  }
  else {
    return value.slice(0, value.length - 1)
  }
}

export const formatDate = (date, includeTime = true) => {
  if (!date) {
    return null
  }
  date = new Date(date)

  let day = date.getDate()
  let month = date.getMonth() + 1;
  let year = date.getFullYear()
  let hours = date.getHours()
  let minutes = date.getMinutes()

  if (day.toString().length === 1)
    day = '0' + day

  if (month.toString().length === 1)
    month = '0' + month

  if (hours.toString().length === 1)
    hours = '0' + hours

  if (minutes.toString().length === 1)
    minutes = '0' + minutes

  return `${day}/${month}/${year}` + (includeTime ? ` ${hours}:${minutes}` : '')
}

export const base64 = (bytes) => {
  const byteCharacters = atob(bytes);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers)
  const file = new Blob([byteArray], { type: 'application/pdf' })
  return file
}
