package kata

func NoSpace(word string) string {
  newWord := ""
  
  for _, letter := range word {
    if string(letter) != " " {
      newWord += string(letter)
    }
  }
  
  return newWord
}