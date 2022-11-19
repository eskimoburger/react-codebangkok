import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import App from "./App";
import server from "./mock/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
beforeEach(() => render(<App />));

test("search zebra return 1 card", async () => {
  await userEvents.keyboard("zebra{enter}");
  const animalsCard = await screen.findAllByRole("animal");
  console.log(animalsCard.length)
  expect(animalsCard).toHaveLength(1);
});
