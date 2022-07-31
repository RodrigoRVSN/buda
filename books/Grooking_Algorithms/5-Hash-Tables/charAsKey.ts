interface IMap {
  [char: string]: string[] | {}
}

const map: IMap = {}

export const charAsKey = (text: string) => {
  const firstChar = text.charAt(0).toLowerCase()

  if (map[firstChar]) {
    map[firstChar] = [...(map[firstChar] as string), text]
    return map
  }

  map[firstChar] = [text]
  return map
}
