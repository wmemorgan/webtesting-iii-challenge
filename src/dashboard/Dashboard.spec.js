import React from 'react';
import { render } from 'react-testing-library'
import renderer from 'react-test-renderer'

import Dashboard from './Dashboard'
import Display from '../display/Display'
import Controls from '../controls/Controls'

describe('<Dashboard />', () => {
  it('matches snapshort', () => {
    const tree = renderer.create(<Dashboard/>)
    expect(tree.toJSON()).toMatchSnapshot()
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