/* =========================================================
   BORASHA - JAVASCRIPT

   This file contains the interactive features
   used throughout the Borasha website.
   ========================================================= */


/* =========================================================
   TEXT TO SPEECH
   ========================================================= */

/*
   This function makes the browser speak
   the selected word or sentence.

   text = word/sentence to speak
   language = language used for pronunciation
*/

function speakText(text, language = "en-IN") {

    // Check whether browser supports speech.
    if ("speechSynthesis" in window) {

        // Stop previous speech if any.
        window.speechSynthesis.cancel();

        // Create speech object.
        const speech =
            new SpeechSynthesisUtterance(text);

        // Set pronunciation language.
        speech.lang = language;

        // Set speaking speed.
        speech.rate = 0.8;

        // Speak the text.
        window.speechSynthesis.speak(speech);

    } else {

        alert(
            "Speech feature is not supported in this browser."
        );

    }
}


/* =========================================================
   LANGUAGE SELECTION
   ========================================================= */

/*
   Saves the language selected by the user.
*/

function selectLanguage(language) {

    // Save selected language.
    localStorage.setItem(
        "borashaLanguage",
        language
    );

    // Show confirmation.
    alert(language + " selected!");

}


/* =========================================================
   LESSON PROGRESS
   ========================================================= */

/*
   Marks a lesson as completed.

   lessonName = unique name of lesson.
*/

function completeLesson(lessonName) {

    // Get completed lessons.
    let completedLessons =
        JSON.parse(
            localStorage.getItem(
                "borashaCompletedLessons"
            )
        ) || [];


    // Check whether lesson is already completed.
    if (!completedLessons.includes(lessonName)) {

        // Add lesson.
        completedLessons.push(lessonName);

        // Save updated list.
        localStorage.setItem(
            "borashaCompletedLessons",
            JSON.stringify(completedLessons)
        );

    }


    alert("Lesson completed! 🌸");

    // Refresh page.
    location.reload();

}


/* =========================================================
   CHECK LESSON STATUS
   ========================================================= */

/*
   Returns true if lesson is completed.
*/

function isLessonCompleted(lessonName) {

    // Get completed lessons.
    const completedLessons =
        JSON.parse(
            localStorage.getItem(
                "borashaCompletedLessons"
            )
        ) || [];


    // Return true or false.
    return completedLessons.includes(
        lessonName
    );

}


/* =========================================================
   QUIZ SCORE
   ========================================================= */

/*
   Saves quiz score.
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


/* =========================================================
   SPEAKING PRACTICE WORDS
   ========================================================= */

/*
   These are the words and sentences used
   in the Speaking Practice page.

   Each item contains:

   marathi       = Marathi word/sentence
   pronunciation = English pronunciation
   meaning       = English meaning
*/

const speakingPracticeWords = [

    {
        marathi: "नमस्कार",
        pronunciation: "Namaskar",
        meaning: "Hello"
    },

    {
        marathi: "धन्यवाद",
        pronunciation: "Dhanyavaad",
        meaning: "Thank you"
    },

    {
        marathi: "कृपया",
        pronunciation: "Krupaya",
        meaning: "Please"
    },

    {
        marathi: "शुभ सकाळ",
        pronunciation: "Shubh Sakaal",
        meaning: "Good morning"
    },

    {
        marathi: "शुभ रात्री",
        pronunciation: "Shubh Raatri",
        meaning: "Good night"
    },

    {
        marathi: "तुम्ही कसे आहात",
        pronunciation: "Tumhi kase aahat",
        meaning: "How are you?"
    },

    {
        marathi: "मी ठीक आहे",
        pronunciation: "Mi theek aahe",
        meaning: "I am fine"
    },

    {
        marathi: "माझे नाव रिया आहे",
        pronunciation: "Majhe naav Riya aahe",
        meaning: "My name is Riya"
    },

    {
        marathi: "मला पाणी हवे आहे",
        pronunciation: "Mala paani have aahe",
        meaning: "I want water"
    },

    {
        marathi: "आपण नंतर भेटू",
        pronunciation: "Aapan nantar bhetu",
        meaning: "We will meet later"
    }

];


/* =========================================================
   CURRENT SPEAKING PRACTICE NUMBER
   ========================================================= */

let currentPracticeIndex = 0;


/* =========================================================
   LOAD SPEAKING PRACTICE
   ========================================================= */

/*
   Displays the current word/sentence
   on the Speaking Practice page.
*/

