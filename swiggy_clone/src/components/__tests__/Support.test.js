import { render,screen } from "@testing-library/react"
import Support from "../Support"
import "@testing-library/jest-dom"

describe("All test cases of Supprt Page",()=>{
    test("Should load the Support/Contact component and find Contact Us text", () => {
        render(<Support />); // Render the component
    
        // Check that the "Contact Us" heading is present
        const contactHeading = screen.getByRole("heading", { name: "Contact Us" });
        expect(contactHeading).toBeInTheDocument();
    
    });
    test("Should load the Support/Contact componen and find phone number", () => {
        render(<Support />); // Render the component
    
        // Optionally, check for other specific headings
        const phoneHeading = screen.getByText("+91 7689473970");
        expect(phoneHeading).toBeInTheDocument();
    
    });
    
    test("Should load the Support/Contact component find button", () => {
        render(<Support />); // Render the component
    
        // Check that the send button present
        const button = screen.getByText("Send Us");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes",()=> {
        render(<Support/>);
        //quering
        const inputBoxes = screen.getAllByRole("textbox");
        // expect(inputBoxes).toBeInTheDocument();
        console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(3);
    })
})
