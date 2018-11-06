export enum stepStadies {
  First = '0',
  Second = '50%',
  Third= '100%'
}

export const getWidth = (step: number) => {
  switch (step) {
    case 0: {
      return stepStadies.First
    }
    case 1: {
      return stepStadies.Second
    }
    case 2: {
      return stepStadies.Third
    }
    default:
      throw new Error("Illegal step: " + step);
  }
}