function loadSpeakingPractice() {

    // Get page elements.
    const targetWord =
        document.getElementById("targetWord");

    const pronunciation =
        document.getElementById("pronunciation");

    const meaning =
        document.getElementById("meaning");

    const progressText =
        document.getElementById(
            "practiceProgressText"
        );

    const progressFill =
        document.getElementById(
            "practiceProgressFill"
        );

    const speechResult =
        document.getElementById("speechResult");

    const speechFeedback =
        document.getElementById("speechFeedback");


    // Stop if this is not the speaking page.
    if (!targetWord) {
        return;
    }


    // Get current practice item.
    const currentWord =
        speakingPracticeWords[
            currentPracticeIndex
        ];


    // Display Marathi word/sentence.
    targetWord.textContent =
        currentWord.marathi;


    // Display pronunciation.
    pronunciation.textContent =
        currentWord.pronunciation;


    // Display English meaning.
    meaning.textContent =
        currentWord.meaning;


    // Display progress.
    progressText.textContent =
        "Word " +
        (currentPracticeIndex + 1) +
        " of " +
        speakingPracticeWords.length;


    // Calculate progress percentage.
    const percentage =
        ((currentPracticeIndex + 1) /
            speakingPracticeWords.length) * 100;


    // Update progress bar.
    progressFill.style.width =
        percentage + "%";


    // Reset result.
    speechResult.textContent =
        "Your speech will appear here.";


    // Reset feedback.
    speechFeedback.textContent =
        "";

    speechFeedback.className =
        "";

}


/* =========================================================
   LISTEN TO CURRENT WORD
   ========================================================= */

/*
   Speaks the current Marathi word/sentence.
*/

function listenToCurrentWord() {

    const currentWord =
        speakingPracticeWords[
            currentPracticeIndex
        ];


    // Speak Marathi.
    speakText(
        currentWord.marathi,
        "mr-IN"
    );

}


/* =========================================================
   SPEECH RECOGNITION
   ========================================================= */

/*
   Starts microphone speech recognition.

   targetText = word/sentence the user should speak.
*/

function startSpeechRecognition(
    targetText = ""
) {

    // Check browser speech recognition support.
    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    // If browser does not support it.
    if (!SpeechRecognition) {

        alert(
            "Speech recognition is not supported in this browser. Please try Google Chrome."
        );

        return;

    }


    // Create recognition object.
    const recognition =
        new SpeechRecognition();


    // Only listen for one response.
    recognition.continuous = false;


    // Do not show unfinished speech.
    recognition.interimResults = false;


    /*
       Marathi recognition language.

       mr-IN = Marathi (India)
    */

    recognition.lang = "mr-IN";


    // Get output elements.
    const output =
        document.getElementById(
            "speechResult"
        );

    const feedback =
        document.getElementById(
            "speechFeedback"
        );


    // Show listening message.
    if (output) {

        output.textContent =
            "🎤 Listening... Please speak now.";

    }


    // When speech is recognized.
    recognition.onresult =
        function(event) {

            // Get recognized speech.
            const result =
                event.results[0][0]
                    .transcript;


            // Display what user said.
            if (output) {

                output.textContent =
                    "You said: " + result;

            }


            // Compare speech with target.
            if (targetText) {

                checkSpeech(
                    result,
                    targetText
                );

            }

        };


    // Handle recognition errors.
    recognition.onerror =
        function(event) {

            if (output) {

                output.textContent =
                    "Speech could not be recognized.";

            }


            if (feedback) {

                feedback.textContent =
                    "Please try again and speak clearly.";

                feedback.className =
                    "error-message";

            }

        };


    // Start microphone.
    try {

        recognition.start();

    } catch (error) {

        console.log(
            "Speech recognition error:",
            error
        );

    }

}


/* =========================================================
   NORMALIZE SPEECH
   ========================================================= */

/*
   Removes extra spaces and punctuation
   before comparing speech.

   This makes simple speech checking
   more flexible.
*/

function normalizeSpeech(text) {

    return text
        .trim()
        .toLowerCase()
        .replace(/[।,!?؟]/g, "")
        .replace(/\s+/g, " ");

}


/* =========================================================
   CHECK SPEECH
   ========================================================= */

/*
   Compares what the user said with
   the target word/sentence.

   This is simple text comparison.
   It is NOT professional pronunciation scoring.
*/

