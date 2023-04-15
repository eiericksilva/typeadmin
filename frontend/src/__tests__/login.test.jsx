import { it, expect, vi } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../pages/Login";

const navigate = vi.fn();

vi.mock("react-router-dom", () => {
  return {
    useNavigate: () => navigate,
  };
});

globalThis.fetch = vi.fn(() => ({
  json: () => ({ token: "", status: 200 }),
}));

it("should be able to login", async () => {
  const loginPage = render(<Login />);
  const emailInput = await loginPage.findByLabelText("Email");
  const passwordInput = await loginPage.findByLabelText("Senha");
  const button = await loginPage.findByText("Entrar");

  fireEvent.change(emailInput, {
    target: { value: "email@email.com" },
  });
  fireEvent.change(passwordInput, {
    target: { value: "123" },
  });
  fireEvent.click(button);

  expect(globalThis.fetch).toBeCalledWith(
    "http://localhost:3000/auth",
    expect.objectContaining({
      method: "POST",
      body: JSON.stringify({
        email: "email@email.com",
        senha: "123",
      }),
    })
  );
  waitFor(() => {
    expect(navigate).toBeCalledWith("/app");
  });
});
