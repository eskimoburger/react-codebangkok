import React from 'react'

import "@testing-library/jest-dom"
import { fireEvent, render,screen } from '@testing-library/react'
import ColorButton from './ColorButton'
beforeEach(()=>{
    render(<ColorButton/>);
})
test("initial button",()=>{
    const button= screen.getByRole("button",{name:/Change to blue/i})
    //screen.debug(button)
    expect(button).toHaveStyle({backgroundColor:"red"})
    expect(button).toHaveClass("ui button")
})

test("click button change from red to blue",()=>{
    const button= screen.getByRole("button")
    fireEvent.click(button);
    expect(button).toHaveStyle({backgroundColor:"blue"})
    expect(button).toHaveTextContent("Change to red")
})