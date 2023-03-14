document.addEventListener("DOMContentLoaded", function() {
  const offerText = document.getElementById("offer-text");
  let text = "Dear <b> Ayush Kumar Jha</b>,\n\n"+
            "We are pleased to offer you the position of <b><i>SDE I</i></b> at <b>Pie Star Interactive Studios</b> starting on <b><i>16/03/2023</i></b>.\n\n"+

            "<b>Responsibilities:</b>\n\n"+
            "As an SDE I at Pie Star Interactive Studios, you will be responsible for developing \n\n"+
            "and maintaining software applications and systems. You will work closely with other \n\n"+
            "developers, designers, and project managers to create high-quality products that meet the needs of our clients.\n\n"+
           
            "\n\n"+
      
            "We offer a dynamic and challenging work environment, opportunities for growth and career\n\n"+
            "advancement, and a competitive compensation package that includes benefits such as\n\n"+
            "health insurance, paid time off, and retirement savings plans.\n\n"+
            
            "\n\n"+           
       
            "We are confident that you will find our company to be a rewarding and fulfilling place to \n\n"+
            "work, and we look forward to having you as a member of our team. If you accept this offer,\n\n"+
            "please sign and return the enclosed copy of this letter to indicate your acceptance of the\n\n"+
            "terms and conditions of your employment.\n\n"+
           
            
            "Please let us know if you have any questions or concerns. We are excited to have you on board and look forward to working with you.\n\n"+
            
            "Sincerely,\n\n"+
            "<b>Vikas Sharma</b>\n\n"+
            "<b><i>Co-Founder & CEO</i></b>\n\n"+
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
