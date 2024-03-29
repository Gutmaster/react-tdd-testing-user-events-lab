import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App/>)

  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument()
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  expect(screen.getByRole("checkbox", { name: /coding/i })).toBeInTheDocument()
  expect(screen.getByRole("checkbox", { name: /music/i })).toBeInTheDocument()
  expect(screen.getByRole("checkbox", { name: /gaming/i })).toBeInTheDocument()
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  expect(screen.getByRole("checkbox", { name: /coding/i })).not.toBeChecked()
  expect(screen.getByRole("checkbox", { name: /music/i })).not.toBeChecked()
  expect(screen.getByRole("checkbox", { name: /gaming/i })).not.toBeChecked()
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const email = screen.getByLabelText(/email/i);
  userEvent.type(email, "buglover@chitinmail.web");
  expect(email).toHaveValue("buglover@chitinmail.web");

  const name = screen.getByLabelText(/name/i);
  userEvent.type(name, "Daniel the Spaniel");
  expect(name).toHaveValue("Daniel the Spaniel");
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App/>)
  
  const coding = screen.getByLabelText(/coding/i)
  userEvent.click(coding)
  expect(coding).toBeChecked()

  const music = screen.getByLabelText(/music/i)
  userEvent.click(music)
  expect(music).toBeChecked()

  const gaming = screen.getByLabelText(/gaming/i)
  userEvent.click(gaming)
  expect(gaming).toBeChecked()

  userEvent.click(gaming)
  expect(gaming).not.toBeChecked()
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App/>)
  
  const submit = screen.getByRole('button', {name: /submit/i})
  expect(submit).toBeInTheDocument()
  userEvent.click(submit)
  expect(screen.getByText(/subscribed!/i)).toBeInTheDocument()
});
