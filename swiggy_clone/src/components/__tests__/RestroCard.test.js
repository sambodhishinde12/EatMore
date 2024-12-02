import { render,screen } from "@testing-library/react"
import RestroCard from "../Card/RestroCard"
import MOCK_DATA from "../mocks/mockRestroCard.json"
import "@testing-library/jest-dom"

test("Should load Restaurant cards with prop data",()=>{
    render(<RestroCard resData={MOCK_DATA}/>)
    const resName = screen.getByText("McDonald's");
    expect(resName).toBeInTheDocument()
})