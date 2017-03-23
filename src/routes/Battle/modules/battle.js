import {
  INITIAL_STATE
} from 'routes/Battle/modules/initialBattleState'

import store from 'store/createStore'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_CARD = 'ADD_CARD'
export const APPLY_METEOR_EFFECT = 'APPLY_METEOR_EFFECT'
export const APPLY_PARAGON_EFFECT = 'APPLY_PARAGON_EFFECT'
export const CLEAR_PLAYER_NOTIFICATION = 'CLEAR_PLAYER_NOTIFICATION'
export const CLEAR_PLAYING_AREA = 'CLEAR_PLAYING_AREA'
export const INCREMENT_ROUND_COUNTER = 'INCREMENT_ROUND_COUNTER'
export const INCREMENT_SELF_SCORE = 'INCREMENT_SELF_SCORE'
export const PASS_TURN = 'PASS_TURN'
export const REMOVE_CARD = 'REMOVE_CARD'
export const RESURRECT_CARDS = 'RESURRECT_CARDS'
export const SET_GAME_ENDED = 'SET_GAME_ENDED'
export const SET_MY_TURN = 'SET_MY_TURN'
export const SET_PLAYER_NOTIFICATION = 'SET_PLAYER_NOTIFICATION'
export const SET_READY_FOR_NEW_ROUND = 'SET_READY_FOR_NEW_ROUND'
export const SET_TURN_FINISHED = 'SET_TURN_FINISHED'
export const SETUP_PLAYERS = 'SETUP_PLAYERS'
export const UPDATE_ENEMY_STATE = 'UPDATE_ENEMY_STATE'
export const UPDATE_POWER = 'UPDATE_POWER'

// ------------------------------------
// Actions
// ------------------------------------

export function addCard (cardId) {
  return {
    type: ADD_CARD,
    payload: cardId
  }
}

export function applyMeteorEffect (type) {
  return {
    type: APPLY_METEOR_EFFECT,
    payload: type
  }
}

export function applyParagonEffect (data) {
  return {
    type: APPLY_PARAGON_EFFECT,
    payload: data
  }
}

export function clearPlayingArea () {
  return {
    type: CLEAR_PLAYING_AREA
  }
}

export function incrementRoundCounter() {
  return {
    type: INCREMENT_ROUND_COUNTER
  }
}

export function incrementSelfScore () {
  return {
    type: INCREMENT_SELF_SCORE
  }
}

export function passTurn (boolean) {
  return {
    type: PASS_TURN,
    payload: boolean
  }
}

export function removeCard(cardId) {
  return {
    type: REMOVE_CARD,
    payload: cardId
  }
}

export function resurrectCards () {
  return {
    type: RESURRECT_CARDS
  }
}

export function setGameEnded () {
  return {
    type: SET_GAME_ENDED
  }
}

export function setMyTurn (boolean) {
  return {
    type: SET_MY_TURN,
    payload: boolean
  }
}

export function setPlayerNotification (notification) {
  return {
    type: SET_PLAYER_NOTIFICATION,
    payload: notification
  }
}

export function setReadyForNewRound (boolean) {
  return {
    type: SET_READY_FOR_NEW_ROUND,
    payload: boolean
  }
}

export function setTurnFinished (boolean) {
  return {
    type: SET_TURN_FINISHED,
    payload: boolean
  }
}

export function setupPlayers (data) {
  return {
    type: SETUP_PLAYERS,
    payload: data
  }
}

export function updateEnemyState (object) {
  return {
    type: UPDATE_ENEMY_STATE,
    payload: object
  }
}

export function updatePower () {
  return {
    type: UPDATE_POWER
  }
}

export function clearPlayerNotification () {
  return {
    type: CLEAR_PLAYER_NOTIFICATION
  }
}

