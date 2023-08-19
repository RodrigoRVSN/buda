function lightBulbs(lights, n) {
  for (let i = 0; i < n; i++) {
    const helperLights = [...lights]

    lights.forEach((light, index) => {
      if (light === 1) {
        const isLastItem = index === lights.length - 1
        const newIndex = isLastItem ? 0 : index + 1
        const isTurnedOn = lights[newIndex] === 1

        helperLights[newIndex] = isTurnedOn ? 0 : 1
      }
    })

    lights = [...helperLights]
  }

  return lights
}