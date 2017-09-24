export const TRIGGER_SQUARE = 'TRIGGER_SQUARE'
export const SELECT_GAME_MODE = 'SELECT_GAME_MODE'

export const triggerSquare = (index) => ({type: TRIGGER_SQUARE, index})
export const selectGameMode = (gameMode) => ({type: SELECT_GAME_MODE, gameMode})