import React, { useState } from "react";

function MsgAuto() {
  const [selectedDetails, setSelectedDetails] = useState([]);
  const chatLog =
    "self-start px-[1rem] py-[.5rem] w-[15rem] bg-green-100 m-[.25rem] rounded-[10px]";

  const handleClick = (value) => {
    setSelectedDetails((prevDetails) => [...prevDetails, value]);
  };

  const renderDetail = (value, index) => {
    if (value === 1) {
      return (
        <div key={index} className={chatLog}>
          <p>
            Membership registration is a crucial step to join the O2O Project as
            a member, enabling you to access exclusive services and information
            not publicly disclosed. Signing up requires filling out your
            personal information.
          </p>

          <p>
            <strong>Membership Registration Steps</strong>
          </p>
          <p>
            1. Click the{" "}
            <a class="text-GreenFooter hover:font-[500]" href="/register">
              Register
            </a>{" "}
            button to go to the registration form page.
          </p>
          <p>2. Fill out your personal information in the registration form.</p>
          <p>3. Verify the information you entered to ensure accuracy.</p>
          <p>4. Click the "Submit" button to submit the registration form.</p>
          <p>
            5. Confirm your email. You may receive a membership confirmation
            email from the system. Click the link in the email to verify your
            identity.
          </p>
          <br />
          <p>
            After completing the registration, you can log in using the email
            and password you registered with to start using various services on
            the website immediately.
          </p>
        </div>
      );
    } else if (value === 2) {
      return (
        <div key={index} className={chatLog}>
          <p>Details about lending...</p>
        </div>
      );
    } else if (value === 3) {
      return (
        <div key={index} className={chatLog}>
          <p>Details regarding loan requests...</p>
        </div>
      );
    } else if (value === 4) {
      return (
        <div key={index} className={chatLog}>
          <p>
  We have undertaken this project by crowdsourcing funds to assist and unlock capital for disadvantaged individuals. Our focus is on improving the quality and reducing the cost of financial services to address barriers to global financial access. Through the development of the O2O platform, students can more easily pay tuition fees, women can start businesses, and farmers can invest in equipment. Additionally, it helps strengthen families' ability to afford necessary healthcare expenses conveniently.
</p>
<p>
  Click the{" "}
  <a class="text-GreenFooter hover:font-[500]" href="/support">
    Support
  </a>{" "}
  button to support our project.
</p>
        </div>
      );
    } else if (value === 5) {
      return (
        <div key={index} className={chatLog}>
          <p>
          <strong>Credit Card Payment</strong>
          </p>
          <p>
  1. Select the product or service you wish to purchase on the website that has Stripe payment system.
</p>
<p>
  2. Enter credit card information such as card number, expiration date, and CVV for the transaction.
</p>
<p>
  3. Stripe will verify the payment information for security purposes, including checking the customer's account balance.
</p>
<p>
  4. Confirm the payment: Customers confirm the payment by clicking the "Pay" or "Confirm" button on the screen.
</p>
<p>
  5. Stripe will quickly approve the payment and notify the results of the transaction to both the customer and the seller.
</p>

<strong>QR Code Payment</strong>
<p>
  1. Select the product or service you wish to purchase on the website that has Stripe payment system.
</p>
<p>
  2. Enter the amount to pay after scanning the QR Code.
</p>
<p>
  3. Choose the preferred payment method, such as credit card, debit card, or bank account transfer.
</p>
<p>
  4. Confirm the payment and wait for transaction confirmation from Stripe.
</p>
<p>
  5. Stripe will approve the payment and notify the results of the transaction to both the customer and the seller.
</p>

<br />
<p>
  Payment via Stripe using credit card and QR Code is a convenient and secure method for online financial transactions.
</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="chat-body h-[20rem] bg-white border-[1px] border-gray-200 overflow-auto flex flex-col">
      <div className={chatLog}>
        <p>
          What kind of information are you interested in?
          <br />
          Feel free to click on the option.
        </p>
        <ul className="text-GreenFooter cursor-pointer list-disc pl-[.5rem]">
          <li className="hover:font-[500]" onClick={() => handleClick(1)}>
            Membership registration
          </li>
          <li className="hover:font-[500]" onClick={() => handleClick(2)}>
            Lending information
          </li>
          <li className="hover:font-[500]" onClick={() => handleClick(3)}>
            Loan information
          </li>
          <li className="hover:font-[500]" onClick={() => handleClick(4)}>
            Support Us
          </li>
          <li className="hover:font-[500]" onClick={() => handleClick(5)}>
            How to make payments
          </li>
        </ul>
      </div>

      {selectedDetails.map((detail, index) => renderDetail(detail, index))}
    </div>
  );
}

export default MsgAuto;
