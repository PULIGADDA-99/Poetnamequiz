const questions = [
    { question: "పాంచతంత్రం రచయిత ఎవరు?", options: ["విష్ణు శర్మ", "కాళిదాస", "వేదవ్యాస", "భాసా"], answer: 0, info: "విష్ణు శర్మ రచించిన పాంచతంత్రం కథల సంకలనం." },
    { question: "పురాతన భారతీయ స్కాలర్ చారకకు ఏ గ్రంథం చెందుతుంది?", options: ["సుశ్రుతసంహితా", "చారకసంహితా", "అష్టాంగా హృదయం", "రసరత్న సముచ్ఛయా"], answer: 1, info: "చారకసంహితా అనేది చారక రాసిన ఔషధ గ్రంథం." },
    { question: "కుమారసంభవం అనే కవితను ఏ ప్రాచీన భారతీయ కవి రచించాడు?", options: ["భాసా", "కాళిదాస", "భవభూషణ", "సుద్రక"], answer: 1, info: "కాళిదాస రచించిన కుమారసంభవం మహాకావ్యం." },
    { question: "ప్రసిద్ధ రచన మృచ్చకటికా ని ఎవరు రాశారు?", options: ["సుద్రక", "కాళిదాస", "భాసా", "విశాఖదత్త"], answer: 0, info: "సుద్రక రచించిన మృచ్చకటికా నాటకం." },
    { question: "రాజతరంగిని అనే గ్రంథం ఏ కశ్మీరీ చరిత్రకారుడు రచించాడు?", options: ["కల్పన", "బానా", "తులసీదాస్", "బానభట్ట"], answer: 3, info: "బానభట్ట రాసిన రాజతరంగిని కశ్మీరీ చరిత్ర గ్రంథం." },
    { question: "న్యాయ సూత్రాలు అనే గ్రంథం ఎవరు రచించారు?", options: ["గౌతమ", "జైమిని", "కపిల", "పటంజలి"], answer: 0, info: "గౌతమ రాసిన న్యాయసూత్రాలు శాస్త్రం." },
    { question: "జైమిని సూత్రాలు అనే పురాతన గ్రంథాన్ని ఎవరు రచించారు?", options: ["జైమిని", "పటంజలి", "వ్యాస", "భారత"], answer: 0, info: "జైమిని రచించిన జైమిని సూత్రాలు ఉపనిషత్తులపై." },
    { question: "ఆర్థశాస్త్రం అనే పురాతన గ్రంథం ఎవరు రచించారు?", options: ["చాణక్య", "భారత ముని", "పటంజలి", "కాళిదాస"], answer: 0, info: "చాణక్య రాసిన ఆర్థశాస్త్రం బిజినెస్ మరియు పాలనపై." },
    { question: "అభిజ్ఞానశకుంతలమ్ అనే ప్రసిద్ధ గ్రంథాన్ని ఎవరు రాశారు?", options: ["కాళిదాస", "భాసా", "సుద్రక", "భవభూషణ"], answer: 0, info: "కాళిదాస రాసిన అభిజ్ఞానశకుంతలమ్ నాటకం." },
    { question: "విక్రమోర్వస్యమ్ అనే ప్రసిద్ధ నాటకం ఎవరూ రచించారు?", options: ["కాళిదాస", "సుద్రక", "భాసా", "భవభూషణ"], answer: 0, info: "కాళిదాస రాసిన విక్రమోర్వస్యమ్ నాటకం." }
   { question: "భగవద్గీత అనే గ్రంథం ఎవరు రచించారు?", options: ["వేదవ్యాస", "వాల్మీకి", "కాళిదాస", "భాసా"], answer: 0, info: "వేదవ్యాస రాసిన భగవద్గీత పురాణ గ్రంథం." },
           { question: "భారతీయ నాటకశాస్త్రం మరియు కవిత్వం కు సంబంధించి ఏ పురాతన గ్రంథం?", options: ["కావ్య ప్రకాశ", "నాట్యశాస్త్రం", "రసలీల", "శిల్ప శాస్త్రం"], answer: 1, info: "భారతీయ నాట్యశాస్త్రం అనేది నాటకశాస్త్రానికి సంబంధించిన గ్రంథం." },
            { question: "ఆశ్రమవాసి అనే పుస్తకాన్ని ఎవరు రచించారు?", options: ["రాజశేఖర", "కాళిదాస", "భాసా", "సుధామా"], answer: 0, info: "రాజశేఖర రాసిన ఆశ్రమవాసి అనేది కవిత్వం." },
            { question: "శతకఘట్ట అనే రచన ఎవరూ రచించారు?", options: ["రాజశేఖర", "భాసా", "కాళిదాస", "శంకరాచార్య"], answer: 0, info: "రాజశేఖర రాసిన శతకఘట్ట రచన." },
            { question: "గీతాగోవింద అనే రచనని ఎవరు రాశారు?", options: ["కాళిదాస", "జయదేవ", "భాసా", "భవభూషణ"], answer: 1, info: "జయదేవ రాసిన గీతాగోవింద కవిత్వం." },
            { question: "పురాణమాలా రచయిత ఎవరు?", options: ["కాళిదాస", "భాసా", "శంకరాచార్య", "ఆచార్య"], answer: 2, info: "శంకరాచార్య రచించిన పురాణమాలా గ్రంథం." },
            { question: "అభినవగుప్తకు సంబంధించిన ప్రధాన రచన ఏది?", options: ["అభినవభారతీ", "సాహిత్యదర్పణం", "నాట్యశాస్త్రం", "శకుంతల"], answer: 0, info: "అభినవభారతీ అభినవగుప్త రచించిన కవిత్వం యొక్క విశ్లేషణ." },
            { question: "భాగవతం రచయిత ఎవరు?", options: ["వేదవ్యాస", "వాళ్మీకి", "సుకృతీ", "భర్తుహరి"], answer: 0, info: "వేదవ్యాస రచించిన భాగవతం పురాణం." },
            { question: "మా పుస్తకం 'భారతీయ కథలు' రచయిత ఎవరు?", options: ["విష్ణు శర్మ", "కాళిదాస", "భాసా", "సుద్రక"], answer: 0, info: "విష్ణు శర్మ రచించిన 'భారతీయ కథలు' కధా సంకలనం." },
            { question: "రామాయణ రచయిత ఎవరు?", options: ["వాల్మీకి", "కాళిదాస", "భాసా", "భవభూషణ"], answer: 0, info: "వాల్మీకి రచించిన రామాయణ మహాకావ్యం." },
            { question: "కావ్య ప్రకాశం రచయిత ఎవరు?", options: ["సంకరాచార్య", "కాళిదాస", "శంకరాచార్య", "వేదవ్యాస"], answer: 0, info: "సంకరాచార్య రచించిన కావ్య ప్రకాశం గ్రంథం." },
            { question: "నాట్యశాస్త్రం రచయిత ఎవరు?", options: ["భరతముని", "వేదవ్యాస", "కాళిదాస", "భాసా"], answer: 0, info: "భరతముని రచించిన నాట్యశాస్త్రం నాటకశాస్త్రం." },
            { question: "మధుసూదన శాస్త్రి కు సంబంధించిన రచన ఏది?", options: ["శ్రీ శైల గీత", "శ్రీ కృష్ణ కవిత్వం", "కృష్ణ కవిత్వం", "కృష్ణ కవి"], answer: 0, info: "మధుసూదన శాస్త్రి రచించిన శ్రీ శైల గీత కవిత్వం." },
            { question: "భర్తుహరి కు సంబంధించిన రచన ఏది?", options: ["సుశ్రుతసంహితా", "కావ్య ప్రకాశ", "నీతిశాతకం", "భవభూషణ"], answer: 2, info: "భర్తుహరి రచించిన నీతిశాతకం నైతికతపై." }
];
const startScreen = document.getElementById('start-screen');
const namaskaram = document.getElementById('namaskaram');
const gameInstructions = document.getElementById('game-instructions');
const playNowButton = document.getElementById('play-now');

