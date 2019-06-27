import React from 'react'
import { render, cleanup, getByText } from 'react-testing-library'
import 'jest-dom/extend-expect';

import Display from '../display/Display'

afterEach(cleanup)

describe('<Display/>', () => {

  describe('display gate status', () => {
    it('display if gate is open', () => {
      const status = {
        closed: false
      }
      const displayInstance = render(<Display {...status} />)
      expect(displayInstance.queryByText(/open/i)).toBeTruthy()
    })

    it('display if gate is closed', () => {
      const status = {
        closed: true
      }
      const displayInstance = render(<Display {...status} />)
      expect(displayInstance.queryByText(/closed/i)).toBeTruthy()
    })

    it('display if gate is locked', () => {
      const status = {
        locked: true
      }
      const displayInstance = render(<Display {...status} />)
      expect(displayInstance.queryByText(/locked/i)).toBeTruthy()
    })
    it('display if gate is unlocked', () => {
      const status = {
        locked: false
      }
      const displayInstance = render(<Display {...status} />)
      expect(displayInstance.queryByText(/unlocked/i)).toBeTruthy()
    })

    describe('confirm class name status', () => {

      it('when `locked` use the `red-led` class', async () => {
        const status = {
          locked: true
        }
        const { container } = render(<Display {...status} />)
        expect(getByText(container, /locked/i)).toHaveClass('red-led')
      })

      it('when `closed` use the `red-led` class', async () => {
        const status = {
          closed: true
        }
        const { container } = render(<Display {...status} />)
        expect(getByText(container, /closed/i)).toHaveClass('red-led')
      })

      it('when `unlocked` use the `green-led` class', async () => {
        const status = {
          locked: false
        }
        const { container } = render(<Display {...status} />)
        expect(getByText(container, /unlocked/i)).toHaveClass('green-led')
      })

      it('when `open` use the `green-led` class', async () => {
        const status = {
          closed: false
        }
        const { container } = render(<Display {...status} />)
        expect(getByText(container, /open/i)).toHaveClass('green-led')
      })
    })
  })


})