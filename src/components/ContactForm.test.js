import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import ContactForm from './ContactForm';

test("renders name input field title", ()=> {
//Arrange
render(<ContactForm />);
//Act
const nameInput = screen.queryByText(/first name/i);
//Assert
expect(nameInput).toBeInTheDocument();
});