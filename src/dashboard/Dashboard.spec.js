import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library'
import renderer from 'react-test-renderer'

import Dashboard from './Dashboard'
import Display from '../display/Display'
import Controls from '../controls/Controls'

afterEach(cleanup)

describe('<Dashboard />', () => {
  it('matches snapshort', () => {
    const tree = renderer.create(<Dashboard/>)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('application defaults', () => {
  it('defaults to unlocked and open', () => {
    render(<Dashboard />).getByText(/unlocked/i)
    render(<Dashboard />).getByText(/open/i)
  })

  it('cannot be closed or opened if it is locked', () => {
    const toggleCloseTest = jest.fn()
    let mockState = {
      locked: true,
      closed: true,
      toggleClosed: toggleCloseTest
    }
  
    const controlsInstance = render(<Controls {...mockState} />)
    fireEvent.click(controlsInstance.getByText(/open gate/i))
    expect(toggleCloseTest).not.toHaveBeenCalled()
  })
})

describe('Child components render', () => {
  it('renders without crashing', () => {
    render(<Dashboard/>)
  })

  it('Display component renders', () => {
    render(<Display />)
  })

  it('Controls component renders', () => {
    render(<Controls/>)
  })

})