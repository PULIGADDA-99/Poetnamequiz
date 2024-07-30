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
    { question: "విక్రమోర్వస్యమ్ అనే ప్రసిద్ధ నాటకం ఎవరూ రచించారు?", options: ["కాళిదాస", "సుద్రక", "భాసా", "భవభూషణ"], answer: 0, info: "కాళిదాస రాసిన విక్రమోర్వస్యమ్ నాటకం." },
    { question: "భగవద్గీత అనే గ్రంథం ఎవరు రచించారు?", options: ["వేదవ్యాస", "వాల్మీకి", "కాళిదాస", "భాసా"], answer: 0, info: "వేదవ్యాస రాసిన భగవద్గీత పురాణ గ్రంథం." },
    { question: "భారతీయ నాటకశాస్త్రం మరియు కవిత్వం కు సంబంధించి ఏ పురాతన గ్రంథం?", options: ["కావ్య ప్రకాశ", "నాట్యశాస్త్రం", "రసలీల", "శిల్ప శాస్త్రం"], answer: 1, info: "భారతీయ నాట్యశాస్త్రం అనేది నాటకశాస్త్రానికి సంబంధించిన గ్రంథం." },
    { question: "ఆశ్రమవాసి అనే పుస్తకాన్ని ఎవరు రచించారు?", options: ["రాజశేఖర", "కాళిదాస", "భాసా", "సుధామా"], answer: 0, info: "రాజశేఖర రాసిన ఆశ్రమవాసి అనేది కవిత్వం." },
    { question: "శతకఘట్ట అనే రచన ఎవరూ రచించారు?", options: ["రాజశేఖర", "భాసా", "కాళిదాస", "శంకరాచార్య"], answer: 0, info: "రాజశేఖర రచించిన శతకఘట్ట కవిత్వం." },
    { question: "విష్ణుపురాణం అనే పురాణ గ్రంథాన్ని ఎవరు రచించారు?", options: ["పులస్త్య", "పారాసర", "వేదవ్యాస", "వాల్మీకి"], answer: 2, info: "వేదవ్యాస రచించిన విష్ణుపురాణం పురాణ గ్రంథం." },
    { question: "శంకరవిజయమ్ అనే ప్రాచీన గ్రంథం ఎవరు రచించారు?", options: ["శంకరాచార్య", "కాళిదాస", "భాసా", "శంకర భగవత్పాద"], answer: 3, info: "శంకర భగవత్పాద రచించిన శంకరవిజయమ్ గ్రంథం." },
    { question: "మహాభారతం అనే పురాణ గాథను ఎవరు రచించారు?", options: ["వేదవ్యాస", "వాల్మీకి", "కాళిదాస", "భాసా"], answer: 0, info: "వేదవ్యాస రచించిన మహాభారతం పురాణ గాథ." },
    { question: "రామాయణం అనే పురాణ గాథను ఎవరు రచించారు?", options: ["వాల్మీకి", "వేదవ్యాస", "కాళిదాస", "భాసా"], answer: 0, info: "వాల్మీకి రచించిన రామాయణం పురాణ గాథ." },
    { question: "శ్రీమద్విరాట్ పర్వం అనే పురాణ గ్రంథాన్ని ఎవరు రచించారు?", options: ["వేదవ్యాస", "వాల్మీకి", "కాళిదాస", "భాసా"], answer: 0, info: "వేదవ్యాస రచించిన శ్రీమద్విరాట్ పర్వం పురాణ గ్రంథం." },
    { question: "శకుంతల లేదా అభిజ్ఞాన శకుంతలం అనే ప్రసిద్ధ కవితను ఎవరు రచించారు?", options: ["కాళిదాస", "భాసా", "సుద్రక", "భవభూషణ"], answer: 0, info: "కాళిదాస రచించిన శకుంతల అనేది ప్రసిద్ధ కవిత." }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptions = [];

document.getElementById("play-now").addEventListener("click", () => {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    loadQuestion();
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        document.getElementById("game-screen").classList.add("hidden");
        document.getElementById("review-screen").classList.remove("hidden");
        calculateScore();
    }
});

document.getElementById("submit").addEventListener("click", () => {
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("review-screen").classList.remove("hidden");
    calculateScore();
});

document.getElementById("play-again").addEventListener("click", () => {
    document.getElementById("review-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    selectedOptions = [];
    loadQuestion();
});

document.getElementById("more-info").addEventListener("click", () => {
    document.getElementById("review-screen").classList.add("hidden");
    document.getElementById("info-screen").classList.remove("hidden");
    showInfo();
});

document.getElementById("back-to-review").addEventListener("click", () => {
    document.getElementById("info-screen").classList.add("hidden");
    document.getElementById("review-screen").classList.remove("hidden");
});

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-container").innerHTML = `
        <h3>${question.question}</h3>
        <ul class="options">
            ${question.options.map((option, index) => `
                <li class="option ${selectedOptions[currentQuestionIndex] === index ? 'selected' : ''}" onclick="selectOption(${index})">${option}</li>
            `).join('')}
        </ul>
    `;
    document.getElementById("prev").classList.toggle("hidden", currentQuestionIndex === 0);
    document.getElementById("next").classList.toggle("hidden", currentQuestionIndex === questions.length - 1);
    document.getElementById("submit").classList.toggle("hidden", currentQuestionIndex !== questions.length - 1);
}

function selectOption(index) {
    selectedOptions[currentQuestionIndex] = index;
    loadQuestion();
}

function calculateScore() {
    score = selectedOptions.reduce((total, optionIndex, questionIndex) => {
        return total + (questions[questionIndex].answer === optionIndex ? 1 : 0);
    }, 0);
    document.getElementById("score").textContent = `మీ స్కోరు: ${score}/${questions.length}`;
    document.querySelector(".thank-you").classList.remove("hidden");
}

function showInfo() {
    document.getElementById("info-details").innerHTML = selectedOptions.map((optionIndex, questionIndex) => {
        const question = questions[questionIndex];
        return `
            <div>
                <h3>${question.question}</h3>
                <p>సరైన సమాధానం: ${question.options[question.answer]}</p>
                <p>మరింత సమాచారం: ${question.info}</p>
            </div>
        `;
    }).join('');
}
