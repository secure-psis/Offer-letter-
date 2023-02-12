document.addEventListener("DOMContentLoaded", function() {
  const offerText = document.getElementById("offer-text");
  let text = "We are pleased to offer you the position of <b><i>Senior Graphic Designer</i></b> at <b>Pie Star Interactive Studios</b> starting on <b><i>02/15/2023</i></b>.\n\n"+

            "<b>Responsibilities:</b>\n\n"+
            "- Design and create visually appealing graphics for various mediums including print and digital.\n\n"+
            "- Collaborate with cross-functional teams to gather requirements and provide design solutions.\n\n"+
            "- Stay up-to-date with industry trends and apply them in your work.\n\n"+
            "- Present designs and concepts to stakeholders for feedback and approval.\n\n"+
            "- Revise designs based on feedback to meet project requirements.\n\n"+
            
            "<b>Qualifications:</b>\n\n"+
            "- A minimum of 2 years of professional experience as a graphic designer.\n\n"+
            "- Proficiency in design software such as Adobe Creative Suite.\n\n"+
            "- Strong attention to detail and ability to meet deadlines.\n\n"+
            "- Excellent communication and interpersonal skills.\n\n"+
            
            "<b>Terms and Conditions:</b>\n\n"+
            "- You will be required to sign a confidentiality agreement.\n\n"+
            "- You will be expected to adhere to the company's code of conduct and ethics policy.\n\n"+
            "- This offer is contingent upon completion of a background check.\n\n"+
            "- This offer letter constitutes the entire agreement between you and the company.\n\n"+
            "- The company reserves the right to modify or terminate this offer at any time.\n\n"+
            
            "We are confident that you will be a valuable addition to our team and we look forward to welcoming you on board.\n\n"+
            
            "Sincerely,\n\n"+
            "<b>Vikas Sharma</b>\n\n"+
            "<b><i>Co-Founder & CIO</i></b>\n\n"+
            "<b>Pie Star Interactive Studios</b>\n\n";
  
  let index = 0;
  let currentText = "";
  
  const typing = setInterval(() => {
    currentText += text[index];
    offerText.innerHTML = currentText;
    index++;
    
    if (index === text.length) {
      clearInterval(typing);
    }
  }, 50);

});