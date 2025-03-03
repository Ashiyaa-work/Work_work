const menQuestions = [
    {
      question: "Do you think hours of cardio is beneficial for fat loss?",
      subtext: "(Many people think doing cardio every day is the answer.)",
      options: ["Yes", "No", "Not Sure"]
    },
    {
      question: "How many days a week do you currently exercise?",
      subtext: "(Include any form of physical activity.)",
      options: ["1-2 days", "3-4 days", "5+ days"]
    },
    {
      question: "What is your main fitness goal?",
      subtext: "(Choose the one that fits best.)",
      options: ["Build muscle", "Lose weight", "Improve endurance"]
    },
    {
      question: "How would you describe your diet?",
      subtext: "(Roughly speaking, do you watch your calorie intake?)",
      options: ["Strict", "Moderate", "Not at all"]
    }
  ];
  
  const womenQuestions = [
    {
      question: "Do you enjoy group fitness classes?",
      subtext: "(Some find it motivating, others prefer solo workouts.)",
      options: ["Yes", "No", "Not Sure"]
    },
    {
      question: "How often do you do strength training?",
      subtext: "(Lifting weights, resistance exercises, etc.)",
      options: ["Rarely", "1-2 times a week", "3+ times a week"]
    },
    {
      question: "Do you follow any specific diet plan?",
      subtext: "(Keto, Intermittent Fasting, etc.)",
      options: ["Yes", "No", "Sometimes"]
    },
    {
      question: "What is your current fitness goal?",
      subtext: "(Pick the best match.)",
      options: ["Toning", "Weight Loss", "Building Endurance"]
    },
    {
      question: "Do you track your daily calorie intake?",
      subtext: "(Using apps like MyFitnessPal, etc.)",
      options: ["Yes", "No", "Sometimes"]
    }
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const genderRadios = document.querySelectorAll("input[name='gender']");
    const questionContent = document.querySelector(".question-container"); 
    const mainBanner = document.querySelector(".section-1"); 
    let currentQuiz = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
  
    genderRadios.forEach(radio => {
      radio.addEventListener("change", function() {
        currentQuestionIndex = 0;
        userAnswers = [];
        currentQuiz = this.value === "male" ? menQuestions : womenQuestions;
  
        // question content visible
        questionContent.style.display = "flex"; 
        mainBanner.style.display="none";
        renderQuestion();
      });
    });
  
    function updateProgressBar() {
        const progressFill = document.getElementById("progress-fill");
        const progressPercentage = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
        progressFill.style.width = `${progressPercentage}%`;
      }
      
      function renderQuestion() {
        const questionObj = currentQuiz[currentQuestionIndex];
      
        document.getElementById("question-title").textContent = questionObj.question;
        document.getElementById("question-subtext").textContent = questionObj.subtext;
      
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = ""; 
      
        questionObj.options.forEach((optionText, idx) => {
          const optionId = `option-${idx}`;
      
          const optionItem = document.createElement("div");
          optionItem.classList.add("option-item");
      
          const radioInput = document.createElement("input");
          radioInput.type = "radio";
          radioInput.name = "quiz-option";
          radioInput.id = optionId;
          radioInput.value = optionText;
      
          if (userAnswers[currentQuestionIndex] === optionText) {
            radioInput.checked = true;
            optionItem.classList.add("selected");
          }
      
          const label = document.createElement("label");
          label.setAttribute("for", optionId);
          label.classList.add("option-label");
          label.textContent = optionText;
      
          optionItem.addEventListener("click", () => {
            optionsContainer.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
            optionItem.classList.add("selected");
            radioInput.checked = true;
            userAnswers[currentQuestionIndex] = optionText;
          });
      
          updateProgressBar();
          optionItem.appendChild(radioInput);
          optionItem.appendChild(label);
          optionsContainer.appendChild(optionItem);
        });
      
        document.getElementById("question-counter").textContent = `${currentQuestionIndex + 1}/${currentQuiz.length}`;
      }
      
      document.querySelector("#next-btn").addEventListener("click", nextQuestion);
      document.querySelector("#prev-btn").addEventListener("click", prevQuestion);
      
      function nextQuestion() {
        if (!userAnswers[currentQuestionIndex]) {
          alert("Please select an option!");
          return;
        }
      
        if (currentQuestionIndex < currentQuiz.length - 1) {
          currentQuestionIndex++;
          renderQuestion();
        } else {
          document.querySelector(".question-container").style.display="none";
          document.querySelector("#results-screen").style.display="flex";
        }
      }
      
      function prevQuestion() {
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          renderQuestion();
        } else {
          document.querySelector(".question-container").classList.add("hidden");
          document.querySelector(".section-1").style.display = "block";
        }
      }
      
  });
  
  
  