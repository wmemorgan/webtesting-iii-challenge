import React from 'react';
import { render } from 'react-testing-library'
import Dashboard from './Dashboard'
import Display from '../display/Display'
import Controls from '../controls/Controls'

describe('Test Dashboard component', () => {
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