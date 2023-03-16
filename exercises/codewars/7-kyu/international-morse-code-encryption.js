function encryption(message) {
  const splittedMessage = message.split('')

  return splittedMessage.reduce((accumulator, value, index) => {
    if (!CHAR_TO_MORSE[value]) return accumulator + '  '

    const whiteSpace = splittedMessage.length - 1 === index ? '' : ' '

    return accumulator + CHAR_TO_MORSE[value] + whiteSpace
  }, '')
}