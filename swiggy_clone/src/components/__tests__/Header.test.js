import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header/Header"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../utils/store"
import "@testing-library/jest-dom"

it("Should render Header component with  login button",()=>{
    render(
    <BrowserRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button",{name:"Login"
    })

    expect(loginBtn).toBeInTheDocument();
});

it("Should change to Logout on Click login",()=>{
    render(
    <BrowserRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button",{name:"Login" })
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button",{name:"Logout" })
    expect(logoutBtn).toBeInTheDocument();
});

it("Should render Header component with  cart items ",()=>{
    render(
    <BrowserRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );
    const cartItems = screen.getByAltText("Cart") 


    expect(cartItems).toBeInTheDocument();
});