function acmTeam(topic: string[]): number[] {
  let numberOfTeams = 0
  let maximunValue = 0

  for (let i = 0; i <= topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      const knownCount = bitwiseCompare(topic[i], topic[j])

      if (knownCount > maximunValue) {
        numberOfTeams = 0
        maximunValue = knownCount
      }

      if (knownCount === maximunValue) {
        numberOfTeams++
      }

    }
  }

  return [maximunValue, numberOfTeams]
}

const bitwiseCompare = (firstPerson: string, secondPerson: string) => {
  let commonKnownCount = 0

  for (let i = 0; i <= firstPerson.length; i++) {
    const firstNumber = Number(firstPerson[i])
    const secondNumber = Number(secondPerson[i])

    if (Boolean(firstNumber) || Boolean(secondNumber)) {
      commonKnownCount++
    }
  }

  return commonKnownCount
}