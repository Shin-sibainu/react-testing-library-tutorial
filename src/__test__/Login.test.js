import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login, { validateEmail } from "../Login";

describe("Test the Login Component", () => {
  test("render the form with 2 button", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    // console.log(buttonList);
    expect(buttonList).toHaveLength(2); //ボタンが２つあるかテスト
  });

  test("should be failed on email validation", () => {
    const testEmail = "shincode.com";
    //間違っているのが正しい（これはテストなので、わざと間違えさせる）
    expect(validateEmail(testEmail)).not.toBe(true);
  });

  //電子メールの入力欄は電子メールを受け付ける
  test("email input field should accept email", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("メールアドレス入力");
    userEvent.type(email, "shincode");
    expect(email.value).not.toMatch("shincode@gmail.com");
  });

  //ここからpackage.jsonでverboseの設定
  // テストファイルごとの結果ではなく、テストファイル内の各テストケースごとの結果を表示

  //パスワード欄がパスワードタイプで入力できるかを確認
  test("password input should have type password", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("パスワード入力");
    expect(password).toHaveAttribute("type", "password");
  });

  //フォームがリセットできるか確認
  test("should be able to reset the form", () => {
    const { getByTestId } = render(<Login />);
    const resetBtn = getByTestId("reset");
    const email = screen.getByPlaceholderText("メールアドレス入力");
    const password = screen.getByPlaceholderText("パスワード入力");

    userEvent.click(resetBtn); //コードが自動でクリックしてくれるみたいな。
    expect(email.value).toMatch("");
    expect(password.value).toMatch("");
  });

  test("should be able to submit the form", () => {
    render(<Login />);
    const submitButton = screen.getByTestId("submit");
    const email = screen.getByPlaceholderText("メールアドレス入力");
    const password = screen.getByPlaceholderText("パスワード入力");

    userEvent.type(email, "shincode@gmail.com");
    userEvent.type(password, "12345");

    userEvent.click(submitButton);

    const userInfo = screen.getByText("shincode@gmail.com");
    expect(userInfo).toBeInTheDocument();
  });
  //userEventはユーザがブラウザ上で行う挙動をfireEventより正確に再現することができる（値の変化だけでなくkeyDown, keyPress, keyUpなど）ので、特に理由がなければuserEventを使った方がいい。
});
