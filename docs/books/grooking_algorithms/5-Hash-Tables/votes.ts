interface IVotes {
  [name: string]: boolean
}

const votes: IVotes = {}

export const makeVote = (name: string) => {
  if (votes[name]) {
    return `Get out ${name}!`
  }

  votes[name] = true
  return votes
}
