const quizDB = [
    {
        question: "Q1: In India, when did the second phase of COVID-19 vaccination start?",

        A: "December 2020",
        B: "January 2021",
        C: "February 2021",
        D: "March 2021",

        Ans: "ans4"
    },
    {
        question: "Q2:  Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",

        A: "Plasma Therapy",
        B: "Solidarity",
        C: "Remdesivir",
        D: "Hydroxychloroquine",

        Ans: "ans1"
    },
    {
        question: "Q3: Olympian Shakti Mazumdar passed away in May 2021. He represented India in Olympic games for which sport ?",

        A: "Hockey",
        B: "Badminton",
        C: "Archery",
        D: "Boxing",

        Ans: "ans4"
    },
    {
        question: "Q4: What does 'FIRC' stands for ?",

        A: "Financial Investment Risk Clearance",
        B: "Foreign Institutional Registration Certificate",
        C: "Foreign Inward Remittance Clearance",
        D: "Financial Institution Risk Controller",

        Ans: "ans3"
    },
    {
        question: "Q5: What are the precautions that need to be taken to protect from the coronavirus?",

        A: "Cover your nose and mouth when sneezing.",
        B: "Add more garlic into your diet",
        C: "Visit your doctor for antibiotics treatment",
        D: "Wash your hands after every hour.",

        Ans: "ans1"
    },
    {

        question: "Q6: Which of the following is/are the symptoms of Black Fungus? 1. Facial Swelling 2. Nasal Congestion 3. Headache",

        A: "Only 1",
        B: "Both 2 and 3",
        C: "Only 2",
        D: "1, 2 and 3",

        Ans: "ans4"
    },
    {
        question: "Q7: Which of the following are the causes of Yellow Fungus infection? 1. Poor hygiene 2. Moisture and heat 3. Contaminated food 4. Overuse of steroids",

        A: "1 and 4",
        B: "2, 3 and 4",
        C: "1, 2 and 3",
        D: "1, 2, 3 and 4",

        Ans: "ans4"

    },
    {
        question: "Q8: Which of the following statements regarding Isolation during COVID-19 is/are correct? 1. It is used for people suffering from COVID-19 symptoms or who have tested positive for the virus. 2. In isolation means being separated from other people, mainly in a medical facility where you can receive clinical care.",

        A: "Only 1",
        B: "Only 2",
        C: "Both 1 and 2",
        D: "Neither 1 nor 2",

        Ans: "ans3"
    },
    {
        question: "Q9: In India, when did the second phase of COVID-19 vaccination start?",

        A: "December 2020",
        B: "January 2021",
        C: "February 2021",
        D: "March 2021",

        Ans: "ans4"
    },
    {
        question: "Q10: How many countries, areas, or territories are suffering from novel coronavirus outbreaks in the World?",
        A: "More than 50",
        B: "More than 100",
        C: "More than 150",
        D: "More than 200",

        Ans: "ans4"
    },
];

const question = document.querySelector('.question');
const Option1 = document.querySelector('#Option1');
const Option2 = document.querySelector('#Option2');
const Option3 = document.querySelector('#Option3');
const Option4 = document.querySelector('#Option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const result = document.querySelector('#result');

let questionCount = 0;
let marks = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    Option1.innerText = questionList.A;
    Option2.innerText = questionList.B;
    Option3.innerText = questionList.C;
    Option4.innerText = questionList.D;
}

loadQuestion();

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {

        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });


    return answer;
};

const deselectAll = () => {

    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const CheckedAnswer = getCheckedAnswer();
    console.log(CheckedAnswer);

    if (CheckedAnswer == quizDB[questionCount].Ans) {

        marks++;
    }

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        result.innerHTML = `<h3>You scored ${marks}/${quizDB.length} 🔥</h3><br>
        <button class= "btn" onclick="location.reload()" > Play Again !</button>`;

        result.classList.remove('res');
    }
});
