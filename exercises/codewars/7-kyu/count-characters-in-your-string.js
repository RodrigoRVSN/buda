function count(string) {
  const dictionary = {}

  string.split('').forEach(letter => {
    if (dictionary[letter]) {
      dictionary[letter]++
    }
    else {
      dictionary[letter] = 1
    }
  })

  return dictionary;
}