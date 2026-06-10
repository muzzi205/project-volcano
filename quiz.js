const QUIZ_LENGTH = 10;

const QUESTION_BANK = [
  {
    question: "What is molten rock called while it is still beneath Earth's surface?",
    options: ["Lava", "Magma", "Ash", "Tephra"],
    answer: 1,
    explanation: "Underground molten rock is called magma. Once it reaches the surface, it is called lava."
  },
  {
    question: "Why does magma rise toward the surface?",
    options: [
      "It is denser than solid rock",
      "Wind pushes it upward",
      "It is less dense than the surrounding rock",
      "Gravity pulls it up"
    ],
    answer: 2,
    explanation: "Magma is less dense than solid rock, so buoyancy pushes it upward through cracks and weak zones."
  },
  {
    question: "What collects in a magma chamber before many eruptions?",
    options: ["Ocean water", "Dissolved gases", "Sand", "Ice"],
    answer: 1,
    explanation: "Dissolved gases like water vapor and carbon dioxide build pressure inside the magma chamber."
  },
  {
    question: "What happens during an eruption that helps build the volcano?",
    options: [
      "The mountain sinks into the ground",
      "Lava and ash pile up in new layers",
      "All rock turns to water",
      "The crater disappears forever"
    ],
    answer: 1,
    explanation: "Each eruption deposits lava flows and ash layers, slowly building the volcano's shape over time."
  },
  {
    question: "Where do many volcanoes form because one plate slides beneath another?",
    options: ["Subduction zones", "Desert basins", "River deltas", "Polar ice caps"],
    answer: 0,
    explanation: "Subduction zones — where an oceanic plate dives beneath another plate — are a major setting for volcano formation."
  },
  {
    question: "What is the name for a large pool of magma stored beneath a volcano?",
    options: ["Crater", "Magma chamber", "Caldera lake", "Fault line"],
    answer: 1,
    explanation: "A magma chamber is a reservoir of molten rock beneath the volcano that feeds eruptions."
  },
  {
    question: "Which type of volcano has broad, gentle slopes built mainly from fluid lava flows?",
    options: ["Shield volcano", "Cinder cone", "Stratovolcano", "Caldera"],
    answer: 0,
    explanation: "Shield volcanoes, like those in Hawaii, form from runny basaltic lava that spreads into wide, shallow slopes."
  },
  {
    question: "What happens to trapped gases as magma rises closer to the surface?",
    options: [
      "They disappear completely",
      "They expand and increase pressure",
      "They turn into solid rock",
      "They freeze into ice"
    ],
    answer: 1,
    explanation: "Lower pressure lets dissolved gases expand, which can crack rock and drive explosive eruptions."
  },
  {
    question: "What do scientists call broken-up volcanic rock thrown from an eruption?",
    options: ["Magma", "Tephra", "Basalt", "Granite"],
    answer: 1,
    explanation: "Tephra includes ash, cinders, and volcanic bombs ejected during an eruption."
  },
  {
    question: "Which setting can create volcanoes far from plate boundaries?",
    options: ["Hotspots", "Coral reefs", "Glaciers", "Sand dunes"],
    answer: 0,
    explanation: "Hotspots are areas where mantle plumes rise through the crust, creating volcanoes like Hawaii or Yellowstone."
  },
  {
    question: "What is lava?",
    options: [
      "Molten rock above Earth's surface",
      "Frozen magma underground",
      "Only volcanic ash",
      "Rain mixed with dust"
    ],
    answer: 0,
    explanation: "Lava is magma that has erupted onto Earth's surface."
  },
  {
    question: "Why do repeated eruptions make a volcano taller over time?",
    options: [
      "Wind stacks dust on the peak",
      "New lava and ash layers add material to the cone",
      "The ground sinks around it",
      "Trees grow on the crater rim"
    ],
    answer: 1,
    explanation: "Each eruption can deposit new layers of lava and ash, gradually building the volcano upward."
  },
  {
    question: "Which plate boundary often produces tall, explosive stratovolcanoes?",
    options: [
      "Convergent boundary (subduction)",
      "Divergent boundary only",
      "Transform boundary only",
      "No plate boundaries"
    ],
    answer: 0,
    explanation: "At subduction zones, thick magma and high gas content often create steep, explosive volcanoes."
  },
  {
    question: "What is a vent?",
    options: [
      "An opening where magma and gas escape",
      "A type of lava rock",
      "A volcano that never erupts",
      "A tool used to measure wind"
    ],
    answer: 0,
    explanation: "A vent is an opening in Earth's surface — or a volcano — through which magma, gas, and ash escape."
  },
  {
    question: "What role does heat from Earth's interior play in volcano formation?",
    options: [
      "It melts rock to form magma",
      "It cools magma into ice",
      "It stops all eruptions",
      "It only affects the ocean"
    ],
    answer: 0,
    explanation: "Heat from the mantle and crust melts rock, creating the magma that can rise and form volcanoes."
  }
];

