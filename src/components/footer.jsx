import { useState } from 'react';

export default function Footer() {
  // State to manage the visibility of each section
  const [isResourcesOpen, setResourcesOpen] = useState(true);
  const [isHelpOpen, setHelpOpen] = useState(true);
  const [isCompanyOpen, setCompanyOpen] = useState(true);
  const [isPromoOpen, setPromoOpen] = useState(true);

  return (
    <>
      <div className="flex flex-wrap lg:gap-20 gap-6 justify-center items-center my-6">
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <h1
            className="text-4xl font-bold font-mono cursor-pointer"
            onClick={() => setResourcesOpen(!isResourcesOpen)}
          >
            Resources
          </h1>
          {isResourcesOpen && (
            <>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Gift Cards</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Find a Store</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Membership</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Nike x NBA</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Nike Journal</h3>
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <h1
            className="text-4xl font-bold font-mono cursor-pointer"
            onClick={() => setHelpOpen(!isHelpOpen)}
          >
            Help
          </h1>
          {isHelpOpen && (
            <>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Get Help</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Order Status</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Shipping and Delivery</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Returns</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Order Cancellation</h3>
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <h1
            className="text-4xl font-bold font-mono cursor-pointer"
            onClick={() => setCompanyOpen(!isCompanyOpen)}
          >
            Company
          </h1>
          {isCompanyOpen && (
            <>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>About Nike</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>News</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Careers</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Investor</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Purpose</h3>
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <h1
            className="text-4xl font-bold font-mono cursor-pointer"
            onClick={() => setPromoOpen(!isPromoOpen)}
          >
            Promotion & Discounts
          </h1>
          {isPromoOpen && (
            <>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Student</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Military</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Teacher</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Medical Profession</h3>
              <h3 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Birthday</h3>
            </>
          )}
        </div>
      </div>
<br />
<br />
<br />

      <div className='flex my-4 gap-10 justify-center items-center'>
        <h2 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>2024 Nike, Inc. All Rights Reserved</h2>
        <h2 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Guides</h2>
        <h2 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Terms of Sale</h2>
        <h2 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Terms of Use</h2>
        <h2 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Nike Privacy Policy</h2>
        <h2 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>Your Privacy Choices</h2>
        <h2 className="text-xl font-semibold cursor-pointer font-sans" style={{ color: "#707072" }}>CA Supply Chains Act</h2>
      </div>
      <br />
<br />
<br />

    </>
  );
}
