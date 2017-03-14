import React from 'react'
import { bindActionCreators } from 'redux'
import { Battle } from 'routes/Battle/components/Battle'
import { InfoBar } from 'routes/Battle/components/InfoBar'
import { Board } from 'routes/Battle/components/Board'
import { shallow, mount, render } from 'enzyme'

describe('(Component) Battle', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      battle : 5,
      ...bindActionCreators({
        doubleAsync : (_spies.doubleAsync = sinon.spy()),
        increment   : (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Battle {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  // it('Should render with an <h2> that includes Sample Battle text.', () => {
  //   expect(_wrapper.find('h2').text()).to.match(/Battle:/)
  // })

  // it('Should render props.battle at the end of the sample battle <h2>.', () => {
  //   expect(_wrapper.find('h2').text()).to.match(/5$/)
  //   _wrapper.setProps({ battle: 8 })
  //   expect(_wrapper.find('h2').text()).to.match(/8$/)
  // })

  it('Should render an InfoBar.', () => {
    const infobar = _wrapper.find(InfoBar);
    expect(infobar).to.exist;
  })
  it('Should render a Board.', () => {
    const board = _wrapper.find(Board);
    expect(board).to.exist;
  })

  xdescribe('An increment button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Increment')
    })

    it('has bootstrap classes', () => {
      expect(_button.hasClass('btn btn-default')).to.be.true
    })

    it('Should dispatch a `increment` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.increment.should.have.been.called
    })
  })

  xdescribe('A Double (Async) button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Double (Async)')
    })

    it('has bootstrap classes', () => {
      expect(_button.hasClass('btn btn-default')).to.be.true
    })

    it('Should dispatch a `doubleAsync` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.doubleAsync.should.have.been.called
    })
  })
})