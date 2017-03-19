import {
  BATTLE_INCREMENT,
  SETUP_PLAYERS,
  SET_NEXT_PLAYER,
  SET_PLAYER_PASS,
  PLAY_CARD,
  SET_TURN_FINISHED,
  SET_MY_TURN,
  UPDATE_ENEMY_STATE,
  SET_PASS_TURN,
  REMOVE_CARD,
  UPDATE_POWER,
  ADD_CARD,
  SET_MATCH_MAKING_COMPLETE,
  UPDATE_GLOBAL_STATE,
  UPDATE_SELF_SCORE,
  UPDATE_ENEMY_SCORE,
  CLEAR_PLAYING_AREA,
  RESET_POWER,
  SET_ROUND_END,
  UPDATE_ROUND_COUNTER,
  CLEAR_ENEMY_AREA,
  clearEnemyArea,
  updateRoundCounter,
  setRoundEnd,
  resetPower,
  clearPlayingArea,
  updateEnemyScore,
  updateSelfScore,
  updateGlobalState,
  addCard,
  setPassTurn,
  updateEnemyState,
  setMyTurn,
  setTurnFinished,
  setupPlayers,
  increment,
  doubleAsync,
  removeCard,
  updatePower,
  setMatchMakingComplete,
  default as battleReducer
} from 'routes/Battle/modules/battle'

import {
  INITIAL_STATE
} from 'routes/Battle/modules/initialBattleState'

