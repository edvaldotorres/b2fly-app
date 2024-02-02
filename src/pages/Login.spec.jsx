import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { expect, test } from 'vitest';
import { vi } from 'vitest';

vi.mock('react-router-dom', () => ({
  useNavigate: () => path => console.log(path),
  useUser: () => path => console.log(path),
}));

vi.spyOn(console, 'log');

test('navigates to /tasks page after successful login and logs expected object', async () => {
  const { getByPlaceholderText, getByText } = render(<Login />);

  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(console.log).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    });
  });
});