const questionEl = document.getElementById("quizQuestion");
const optionsEl = document.getElementById("quizOptions");
const feedbackEl = document.getElementById("quizFeedback");
const progressEl = document.getElementById("quizProgress");
const nextBtn = document.getElementById("quizNext");
const resetBtn = document.getElementById("quizReset");
const beginBtn = document.getElementById("quizBegin");
const startScreen = document.getElementById("quizStart");
const activeScreen = document.getElementById("quizActive");
const scoreValueEl = document.getElementById("quizScoreValue");

let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function shuffle(items) {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function buildQuiz() {
  activeQuestions = shuffle(QUESTION_BANK).slice(0, QUIZ_LENGTH);
  currentIndex = 0;
  score = 0;
  answered = false;
  scoreValueEl.textContent = "0";
}

function renderQuestion() {
  const item = activeQuestions[currentIndex];
  answered = false;

  progressEl.textContent = `Question ${currentIndex + 1} of ${QUIZ_LENGTH}`;
  questionEl.textContent = item.question;
  feedbackEl.hidden = true;
  feedbackEl.className = "quiz-feedback";
  nextBtn.disabled = true;
  nextBtn.hidden = false;
  nextBtn.textContent = currentIndex === QUIZ_LENGTH - 1 ? "See results" : "Next question";
  resetBtn.hidden = true;

  optionsEl.innerHTML = "";
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    optionsEl.appendChild(button);
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const item = activeQuestions[currentIndex];
  const isCorrect = index === item.answer;

  if (isCorrect) {
    score += 1;
    scoreValueEl.textContent = score;
  }

  [...optionsEl.children].forEach((option, optionIndex) => {
    option.disabled = true;
    if (optionIndex === item.answer) option.classList.add("correct");
    if (optionIndex === index && !isCorrect) option.classList.add("wrong");
  });

  feedbackEl.hidden = false;
  feedbackEl.classList.add(isCorrect ? "correct" : "wrong");
  feedbackEl.textContent = (isCorrect ? "Correct! " : "Not quite. ") + item.explanation;
  nextBtn.disabled = false;
}

function showResults() {
  progressEl.textContent = "Quiz complete";
  questionEl.textContent = `You scored ${score} out of ${QUIZ_LENGTH}`;
  optionsEl.innerHTML = "";
  feedbackEl.hidden = false;
  feedbackEl.className = "quiz-feedback";

  if (score === QUIZ_LENGTH) {
    feedbackEl.classList.add("correct");
    feedbackEl.textContent = "Perfect score — you really know how volcanoes are made!";
  } else if (score >= 7) {
    feedbackEl.classList.add("correct");
    feedbackEl.textContent = "Great work. Start a new random quiz to keep practicing.";
  } else if (score >= 4) {
    feedbackEl.classList.add("correct");
    feedbackEl.textContent = "Good effort. Review the formation steps on the main portal, then try a new random set.";
  } else {
    feedbackEl.classList.add("wrong");
    feedbackEl.textContent = "Keep studying. Read the how-to guide on the left and review the formation steps on the main page.";
  }

  nextBtn.hidden = true;
  resetBtn.hidden = false;
}

function startQuiz() {
  buildQuiz();
  startScreen.hidden = true;
  activeScreen.hidden = false;
  renderQuestion();
}

function resetQuiz() {
  buildQuiz();
  activeScreen.hidden = false;
  startScreen.hidden = true;
  renderQuestion();
}

beginBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", () => {
  if (currentIndex < QUIZ_LENGTH - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }
  showResults();
});

resetBtn.addEventListener("click", resetQuiz);
