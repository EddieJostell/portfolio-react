import React, { useRef, useReducer } from "react";
import "./ContactForm.scss";
import "../../Navigation/Navigation.scss";
import emailjs from "@emailjs/browser";
import { serviceID } from "./helpers/serviceID";
import { templateID } from "./helpers/templateID";
import { userID } from "./helpers/userID";
import { useForm } from "react-hook-form";
import { ThankYouPage } from "./parts/ThankYouPage";

import classNames from "classnames";
import {
  inputEmailRules,
  inputNameRules,
  textAreaMessageRules,
} from "./helpers/HookFormValidationRules";
import { ContactFormSubmitButton } from "./parts/ContactFormSubmitButton";

interface IContactFormProps {
  toggleContact: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialContactState = {
  showFail: false,
  showThanks: false,
  isLoading: false,
};

function formReducer(state: any, action: any) {
  switch (action.type) {
    case "SUBMIT":
      return { ...state, isLoading: true, showFail: false };
    case "SUCCESS":
      return { ...state, isLoading: false, showThanks: true };
    case "ERROR":
      return { ...state, showFail: true };
    default:
      throw new Error();
  }
}

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const [state, dispatch] = useReducer(formReducer, initialContactState);
  const { showFail, showThanks, isLoading } = state;

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const form = useRef<HTMLFormElement>(null); //EmailJS useRef

  const onDataComplete = (data: any, e: any) => {
    // REAL EMAIL JS CODE
    if (data) {
      dispatch({ type: "SUBMIT" });
      /*   emailjs.sendForm(serviceID(), templateID(), form.current!, userID()).then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          dispatch({ type: "SUCCESS" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          dispatch({ type: "ERROR" });
        }
      ); */

      setTimeout(() => {
        if (1 + 1 === 3) {
          dispatch({ type: "SUCCESS" });
        } else {
          dispatch({ type: "ERROR" });
        }
      }, 2000);
    }
  };

  const closeContactForm = () => {
    setTimeout(() => {
      toggleContact();
    }, 300);
  };

  const contactHamburger = () => {
    return (
      <div onClick={closeContactForm} className={"icon nav-icon-5 open"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  const showLabel = (
    htmlFor: string,
    labelText: string,
    errorMessage?: string
  ) => {
    return (
      <label htmlFor={htmlFor} className="form-label">
        {labelText}
        {errorMessage && <span className="error-label">{errorMessage}</span>}
      </label>
    );
  };

  const fieldRules = classNames("fields", {
    disabled: showFail,
  });

  return (
    <>
      {!showThanks ? (
        <div className="Form">
          <div className="Form-contact">
            <div className="title">Contact</div>
            {contactHamburger()}
            <form
              ref={form}
              className="content"
              onSubmit={handleSubmit(onDataComplete)}
            >
              <h1>Get in touch!</h1>
              {showLabel("name", "Name:", errors.name?.message)}
              <input
                disabled={showFail}
                type="text"
                className={fieldRules}
                {...register("name", {
                  ...inputNameRules,
                })}
              />
              {showLabel("email", "E-mail:", errors.email?.message)}
              <input
                disabled={showFail}
                type="text"
                className={fieldRules}
                {...register("email", { ...inputEmailRules })}
              />
              {showLabel("message", "Message:", errors.message?.message)}
              <textarea
                {...register("message", {
                  ...textAreaMessageRules,
                })}
                disabled={showFail}
                className={fieldRules}
                rows={5}
              />
              <ContactFormSubmitButton
                showFail={showFail}
                isLoading={isLoading}
              >
                Something has gone wrong :/, please try to send the message
                again.
              </ContactFormSubmitButton>
            </form>
          </div>
        </div>
      ) : (
        <ThankYouPage toggleContact={toggleContact} />
      )}
    </>
  );
};