const gameScreen = document.getElementById('game-screen');
const questionContainer = document.getElementById('question-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');

const reviewScreen = document.getElementById('review-screen');
const scoreElement = document.getElementById('score');
const moreInfoButton = document.getElementById('more-info');
const playAgainButton = document.getElementById('play-again');
const usefulLinksButton = document.getElementById('useful-links');

const infoScreen = document.getElementById('info-screen');
const infoDetails = document.getElementById('info-details');
const backToReviewButton = document.getElementById('back-to-review');

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let questionOrder = [];

function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    questionOrder = Array.from({ length: 20 }, (_, i) => i).sort(() => 0.5 - Math.random()).slice(0, 10);
    displayQuestion();
}

function displayQuestion() {
    const questionData = questions[questionOrder[currentQuestionIndex]];
    questionContainer.innerHTML = `
        <p>${questionData.question}</p>
        <ul class="options">
            ${questionData.options.map((option, index) => `<li class="option" data-index="${index}">${option}</li>`).join('')}
        </ul>
    `;
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', selectOption);
    });

    prevButton.classList.toggle('hidden', currentQuestionIndex === 0);
    nextButton.classList.toggle('hidden', currentQuestionIndex === questionOrder.length - 1);
    submitButton.classList.toggle('hidden', currentQuestionIndex !== questionOrder.length - 1);
}

function selectOption(e) {
    const selectedOption = e.target;
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    selectedOption.classList.add('selected');
    selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.getAttribute('data-index'));
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function prevQuestion() {
    currentQuestionIndex--;
    displayQuestion();
}

function submitQuiz() {
    score = selectedAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[questionOrder[index]].answer ? 1 : 0);
    }, 0);
    gameScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    scoreElement.textContent = `${score} / ${questionOrder.length}`;
}

function showMoreInfo() {
    reviewScreen.classList.add('hidden');
    infoScreen.classList.remove('hidden');
    infoDetails.innerHTML = selectedAnswers.map((answer, index) => {
        const question = questions[questionOrder[index]];
        return `<p>${question.question}<br>సమాధానం: ${question.options[question.answer]}<br>మరింత సమాచారం: ${question.info}</p>`;
    }).join('');
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    questionOrder = [];
    infoScreen.classList.add('hidden');
    reviewScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    gameInstructions.classList.add('hidden');
    namaskaram.classList.remove('hidden');
    setTimeout(() => {
        namaskaram.classList.add('hidden');
        gameInstructions.classList.remove('hidden');
    }, 5000);
}

playNowButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);
submitButton.addEventListener('click', submitQuiz);
moreInfoButton.addEventListener('click', showMoreInfo);
playAgainButton.addEventListener('click', resetGame);
backToReviewButton.addEventListener('click', () => {
    infoScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
});
