// Borasha - simple JavaScript
// Easy version made for humans

function speakText(text, language = "en-IN") {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = language;
        speech.rate = 0.8;

        window.speechSynthesis.speak(speech);
    } else {
        alert("Speech is not supported in this browser.");
    }
}

function selectLanguage(language) {
    localStorage.setItem("borashaLanguage", language);
    alert(language + " selected!");
}

function completeLesson(lessonName) {
    let lessons = JSON.parse(localStorage.getItem("borashaCompletedLessons")) || [];

    if (!lessons.includes(lessonName)) {
        lessons.push(lessonName);
        localStorage.setItem("borashaCompletedLessons", JSON.stringify(lessons));
    }

    alert("Lesson completed! 🌸");
    location.reload();
}

function isLessonCompleted(lessonName) {
    const lessons = JSON.parse(localStorage.getItem("borashaCompletedLessons")) || [];
    return lessons.includes(lessonName);
}

function saveQuizScore(score, total) {
    localStorage.setItem("borashaQuizScore", JSON.stringify({
        score: score,
        total: total
    }));
}

const speakingPracticeWords = [
    { marathi: "नमस्कार", pronunciation: "Namaskar", meaning: "Hello" },
    { marathi: "धन्यवाद", pronunciation: "Dhanyavaad", meaning: "Thank you" },
    { marathi: "कृपया", pronunciation: "Krupaya", meaning: "Please" },
    { marathi: "शुभ सकाळ", pronunciation: "Shubh Sakaal", meaning: "Good morning" },
    { marathi: "शुभ रात्री", pronunciation: "Shubh Raatri", meaning: "Good night" },
    { marathi: "तुम्ही कसे आहात", pronunciation: "Tumhi kase aahat", meaning: "How are you?" },
    { marathi: "मी ठीक आहे", pronunciation: "Mi theek aahe", meaning: "I am fine" },
    { marathi: "माझे नाव रिया आहे", pronunciation: "Majhe naav Riya aahe", meaning: "My name is Riya" },
    { marathi: "मला पाणी हवे आहे", pronunciation: "Mala paani have aahe", meaning: "I want water" },
    { marathi: "आपण नंतर भेटू", pronunciation: "Aapan nantar bhetu", meaning: "We will meet later" }
];

let currentPracticeIndex = 0;

function loadSpeakingPractice() {
    const targetWord = document.getElementById("targetWord");
    const pronunciation = document.getElementById("pronunciation");
    const meaning = document.getElementById("meaning");
    const progressText = document.getElementById("practiceProgressText");
    const progressFill = document.getElementById("practiceProgressFill");
    const speechResult = document.getElementById("speechResult");
    const speechFeedback = document.getElementById("speechFeedback");

    if (!targetWord) return;

    const currentWord = speakingPracticeWords[currentPracticeIndex];

    targetWord.textContent = currentWord.marathi;
    pronunciation.textContent = currentWord.pronunciation;
    meaning.textContent = currentWord.meaning;

    progressText.textContent =
        "Word " + (currentPracticeIndex + 1) + " of " + speakingPracticeWords.length;

    const percentage = ((currentPracticeIndex + 1) / speakingPracticeWords.length) * 100;
    progressFill.style.width = percentage + "%";

    speechResult.textContent = "Your speech will appear here.";
    speechFeedback.textContent = "";
    speechFeedback.className = "";
}

function listenToCurrentWord() {
    const currentWord = speakingPracticeWords[currentPracticeIndex];
    speakText(currentWord.marathi, "mr-IN");
}

function startSpeechRecognition(targetText = "") {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech recognition is not supported here. Please try Chrome.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "mr-IN";

    const output = document.getElementById("speechResult");
    const feedback = document.getElementById("speechFeedback");

    if (output) {
        output.textContent = "🎤 Listening... Please speak now.";
    }

    recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;

        if (output) {
            output.textContent = "You said: " + result;
        }

        if (targetText) {
            checkSpeech(result, targetText);
        }
    };

    recognition.onerror = function () {
        if (output) {
            output.textContent = "Speech could not be recognized.";
        }

        if (feedback) {
            feedback.textContent = "Please try again and speak clearly.";
            feedback.className = "error-message";
        }
    };

    try {
        recognition.start();
    } catch (error) {
        console.log("Speech start error:", error);
    }
}