function checkSpeech(
    spokenText,
    targetText
) {

    // Normalize both texts.
    const spoken =
        normalizeSpeech(
            spokenText
        );

    const target =
        normalizeSpeech(
            targetText
        );


    // Find feedback area.
    const feedback =
        document.getElementById(
            "speechFeedback"
        );


    // Stop if feedback element doesn't exist.
    if (!feedback) {
        return;
    }


    // Check whether both are same.
    if (spoken === target) {

        feedback.textContent =
            "✓ Excellent! Your answer matched the target.";

        feedback.className =
            "success-message";

    } else {

        feedback.textContent =
            "Try again! Listen carefully and speak the same word.";

        feedback.className =
            "error-message";

    }

}


/* =========================================================
   NEXT SPEAKING WORD
   ========================================================= */

/*
   Moves to the next practice word.
*/

function nextSpeakingWord() {

    // Move to next item.
    currentPracticeIndex++;


    // If all words are completed.
    if (
        currentPracticeIndex >=
        speakingPracticeWords.length
    ) {

        currentPracticeIndex = 0;

        alert(
            "🎉 Great job! You completed all 10 speaking practices."
        );

    }


    // Load new word.
    loadSpeakingPractice();

}


/* =========================================================
   RESET CURRENT SPEAKING PRACTICE
   ========================================================= */

/*
   Resets the result and feedback
   for the current word.
*/

function resetSpeakingPractice() {

    const output =
        document.getElementById(
            "speechResult"
        );

    const feedback =
        document.getElementById(
            "speechFeedback"
        );


    if (output) {

        output.textContent =
            "Your speech will appear here.";

    }


    if (feedback) {

        feedback.textContent =
            "";

        feedback.className =
            "";

    }

}


/* =========================================================
   SPEAKING PAGE BUTTONS
   ========================================================= */

/*
   These events are added after the page loads.
*/

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // Load speaking page if it exists.
        if (
            document.getElementById(
                "targetWord"
            )
        ) {

            loadSpeakingPractice();


            // Listen button.
            const listenButton =
                document.getElementById(
                    "listenButton"
                );


            if (listenButton) {

                listenButton.addEventListener(
                    "click",
                    listenToCurrentWord
                );

            }


            // Speak button.
            const speakButton =
                document.getElementById(
                    "speakButton"
                );


            if (speakButton) {

                speakButton.addEventListener(
                    "click",
                    function() {

                        const currentWord =
                            speakingPracticeWords[
                                currentPracticeIndex
                            ];


                        startSpeechRecognition(
                            currentWord.marathi
                        );

                    }
                );

            }


            // Next button.
            const nextButton =
                document.getElementById(
                    "nextButton"
                );


            if (nextButton) {

                nextButton.addEventListener(
                    "click",
                    nextSpeakingWord
                );

            }


            // Try again button.
            const tryButton =
                document.getElementById(
                    "tryButton"
                );


            if (tryButton) {

                tryButton.addEventListener(
                    "click",
                    resetSpeakingPractice
                );

            }

        }

    }
);


/* =========================================================
   IMAGE PREVIEW
   ========================================================= */

/*
   Displays an image selected by the user.

   This prepares the frontend for
   the future OCR feature.
*/

function previewImage(event) {

    const image =
        document.getElementById(
            "imagePreview"
        );


    if (!image) {
        return;
    }


    // Get selected file.
    const file =
        event.target.files[0];


    if (!file) {
        return;
    }


    // Create temporary image URL.
    image.src =
        URL.createObjectURL(file);


    // Display image.
    image.style.display =
        "block";

}


/* =========================================================
   SIMPLE TRANSLATION DICTIONARY
   ========================================================= */

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


/* =========================================================
   TRANSLATE FUNCTION
   ========================================================= */

function translateText() {

    // Get input.
    const input =
        document.getElementById(
            "translationInput"
        );


    // Get result.
    const result =
        document.getElementById(
            "translationResult"
        );


    if (!input || !result) {
        return;
    }


    // Get entered text.
    const text =
        input.value
            .trim()
            .toLowerCase();


    // Check empty input.
    if (text === "") {

        result.textContent =
            "Please enter some text.";

        return;

    }


    // Search dictionary.
    if (
        translationDictionary[text]
    ) {

        // Display English translation.
        result.textContent =
            translationDictionary[
                text
            ].English;

    } else {

        result.textContent =
            "Translation for this word is not available in the current demo.";

    }

}


/* =========================================================
   CLEAR TRANSLATOR
   ========================================================= */

function clearTranslator() {

    const input =
        document.getElementById(
            "translationInput"
        );


    const result =
        document.getElementById(
            "translationResult"
        );


    if (input) {

        input.value = "";

    }


    if (result) {

        result.textContent = "";

    }

}


/* =========================================================
   END OF BORASHA JAVASCRIPT
   ========================================================= */
