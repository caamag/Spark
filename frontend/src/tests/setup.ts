import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import React from "react";

// Injeta o React no global para evitar o erro do Styled Components
window.React = React;

// Garante que o DOM seja limpo após cada teste
afterEach(() => {
  cleanup();
});
