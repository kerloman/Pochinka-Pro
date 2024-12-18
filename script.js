document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const icon = item.querySelector(".faq-icon");
  
      question.addEventListener("click", () => {
        // Плавное открытие/закрытие ответа
        if (answer.classList.contains("active")) {
          answer.classList.remove("active");
          icon.classList.remove("rotate");
        } else {
          answer.classList.add("active");
          icon.classList.add("rotate");
        }
      });
    });
  });