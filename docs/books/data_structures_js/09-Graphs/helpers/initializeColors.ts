export const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
}

export type IColor = {[key: string]: number}

export const initializeColors = (vertices: string[]) => {
  const color: IColor = {}

  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE
  }

  return color
}
