import React from "react";

interface ThankYouPageProps {
  toggleContact: () => void;
}

export const ThankYouPage = (props: ThankYouPageProps) => {
  const { toggleContact } = props;
  return (
    <div className="Form">
      <div className="Form-thanks">
        <div className="title">Thanks</div>
        <div className="description">
          <h1>Message has been sent!</h1>
          Thank you for reaching out! I will get back at you as soon as
          possible!
        </div>
        <button className="btn" onClick={toggleContact}>
          Back to start
        </button>
      </div>
    </div>
  );
};
