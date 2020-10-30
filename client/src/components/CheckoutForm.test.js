import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, { target:{ value: 'Scott', name: 'firstName' }});
    fireEvent.change(lastNameInput, { target:{ value: 'Allen', name: 'lastName' }});
    fireEvent.change(addressInput, { target:{ value: '123 E', name: 'address' }});
    fireEvent.change(cityInput, { target:{ value: 'Provo', name: 'city' }});
    fireEvent.change(stateInput, { target:{ value: 'Utah', name: 'state' }});
    fireEvent.change(zipInput, { target:{ value: '12345', name: 'zip' }});

    expect(firstNameInput).toHaveValue('Scott');

    const button = screen.getByRole('button', {name:/checkout/i});
    fireEvent.click(button);

    const firstNameText = screen.findByText(/scott/i)
    const lastNameText = screen.findByText(/allen/i)
    const addressText = screen.findByText(/123 e/i)
    const cityText = screen.findByText(/provo/i)
    const stateText = screen.findByText(/utah/i)
    const zipText = screen.findByText(/12345/i)

    expect(firstNameText).toBeTruthy();
    expect(lastNameText).toBeTruthy();
    expect(addressText).toBeTruthy();
    expect(cityText).toBeTruthy();
    expect(stateText).toBeTruthy();
    expect(zipText).toBeTruthy();
});