export const actions = {
  addCard,
  applyMeteorEffect,
  applyParagonEffect,
  clearPlayerNotification,
  clearPlayingArea,
  incrementRoundCounter,
  incrementSelfScore,
  passTurn,
  removeCard,
  resurrectCards,
  setGameEnded,
  setMyTurn,
  setPlayerNotification,
  setReadyForNewRound,
  setTurnFinished,
  setupPlayers,
  updatePower
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SETUP_PLAYERS] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        hand: action.payload.selfHand,
        myTurn: action.payload.selfTurn,
        name: action.payload.selfName,
        img: action.payload.selfImg
      }),
      enemy: Object.assign({}, state.enemy, {
        hand: action.payload.enemyHand,
        name: action.payload.enemyName,
        img: action.payload.enemyImg
      })
    })
  },
  [SET_TURN_FINISHED] : (state, action) => {
    return Object.assign({}, state, {
      turnFinished: action.payload
    })
  },
  [PASS_TURN] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        hasPassed: action.payload
      }),
    })
  },
  [SET_GAME_ENDED] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        gameEnded: true
      }),
    })
  },
  [SET_READY_FOR_NEW_ROUND] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        readyForNewRound: action.payload
      }),
    })
  },
  [INCREMENT_ROUND_COUNTER] : (state, action) => {
    let newRoundCount = state.self.roundCounter + 1
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        roundCounter: newRoundCount
      }),
    })
  },
  [INCREMENT_SELF_SCORE] : (state, action) => {
    let newSelfScore = state.self.score + 1
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        score: newSelfScore
      }),
    })
  },
  [SET_MY_TURN] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        myTurn: action.payload
      }),
    })
  },
  [ADD_CARD] : (state, action) => {
    var card = (state.self.hand[action.payload])
    if(card.type == 'water'){ state.self.playingArea.water.push(card) }
    else if (card.type == 'land'){ state.self.playingArea.land.push(card) }
    else { state.self.playingArea.air.push(card) }

    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        playingArea: state.self.playingArea
      }),
    })
  },
  [REMOVE_CARD] : (state, action) => {
    state.self.hand.splice(action.payload, 1)
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        hand: state.self.hand
      }),
    })
  },
  [UPDATE_ENEMY_STATE] : (state, action) => {
    return Object.assign({}, state, {
      enemy: action.payload
    })
  },
  [UPDATE_POWER] : (state, action) => {
    let enemyPower = 0
    for (let array of Object.values(state.enemy.playingArea)) {
      array.forEach((card) => {
        if (card.doubled){
            enemyPower += (card.power * 2)
        } else {
            enemyPower += card.power
        }
      })
    }

    let selfPower = 0
    for (let array of Object.values(state.self.playingArea)) {
      array.forEach((card) => {
        if (card.doubled){
            selfPower += (card.power * 2)
        } else {
            selfPower += card.power
        }
      })
    }

    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        power: selfPower
      }),
      enemy: Object.assign({}, state.enemy, {
        power: enemyPower
      })
    })
  },
  [SET_PLAYER_NOTIFICATION] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        PlayerNotification: action.payload
      }),
    })
  },[CLEAR_PLAYER_NOTIFICATION] : (state, action) => {
    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        PlayerNotification: ""
      }),
    })
  },
  [CLEAR_PLAYING_AREA] : (state, action) => {
    let enemyDiscards = []
    for (let array of Object.values(state.enemy.playingArea)) {
      array.forEach((card) => {
          card.doubled = false
          enemyDiscards.push(card)
      })
    }
    let selfDiscards = []
    for (let array of Object.values(state.self.playingArea)) {
      array.forEach((card) => {
          card.doubled = false
          selfDiscards.push(card)
      })
    }
    return Object.assign({}, state, {
      enemy: Object.assign({}, state.enemy, {
        discardPile: state.enemy.discardPile.concat(enemyDiscards),
        playingArea: { land: [], water: [], air: [] },
        meteor: { land: false, water: false, air: false },
        paragon: { land: false, water: false, air: false }
      }),
      self: Object.assign({}, state.self, {
        discardPile: state.self.discardPile.concat(selfDiscards),
        playingArea: { land: [], water: [], air: [] },
        meteor: { land: false, water: false, air: false },
        paragon: { land: false, water: false, air: false }

      })
    })
  },
  [RESURRECT_CARDS] : (state, action) => {
    let resurrects = []
    let discards = state.self.discardPile
    if (discards.length > 0) {
      let index = Math.floor(Math.random()*discards.length)
      resurrects.push(discards[index]);
      discards.splice(index, 1);
    }
    if (discards.length > 0) {
      let index = Math.floor(Math.random()*discards.length)
      resurrects.push(discards[index]);
      discards.splice(index, 1);
    }

    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        discardPile: discards,
        hand: state.self.hand.concat(resurrects)
      })
    })
  },
  [APPLY_METEOR_EFFECT] : (state, action) => {
    let type = action.payload
    let selfMeteoredRow = []
    let enemyMeteoredRow = []

    state.self.playingArea[action.payload].forEach((card) => {
      card.power = 1
      selfMeteoredRow.push(card)
    })
    state.enemy.playingArea[action.payload].forEach((card) => {
      card.power = 1
      enemyMeteoredRow.push(card)
    })

    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        playingArea: Object.assign({}, state.self.playingArea, {
            [action.payload]: selfMeteoredRow
          }),
        meteor: Object.assign({}, state.self.meteor, {
            [action.payload]: true
          })
      }),
      enemy: Object.assign({}, state.enemy, {
        playingArea: Object.assign({}, state.enemy.playingArea, {
            [action.payload]: enemyMeteoredRow
          })
      })
    })
  },
  [APPLY_PARAGON_EFFECT] : (state, action) => {

    let type = action.payload
    let selfInspiredRow = []

    state.self.playingArea[action.payload].forEach((card) => {
      card.doubled = true
      selfInspiredRow.push(card)
    })

    return Object.assign({}, state, {
      self: Object.assign({}, state.self, {
        playingArea: Object.assign({}, state.self.playingArea, {
            [action.payload]: selfInspiredRow
          }),
        paragon: Object.assign({}, state.self.paragon, {
            [action.payload]: true
          })
      })
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = INITIAL_STATE
export default function battleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
