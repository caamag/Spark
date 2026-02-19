import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../../layout/sidebar";
import { MemoryRouter } from "react-router-dom";

// Mock das imagens
vi.mock("../../assets/logo.png", () => ({
  default: "logo.png",
}));

vi.mock("../../public/logo-menor.png", () => ({
  default: "mini-logo.png",
}));

describe("Sidebar component", () => {
  it("deve renderizar a logo principal inicialmente", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("logo.png"));
  });

  it("deve alternar a logo ao clicar na seta", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );

    const arrow = document.querySelector(".arrow-sidebar");
    expect(arrow).toBeInTheDocument();

    fireEvent.click(arrow!);

    const logo = screen.getByAltText("logo");
    expect(logo).toHaveAttribute(
      "src",
      expect.stringContaining("mini-logo.png"),
    );
  });

  it("deve conter um link para '/'", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
