import { render, screen } from "@testing-library/react";
import App from "./App";

test("title renders with react in the document", () => {
  render(<App />);
  const linkElement = screen.getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});

test("render login component in the document", () => {
  // const component = render(<App />);
  const { getByLabelText } = render(<App />);
  // console.log(component);
  // const childElem = component.getByLabelText("メールアドレス");
  const childElem = getByLabelText("メールアドレス");
  // expect(childElem).toBeInTheDocument(); //子コンポーネントがあるかどうかの判定
  expect(childElem).toBeTruthy(); //子コンポーネントがあるかどうかの判定
});
