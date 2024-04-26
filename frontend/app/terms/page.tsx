import React from 'react'
import Head from 'next/head';

const Terms = () => {
  return (
    <div className="bg-white">
    <Head>
      <title>Terms of Service - Wrench Kitchen</title>
    </Head>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>

      {/* User Agreement Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Agreement</h2>
        
        <h4  className="text-l font-semibold text-gray-800 mb-1">Acceptance of Terms: </h4>
        <p className="text-gray-700 mb-4">This section outlines that by using the website or service, the user agrees to be bound by the terms and conditions of the agreement.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">User Conduct: </h4>
        <p className="text-gray-700 mb-4">Describes the expected behavior of users while interacting with the website or service, such as refraining from abusive language, harassment, or illegal activities.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Intellectual Property: </h4>
        <p className="text-gray-700 mb-4">States the ownership of content and intellectual property rights on the website, including trademarks, copyrights, and patents.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Privacy: </h4>
        <p className="text-gray-700 mb-4">Explains how user data is collected, used, and protected, including information about cookies, tracking, and third-party services.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Payment and Fees: </h4>
        <p className="text-gray-700 mb-4">If applicable, outlines the payment terms for accessing premium features or services, including subscription fees, billing cycles, and cancellation policies.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Disclaimer of Warranties: </h4>
        <p className="text-gray-700 mb-4">States that the website or service is provided "as is" without any warranties, and the user assumes all risks associated with its use.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Limitation of Liability:</h4>
        <p className="text-gray-700 mb-4">Limits the liability of the website owner for damages arising from the use or inability to use the service, including indirect, incidental, or consequential damages.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Indemnification: </h4>
        <p className="text-gray-700 mb-4">Requires users to indemnify and hold harmless the website owner from any claims, losses, or damages arising from their use of the service or violation of the agreement.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Changes to Terms: </h4>
        <p className="text-gray-700 mb-4">Reserves the right to modify or update the terms of the agreement at any time, with notice to users of significant changes.</p>
      </section>

      {/* Privacy Policy Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>

        <h4  className="text-l font-semibold text-gray-800 mb-1">Information Collection:  </h4>
        <p className="text-gray-700 mb-4">Describe the types of information collected from users, such as personal information (name, email address, etc.), device information (IP address, browser type, etc.), and usage data (pages visited, actions taken, etc.).</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Use of Information: </h4>
        <p className="text-gray-700 mb-4"> Explain how the collected information is used, such as to provide and improve the service, personalize user experience, communicate with users, and analyze usage patterns.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Cookies and Tracking: </h4>
        <p className="text-gray-700 mb-4">Disclose the use of cookies and similar tracking technologies to collect information about users' browsing behavior and preferences, and provide options for users to manage cookie preferences.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Third-Party Services:  </h4>
        <p className="text-gray-700 mb-4">If applicable, identify any third-party services or tools used on the website or service, and provide links to their respective privacy policies.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Data Sharing and Disclosure: </h4>
        <p className="text-gray-700 mb-4">Outline circumstances under which user information may be shared with third parties, such as service providers, affiliates, or legal authorities, and explain how users can opt out of certain data sharing practices.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Data Security:  </h4>
        <p className="text-gray-700 mb-4">Describe measures taken to protect user information from unauthorized access, disclosure, alteration, or destruction, such as encryption, access controls, and regular security audits.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Data Retention: </h4>
        <p className="text-gray-700 mb-4">Specify the period for which user information is retained, and provide information on how users can request the deletion of their data or unsubscribe from communications.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Children's Privacy:  </h4>
        <p className="text-gray-700 mb-4">If the website or service is directed at children under the age of 13 (in the US) or under the age of 16 (in the EU), comply with relevant children's privacy laws and outline parental consent requirements.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">International Data Transfers:  </h4>
        <p className="text-gray-700 mb-4">If user information is transferred to countries outside the user's country of residence, explain the legal basis for the transfer and provide information on data protection mechanisms in place.</p>

      </section>

      {/* Copyright Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Copyright</h2>

        <h4  className="text-l font-semibold text-gray-800 mb-1">Ownership: </h4>
        <p className="text-gray-700 mb-4">This clause asserts that the website and its content, including text, graphics, images, logos, and multimedia elements, are protected by copyright laws and are owned by the website owner or its licensors.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Copyright Notice: </h4>
        <p className="text-gray-700 mb-4"> Display a copyright notice at the bottom of each page, typically in the format "Copyright © [Year] [Your Company Name]. All rights reserved."</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Use of Content:  </h4>
        <p className="text-gray-700 mb-4">Specify that the content on the website is for personal, non-commercial use only, and may not be reproduced, distributed, transmitted, or otherwise exploited without the prior written consent of the copyright owner.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Exceptions:  </h4>
        <p className="text-gray-700 mb-4">Clarify any exceptions to the copyright policy, such as fair use for educational or informational purposes, and provide guidelines for appropriate use of copyrighted materials.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Third-Party Content: </h4>
        <p className="text-gray-700 mb-4">Acknowledge that some content on the website may be sourced from third parties and used with permission or under license, and provide attribution as required by the terms of use.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Digital Millennium Copyright Act (DMCA) Compliance: </h4>
        <p className="text-gray-700 mb-4">If applicable, outline procedures for reporting copyright infringement and the process for responding to such reports in accordance with the DMCA.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Enforcement: </h4>
        <p className="text-gray-700 mb-4">State the website owner's commitment to enforcing its copyright rights and taking legal action against infringers if necessary.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Updates to Copyright Policy:  </h4>
        <p className="text-gray-700 mb-4">Reserve the right to update or modify the copyright policy at any time, with notice to users of material changes, and provide a date of last update.</p>

      </section>

      {/* Disclaimer Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Disclaimer</h2>

        <h4  className="text-l font-semibold text-gray-800 mb-1">No Professional Advice: </h4>
        <p className="text-gray-700 mb-4">This disclaimer states that any information provided on the website is for general informational purposes only and should not be construed as professional advice. Users should seek the advice of a qualified professional for specific concerns or issues.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Accuracy of Information: </h4>
        <p className="text-gray-700 mb-4">This disclaimer clarifies that while efforts are made to ensure the accuracy and reliability of information provided on the website, no guarantees are made regarding its completeness, accuracy, or timeliness. Users should verify information independently before relying on it.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Third-Party Content:  </h4>
        <p className="text-gray-700 mb-4">If the website includes content or links to third-party websites, this disclaimer states that the website owner does not endorse or have control over the content or policies of third-party websites, and is not responsible for any harm or damages resulting from their use.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">No Warranty: </h4>
        <p className="text-gray-700 mb-4">This disclaimer explicitly states that the website and its content are provided "as is" without any warranties, express or implied. The website owner disclaims all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Limitation of Liability:  </h4>
        <p className="text-gray-700 mb-4">This disclaimer limits the liability of the website owner for any damages or losses arising from the use or inability to use the website, including direct, indirect, incidental, consequential, or punitive damages.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Indemnification: </h4>
        <p className="text-gray-700 mb-4"> This clause requires users to indemnify and hold harmless the website owner from any claims, damages, or losses arising from their use of the website or violation of the terms of use.</p>
        <h4  className="text-l font-semibold text-gray-800 mb-1">Changes to Disclaimer: </h4>
        <p className="text-gray-700 mb-4">This disclaimer reserves the right to modify or update the disclaimer at any time, with notice to users of significant changes, and provides a date of last update.</p>

      </section>
    </div>
  </div>
  )
}

export default Terms