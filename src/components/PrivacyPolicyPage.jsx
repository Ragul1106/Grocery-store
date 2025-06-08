import React from 'react';
import Header from './Header'; 
import { Helmet } from 'react-helmet';
import '../assets/css/document.css'; 

const PrivacyPolicy = () => {
  return (
    <>
    <Helmet>
            <title>Privacy Policy/Grocery Store</title>
          </Helmet>
      <Header /> 
      <div className="privacy-policy-container fs-3 fw-bold">
        <h1 className='fs-2 fw-bold'>PRIVACY POLICY</h1>
        <p>Grocery at doorstep works to ensure that your privacy is protected when using our website. We have a policy setting out how your personal data will be processed and protected. Applicable law and our practices change over time. If we decide to update our policy, we will post the changes on this site. You should check this page from time to time to ensure that you are happy with any changes.</p>
        <p>Your Personal Data</p>
        <p>In processing your personal data, you consent to us using the data collected in order to fulfil our commitments to you and to provide you with the service you expect. We need your data for the following purposes:</p>
        <ul>
          <li>To create your personal account at Sonee Sports (i.e. your name and email address).</li>
          <li>To validate that you are of legal age for shopping online (i.e. date of birth).</li>
          <li>To process your orders through our website (i.e. your name, postal address, and mode of payment).</li>
          <li>To send you marketing offers such as newsletters and latest Sports Sonee affiliated events (i.e. your name and email address).</li>
          <li>To update you about you the delivery of your goods (i.e. contact number, address).</li>
          <li>To answer your queries and to inform you of important updates (i.e. your email address).</li>
          <li>To notify the winners in competitions arranged online if in case you joined (i.e. your email address, name, home address and telephone number).</li>
          <li>To analyze your personal data to provide you with relevant marketing offers and information (i.e. name, buying habits).</li>
        </ul>
        <p>We will only keep your data for as long as necessary to carry out our services to you and for as long as we are required by the Maldivian laws. After this, your personal data will be deleted. We cannot remove your data when there is a legal data requirement, such as for taxation purposes or anything legally important held by the Maldivian Laws.</p>
        <p>User Profile Image Upload - Sonee Sports Mobile App</p>
        <p>At Sonee Sports Mobile App, we are committed to safeguarding the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information, particularly concerning user profile image uploads. By using our services and uploading your profile image, you agree to the terms outlined in this policy.</p>
        <p>Information We Collect:</p>
        <p>When you upload a profile image on Sonee Sports, we may collect the following information:</p>
      </div>
    </>
  );
};

export default PrivacyPolicy;