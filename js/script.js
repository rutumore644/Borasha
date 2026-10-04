/* =========================================================
   BORASHA - JAVASCRIPT
   This file contains the interactive features of the website.
   ========================================================= */


/* ================= TEXT TO SPEECH ================= */

/*
   This function uses the browser's speech synthesis feature.

   text = the word/sentence that should be spoken.
*/
function speakText(text, language = "en-IN") {

    // Check whether the browser supports speech synthesis.
    if ("speechSynthesis" in window) {

        // Create a new speech object.
        const speech = new SpeechSynthesisUtterance(text);

        // Set the language used for pronunciation.
        speech.lang = language;

        // Speak the text.
        window.speechSynthesis.speak(speech);

    } else {

        // Show a message if the browser does not support it.
        alert("Speech feature is not supported in this browser.");

    }
}


/* ================= LANGUAGE SELECTION ================= */

/*
   This function stores the language selected by the user.

   localStorage allows the browser to remember the selection.
*/
function selectLanguage(language) {

    // Save selected language.
    localStorage.setItem("borashaLanguage", language);

    // Show confirmation.
    alert(language + " selected!");

}


/* ================= LESSON PROGRESS ================= */

/*
   This function marks a lesson as completed.

   lessonName = unique name of the lesson.
*/
function completeLesson(lessonName) {

    // Get already completed lessons.
    let completedLessons =
        JSON.parse(localStorage.getItem("borashaCompletedLessons")) || [];

    // Check if the lesson is already completed.
    if (!completedLessons.includes(lessonName)) {

        // Add the new lesson.
        completedLessons.push(lessonName);

        // Save the updated list.
        localStorage.setItem(
            "borashaCompletedLessons",
            JSON.stringify(completedLessons)
        );

    }

    alert("Lesson completed! 🌸");

    // Refresh the page.
    location.reload();
}


/* ================= CHECK LESSON STATUS ================= */

/*
   This function checks whether a particular lesson
   has already been completed.
*/
function isLessonCompleted(lessonName) {

    // Get completed lessons.
    const completedLessons =
        JSON.parse(localStorage.getItem("borashaCompletedLessons")) || [];

    // Return true or false.
    return completedLessons.includes(lessonName);
}


/* ================= QUIZ SCORE ================= */

/*
   Save quiz score in localStorage.
*/
function saveQuizScore(score, total) {

    localStorage.setItem(
        "borashaQuizScore",
        JSON.stringify({
            score: score,
            total: total
        })
    );

}


/* ================= SPEECH RECOGNITION ================= */

/*
   This function starts microphone-based speech recognition.

   Browser support can vary.
*/
function startSpeechRecognition(targetText = "") {

    // Find the browser's speech recognition feature.
    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    // Check browser support.
    if (!SpeechRecognition) {

        alert(
            "Speech recognition is not supported in this browser."
        );

        return;

    }

    // Create recognition object.
    const recognition = new SpeechRecognition();

    // Keep only one result.
    recognition.continuous = false;

    // Return final recognized text.
    recognition.interimResults = false;

    // Use Indian English as the default recognition language.
    recognition.lang = "en-IN";


    // When the user finishes speaking.
    recognition.onresult = function (event) {

        // Get recognized speech.
        const result =
            event.results[0][0].transcript;

        // Display result.
        const output =
            document.getElementById("speechResult");

        if (output) {

            output.textContent =
                "You said: " + result;

        }

        // If a target word exists, compare it.
        if (targetText) {

            checkSpeech(result, targetText);

        }

    };


    // If an error happens.
    recognition.onerror = function () {

        alert(
            "We could not recognize your speech. Please try again."
        );

    };


    // Start microphone.
    recognition.start();

}


/* ================= SPEECH CHECK ================= */

/*
   This performs a simple text comparison.

   It is NOT professional pronunciation scoring.
*/
function checkSpeech(spokenText, targetText) {

    // Convert both strings to lowercase.
    const spoken =
        spokenText.trim().toLowerCase();

    const target =
        targetText.trim().toLowerCase();

    const feedback =
        document.getElementById("speechFeedback");

    if (!feedback) {
        return;
    }


    if (spoken === target) {

        feedback.textContent =
            "✓ Good! Your answer matched the target.";

        feedback.className =
            "success-message";

    } else {

        feedback.textContent =
            "Try again! Listen to the word and speak again.";

        feedback.className =
            "error-message";

    }

}


/* ================= IMAGE PREVIEW ================= */

/*
   This function displays an image selected by the user.

   It prepares the frontend for the future OCR feature.
*/
function previewImage(event) {

    const image =
        document.getElementById("imagePreview");

    if (!image) {
        return;
    }

    // Get the selected image file.
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    // Create a temporary URL for the selected image.
    image.src = URL.createObjectURL(file);

    // Make the image visible.
    image.style.display = "block";

}


/* ================= SIMPLE TRANSLATION ================= */

/*
   This is a small educational dictionary.

   It is NOT a complete translation engine.
*/
const translationDictionary = {

    "नमस्कार": {
        English: "Hello",
        Hindi: "नमस्ते",
        Marathi: "नमस्कार"
    },

    "hello": {
        English: "Hello",
        Hindi: "नमस्ते",
        Marathi: "नमस्कार"
    },

    "धन्यवाद": {
        English: "Thank you",
        Hindi: "धन्यवाद",
        Marathi: "धन्यवाद"
    },

    "thank you": {
        English: "Thank you",
        Hindi: "धन्यवाद",
        Marathi: "धन्यवाद"
    },

    "पाणी": {
        English: "Water",
        Hindi: "पानी",
        Marathi: "पाणी"
    },

    "पानी": {
        English: "Water",
        Hindi: "पानी",
        Marathi: "पाणी"
    },

    "water": {
        English: "Water",
        Hindi: "पानी",
        Marathi: "पाणी"
    }

};


/* ================= TRANSLATE FUNCTION ================= */

function translateText() {

    // Get input text.
    const input =
        document.getElementById("translationInput");

    // Get result area.
    const result =
        document.getElementById("translationResult");

    if (!input || !result) {
        return;
    }

    // Convert input to lowercase for searching.
    const text =
        input.value.trim().toLowerCase();

    if (text === "") {

        result.textContent =
            "Please enter some text.";

        return;
    }


    // Search dictionary.
    if (translationDictionary[text]) {

        // For the simple demo, display English meaning.
        result.textContent =
            translationDictionary[text].English;

    } else {

        result.textContent =
            "Translation for this word is not available in the current demo.";

    }

}


/* ================= CLEAR TRANSLATOR ================= */

function clearTranslator() {

    const input =
        document.getElementById("translationInput");

    const result =
        document.getElementById("translationResult");


    if (input) {
        input.value = "";
    }


    if (result) {
        result.textContent = "";
    }

}
