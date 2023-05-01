document.addEventListener("DOMContentLoaded", function() {
  const agreementText = document.getElementById("agreement-text");
  let text = "This Confidentiality Agreement (“Agreement”) is entered into by and between <b>Pie Star Interactive Studios</b> and <b>Mr. Sujal Sharma</b> (“Recipient”) on <b>May 01,2023</b>.\n\n" + 
             "<b>Purpose of Agreement:</b> The Recipient acknowledges that in the course of their work for Pie Star Interactive Studios, they may receive confidential and proprietary information of Pie Star Interactive Studios, its customers and its suppliers (collectively “Confidential Information”). Confidential Information includes, but is not limited to, technical data, business and marketing plans, trade secrets and customer information.\n\n" + 
             "<b>Non-Disclosure:</b> Recipient agrees not to use any Confidential Information for any purpose outside the scope of their work for Pie Star Interactive Studios and not to disclose Confidential Information to any third party without the express written consent of Pie Star Interactive Studios.\n\n" + 
             "<b>Term:</b> The obligations of Recipient under this Agreement shall continue until such time as the Confidential Information is no longer proprietary or confidential or until Pie Star Interactive Studios sends written notice releasing the Recipient from this Agreement, whichever occurs first.\n\n" + 
             "<b>Remedies:</b> Recipient acknowledges that any breach of this Agreement may cause irreparable harm to Pie Star Interactive Studios and that monetary damages may be an inadequate remedy. In addition to any and all other remedies available to Pie Star Interactive Studios, Pie Star Interactive Studios shall be entitled to seek injunctive relief to enforce the terms of this Agreement.\n\n" + 
             "<b>Relation of Parties:</b> This Agreement does not create any agency, partnership, joint venture or other form of joint enterprise, employment or fiduciary relationship.\n\n" + 
             "<b>Waiver:</b> The failure by Pie Star Interactive Studios to require performance by Recipient of any provision of this Agreement shall not affect in any way the full right to require such performance at any time thereafter.\n\n" + 
             "<b>Amendments:</b> This Agreement may not be amended except in writing signed by both parties.\n\n" + 
             "<b>Waiver of Contractual Right:</b> Recipient shall not be entitled to waive any of their rights or obligations under this Agreement without the prior written consent of Pie Star Interactive Studios.\n\n" + 
             "IN WITNESS WHEREOF, the parties have executed this Agreement through their authorized representatives.";
  
  let index = 0;
  let currentText = "";
  
  const typing = setInterval(() => {
    currentText += text[index];
    agreementText.innerHTML = currentText;
    index++;
    
    if (index === text.length) {
      clearInterval(typing);
    }
  }, 50);

  const rejectOfferBtn = document.getElementById("reject-offer-btn");
  const signAgreementBtn = document.getElementById("sign-agreement-btn");
  
  rejectOfferBtn.addEventListener("click", function() {
    window.location.href = "index.html";
  });
  
  signAgreementBtn.addEventListener("click", function() {
    window.location.href = "congo.html";
  });
});
