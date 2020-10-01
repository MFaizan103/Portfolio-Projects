import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HXVtNGiC99e1JcARfYNqw5qMcsfg45rw7FGgEJ0HQ9biIw9WOeWVOBIuPf4Lrbvt3fyAbwZpejtoWCy7m9Dp77n00CK1ibNRE";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Crown Clothin"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
