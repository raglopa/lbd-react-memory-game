import { START_NEW_GAME, TRIGGER_SQUARE, TRIGGER_HISTORY_JUMP } from './actions'

import {
  recalculateSquares,
  generateSquares,
  calculateWin
} from './utils'

const generateNewGame = () => ({
  history: [{
    squares: generateSquares(16),
    match: false,
    won: false
  }],
  stepNumber: 0
})

const game = (state = generateNewGame(), action) => {
  switch (action.type) {

    case START_NEW_GAME:
      return generateNewGame()

    case TRIGGER_SQUARE: {
      const {history, stepNumber} = state
      const {index} = action
      const newHistory = history.slice(0, stepNumber + 1)
      const current = newHistory[newHistory.length - 1]
      if (current.squares[index].isFlipped) return
      const {match, squares} = recalculateSquares(current.squares, index)
      const won = calculateWin(squares)

      return {
        history: newHistory.concat([Object.assign({}, current, {
          squares,
          match,
          won,
        })]),
        stepNumber: newHistory.length,
      }
    }

    case TRIGGER_HISTORY_JUMP: {
      const {step} = action
      return {
        ...state,
        stepNumber: step
      }
    }
    default:
      return state
  }
}

export default {
  game
}
