import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body/Body"
import MOCK_DATA from "../mocks/mockRestroCard.json"
import "@testing-library/jest-dom"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("Should render body component with Search",async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
             <Body/>
            </BrowserRouter>
            
        )
    })
    const searchField = screen.getByTestId("searchItem")
    fireEvent.change(searchField,{target:{value:"pizza"}})
    const searchCard = screen.getAllByTestId("resCard");           
    // expect(searchCard.length).toBe(2)   
    console.log(searchCard);
    
})