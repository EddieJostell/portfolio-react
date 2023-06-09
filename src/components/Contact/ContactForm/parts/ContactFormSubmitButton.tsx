import classNames from "classnames";
import { Fragment, ReactNode } from "react";

interface IContactFormSubmitButtonProps {
  showFail: boolean | undefined;
  isLoading: boolean | undefined;
  children: ReactNode;
}

export const ContactFormSubmitButton = (
  props: IContactFormSubmitButtonProps
) => {
  const { showFail, isLoading, children } = props;

  const buttonRules = classNames("btn", {
    "btn-disabled": isLoading,
  });

  const btn = !showFail ? (
    <button
      disabled={isLoading}
      className={buttonRules}
      type="submit"
      value="Submit"
    >
      {isLoading ? "Sending..." : "Send Message"}
    </button>
  ) : (
    <div className="error-msg">
      <div>{children}</div>
      <button className={"btn btn-error"} type="submit">
        {"Try again"}
      </button>
    </div>
  );

  return <Fragment>{btn}</Fragment>;
};