describe('(Redux Module) Battle', () => {
  it('Should export a full set of constants.', () => {
    expect(SETUP_PLAYERS).to.equal('SETUP_PLAYERS')
    expect(SET_NEXT_PLAYER).to.equal('SET_NEXT_PLAYER')
    expect(SET_PLAYER_PASS).to.equal('SET_PLAYER_PASS')
    expect(PLAY_CARD).to.equal('PLAY_CARD')
    expect(SET_TURN_FINISHED).to.equal('SET_TURN_FINISHED')
    expect(SET_MY_TURN).to.equal('SET_MY_TURN')
    expect(UPDATE_ENEMY_STATE).to.equal('UPDATE_ENEMY_STATE')
    expect(SET_PASS_TURN).to.equal('SET_PASS_TURN')
    expect(REMOVE_CARD).to.equal('REMOVE_CARD')
    expect(ADD_CARD).to.equal('ADD_CARD')
    expect(UPDATE_POWER).to.equal('UPDATE_POWER')
    expect(SET_MATCH_MAKING_COMPLETE).to.equal('SET_MATCH_MAKING_COMPLETE')
    expect(UPDATE_GLOBAL_STATE).to.equal('UPDATE_GLOBAL_STATE')
    expect(UPDATE_SELF_SCORE).to.equal('UPDATE_SELF_SCORE')
    expect(CLEAR_PLAYING_AREA).to.equal('CLEAR_PLAYING_AREA')
    expect(RESET_POWER).to.equal('RESET_POWER')
    expect(SET_ROUND_END).to.equal('SET_ROUND_END')
    expect(UPDATE_ROUND_COUNTER).to.equal('UPDATE_ROUND_COUNTER')
    expect(CLEAR_ENEMY_AREA).to.equal('CLEAR_ENEMY_AREA')

  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(battleReducer).to.be.a('function')
    })

    it('Should initialize with a blank game state.', () => {
      expect(battleReducer(undefined, {})).to.equal(INITIAL_STATE)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = battleReducer(undefined, {})
      expect(state).to.equal(INITIAL_STATE)
      state = battleReducer(state, { type: '@@@@@@@' })
      expect(state).to.equal(INITIAL_STATE)
    })
  })

  describe('(Action Creator) setupPlayers', () => {
    it('Should be exported as a function.', () => {
      expect(setupPlayers).to.be.a('function')
    })

    it('Should return an action with type "SETUP_PLAYERS".', () => {
      expect(setupPlayers()).to.have.property('type', SETUP_PLAYERS)
    })
  })

  describe('(Action Creator) setRoundEnd', () => {
    it('Should be exported as a function.', () => {
      expect(setRoundEnd).to.be.a('function')
    })

    it('Should return an action with type "SET_ROUND_END".', () => {
      expect(setRoundEnd()).to.have.property('type', SET_ROUND_END)
    })
  })

  describe('(Action Creator) clearEnemyArea', () => {
    it('Should be exported as a function.', () => {
      expect(clearEnemyArea).to.be.a('function')
    })

    it('Should return an action with type "CLEAR_ENEMY_AREA".', () => {
      expect(clearEnemyArea()).to.have.property('type', CLEAR_ENEMY_AREA)
    })
  })

  describe('(Action Creator) resetPower', () => {
    it('Should be exported as a function.', () => {
      expect(resetPower).to.be.a('function')
    })

    it('Should return an action with type "RESET_POWER".', () => {
      expect(resetPower()).to.have.property('type', RESET_POWER)
    })
  })

  describe('(Action Creator) updateRoundCounter', () => {
    it('Should be exported as a function.', () => {
      expect(updateRoundCounter).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_ROUND_COUNTER".', () => {
      expect(updateRoundCounter()).to.have.property('type', UPDATE_ROUND_COUNTER)
    })
  })

  describe('(Action Creator) clearPlayingArea', () => {
    it('Should be exported as a function.', () => {
      expect(clearPlayingArea).to.be.a('function')
    })

    it('Should return an action with type "CLEAR_PLAYING_AREA".', () => {
      expect(clearPlayingArea()).to.have.property('type', CLEAR_PLAYING_AREA)
    })
  })

  describe('(Action Creator) setMatchMakingComplete', () => {
    it('Should be exported as a function.', () => {
      expect(setMatchMakingComplete).to.be.a('function')
    })

    it('Should return an action with type "SET_MATCH_MAKING_COMPLETE".', () => {
      expect(setMatchMakingComplete()).to.have.property('type', SET_MATCH_MAKING_COMPLETE)
    })
  })

  describe('(Action Creator) updateEnemyScore', () => {
    it('Should be exported as a function.', () => {
      expect(updateEnemyScore).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_ENEMY_SCORE".', () => {
      expect(updateEnemyScore()).to.have.property('type', UPDATE_ENEMY_SCORE)
    })
  })

  describe('(Action Creator) updateSelfScore', () => {
    it('Should be exported as a function.', () => {
      expect(updateSelfScore).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_SELF_SCORE".', () => {
      expect(updateSelfScore()).to.have.property('type', UPDATE_SELF_SCORE)
    })
  })

  describe('(Action Creator) updateGlobalState', () => {
    it('Should be exported as a function.', () => {
      expect(updateGlobalState).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_GLOBAL_STATE".', () => {
      expect(updateGlobalState()).to.have.property('type', UPDATE_GLOBAL_STATE)
    })
  })

  describe('(Action Creator) addCard', () => {
    it('Should be exported as a function.', () => {
      expect(addCard).to.be.a('function')
    })

    it('Should return an action with type "ADD_CARD".', () => {
      expect(addCard()).to.have.property('type', ADD_CARD)
    })
  })

  describe('(Action Creator) setPassTurn', () => {
    it('Should be exported as a function.', () => {
      expect(setPassTurn).to.be.a('function')
    })

    it('Should return an action with type "SET_PASS_TURN".', () => {
      expect(setPassTurn()).to.have.property('type', SET_PASS_TURN)
    })
  })

  describe('(Action Creator) removeCard', () => {
    it('Should be exported as a function.', () => {
      expect(removeCard).to.be.a('function')
    })

    it('Should return an action with type "REMOVE_CARD".', () => {
      expect(removeCard()).to.have.property('type', REMOVE_CARD)
    })
  })

  describe('(Action Creator) updatePower', () => {
    it('Should be exported as a function.', () => {
      expect(updatePower).to.be.a('function')
    })

    it('Should return an action with type "UPDATE_POWER".', () => {
      expect(updatePower()).to.have.property('type', UPDATE_POWER)
    })
  })

  describe('(Action Creator) setTurnFinished', () => {
    it('Should be exported as a function.', () => {
      expect(setTurnFinished).to.be.a('function')
    })

    it('Should return an action with type "SET_TURN_FINISHED".', () => {
      expect(setTurnFinished()).to.have.property('type', SET_TURN_FINISHED)
    })
  })

  describe('(Action Creator) setMyTurn', () => {
    it('Should be exported as a function.', () => {
      expect(setMyTurn).to.be.a('function')
    })

    it('Should return an action with type "SET_TURN_FINISHED".', () => {
      expect(setMyTurn()).to.have.property('type', SET_MY_TURN)
    })
  })

  describe('(Action Creator) updateEnemyState', () => {
    it('Should be exported as a function.', () => {
      expect(updateEnemyState).to.be.a('function')
    })

    it('Should return an action with type "SET_TURN_FINISHED".', () => {
      expect(updateEnemyState()).to.have.property('type', UPDATE_ENEMY_STATE)
    })
  })

  xdescribe('(Action Creator) increment', () => {
    it('Should be exported as a function.', () => {
      expect(increment).to.be.a('function')
    })

    it('Should return an action with type "BATTLE_INCREMENT".', () => {
      expect(increment()).to.have.property('type', BATTLE_INCREMENT)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(increment(5)).to.have.property('payload', 5)
    })

    it('Should default the "payload" property to 1 if not provided.', () => {
      expect(increment()).to.have.property('payload', 1)
    })
  })

  xdescribe('(Action Creator) doubleAsync', () => {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(() => {
      _globalState = {
        battle : battleReducer(undefined, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          battle : battleReducer(_globalState.battle, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', () => {
      expect(doubleAsync).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(doubleAsync()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      return doubleAsync()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
    })

    it('Should call dispatch and getState exactly once.', () => {
      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
        })
    })

    it('Should produce a state that is double the previous state.', () => {
      _globalState = { battle: 2 }

      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
          expect(_globalState.battle).to.equal(4)
          return doubleAsync()(_dispatchSpy, _getStateSpy)
        })
        .then(() => {
          _dispatchSpy.should.have.been.calledTwice
          _getStateSpy.should.have.been.calledTwice
          expect(_globalState.battle).to.equal(8)
        })
    })
  })

  // NOTE: if you have a more complex state, you will probably want to verify
  // that you did not mutate the state. In this case our state is just a number
  // (which cannot be mutated).
  xdescribe('(Action Handler) BATTLE_INCREMENT', () => {
    it('Should increment the state by the action payload\'s "value" property.', () => {
      let state = battleReducer(undefined, {})
      expect(state).to.equal(0)
      state = battleReducer(state, increment(1))
      expect(state).to.equal(1)
      state = battleReducer(state, increment(2))
      expect(state).to.equal(3)
      state = battleReducer(state, increment(-3))
      expect(state).to.equal(0)
    })
  })
})