function normalizeSpeech(text) {
    return text
        .trim()
        .toLowerCase()
        .replace(/[.,!?؟]/g, "")
        .replace(/\s+/g, " ");
}

function checkSpeech(spokenText, targetText) {
    const spoken = normalizeSpeech(spokenText);
    const target = normalizeSpeech(targetText);

    const feedback = document.getElementById("speechFeedback");
    if (!feedback) return;

    if (spoken === target) {
        feedback.textContent = "✓ Excellent! Your answer matched the target.";
        feedback.className = "success-message";
    } else {
        feedback.textContent = "Try again! Listen carefully and speak the same word.";
        feedback.className = "error-message";
    }
}

function nextSpeakingWord() {
    currentPracticeIndex++;

    if (currentPracticeIndex >= speakingPracticeWords.length) {
        currentPracticeIndex = 0;
        alert("🎉 Great job! You finished all 10 practice words.");
    }

    loadSpeakingPractice();
}

function resetSpeakingPractice() {
    const output = document.getElementById("speechResult");
    const feedback = document.getElementById("speechFeedback");

    if (output) output.textContent = "Your speech will appear here.";

    if (feedback) {
        feedback.textContent = "";
        feedback.className = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("targetWord")) {
        loadSpeakingPractice();

        const listenButton = document.getElementById("listenButton");
        if (listenButton) {
            listenButton.addEventListener("click", listenToCurrentWord);
        }

        const speakButton = document.getElementById("speakButton");
        if (speakButton) {
            speakButton.addEventListener("click", function () {
                const currentWord = speakingPracticeWords[currentPracticeIndex];
                startSpeechRecognition(currentWord.marathi);
            });
        }

        const nextButton = document.getElementById("nextButton");
        if (nextButton) {
            nextButton.addEventListener("click", nextSpeakingWord);
        }

        const tryButton = document.getElementById("tryButton");
        if (tryButton) {
            tryButton.addEventListener("click", resetSpeakingPractice);
        }
    }
});

function previewImage(event) {
    const image = document.getElementById("imagePreview");
    if (!image) return;

    const file = event.target.files[0];
    if (!file) return;

    image.src = URL.createObjectURL(file);
    image.style.display = "block";
}

const translationDictionary = {
    "नमस्कार": { English: "Hello", Hindi: "नमस्ते", Marathi: "नमस्कार" },
    "hello": { English: "Hello", Hindi: "नमस्ते", Marathi: "नमस्कार" },
    "धन्यवाद": { English: "Thank you", Hindi: "धन्यवाद", Marathi: "धन्यवाद" },
    "thank you": { English: "Thank you", Hindi: "धन्यवाद", Marathi: "धन्यवाद" },
    "पाणी": { English: "Water", Hindi: "पानी", Marathi: "पाणी" },
    "पानी": { English: "Water", Hindi: "पानी", Marathi: "पाणी" },
    "water": { English: "Water", Hindi: "पानी", Marathi: "पाणी" }
};

function translateText() {
    const input = document.getElementById("translationInput");
    const result = document.getElementById("translationResult");

    if (!input || !result) return;

    const text = input.value.trim().toLowerCase();

    if (text === "") {
        result.textContent = "Please enter some text.";
        return;
    }

    if (translationDictionary[text]) {
        result.textContent = translationDictionary[text].English;
    } else {
        result.textContent = "Translation not available in this demo.";
    }
}

function clearTranslator() {
    const input = document.getElementById("translationInput");
    const result = document.getElementById("translationResult");

    if (input) input.value = "";
    if (result) result.textContent = "";
}
