/* =========================================================
   BORASHA LESSON DATA

   This file contains the words and sentences
   used in each lesson.
   ========================================================= */


/* ================= LESSON INFORMATION ================= */

const lessons = {

    greetings: {

        title: "👋 Lesson 01 – Greetings",

        description:
            "Learn simple greetings and polite expressions.",

        words: [

            {
                marathi: "नमस्कार",
                hindi: "नमस्ते",
                english: "Hello"
            },

            {
                marathi: "शुभ सकाळ",
                hindi: "सुप्रभात",
                english: "Good morning"
            },

            {
                marathi: "शुभ रात्री",
                hindi: "शुभ रात्रि",
                english: "Good night"
            },

            {
                marathi: "धन्यवाद",
                hindi: "धन्यवाद",
                english: "Thank you"
            },

            {
                marathi: "कृपया",
                hindi: "कृपया",
                english: "Please"
            },

            {
                marathi: "माफ करा",
                hindi: "माफ कीजिए",
                english: "Sorry"
            }

        ],

        sentences: [

            {
                marathi: "तुम्ही कसे आहात?",
                hindi: "आप कैसे हैं?",
                english: "How are you?"
            },

            {
                marathi: "मी ठीक आहे.",
                hindi: "मैं ठीक हूँ।",
                english: "I am fine."
            },

            {
                marathi: "तुम्हाला भेटून आनंद झाला.",
                hindi: "आपसे मिलकर खुशी हुई।",
                english: "Nice to meet you."
            }

        ],

        question:
            "What is the English meaning of 'नमस्कार'?",

        answers: [
            "Good night",
            "Hello",
            "Thank you",
            "Sorry"
        ],

        correct: "Hello"

    },


    introduction: {

        title: "🙋 Lesson 02 – Introduction",

        description:
            "Learn how to introduce yourself.",

        words: [

            {
                marathi: "नाव",
                hindi: "नाम",
                english: "Name"
            },

            {
                marathi: "विद्यार्थी",
                hindi: "विद्यार्थी",
                english: "Student"
            },

            {
                marathi: "महाविद्यालय",
                hindi: "कॉलेज",
                english: "College"
            },

            {
                marathi: "मित्र",
                hindi: "दोस्त",
                english: "Friend"
            },

            {
                marathi: "शहर",
                hindi: "शहर",
                english: "City"
            },

            {
                marathi: "राहणे",
                hindi: "रहना",
                english: "Live"
            }

        ],

        sentences: [

            {
                marathi: "माझे नाव रिया आहे.",
                hindi: "मेरा नाम रिया है।",
                english: "My name is Riya."
            },

            {
                marathi: "मी विद्यार्थी आहे.",
                hindi: "मैं विद्यार्थी हूँ।",
                english: "I am a student."
            },

            {
                marathi: "मी महाविद्यालयात शिकते.",
                hindi: "मैं कॉलेज में पढ़ती हूँ।",
                english: "I study in college."
            }

        ],

        question:
            "What does 'विद्यार्थी' mean in English?",

        answers: [
            "Teacher",
            "Friend",
            "Student",
            "City"
        ],

        correct: "Student"

    },


    family: {

        title: "👨‍👩‍👧 Lesson 03 – Family",

        description:
            "Learn common words related to family members.",

        words: [

            {
                marathi: "आई",
                hindi: "माँ",
                english: "Mother"
            },

            {
                marathi: "वडील",
                hindi: "पिता",
                english: "Father"
            },

            {
                marathi: "भाऊ",
                hindi: "भाई",
                english: "Brother"
            },

            {
                marathi: "बहीण",
                hindi: "बहन",
                english: "Sister"
            },

            {
                marathi: "आजोबा",
                hindi: "दादा / नाना",
                english: "Grandfather"
            },

            {
                marathi: "आजी",
                hindi: "दादी / नानी",
                english: "Grandmother"
            }

        ],

        sentences: [

            {
                marathi: "ही माझी आई आहे.",
                hindi: "यह मेरी माँ है।",
                english: "This is my mother."
            },

            {
                marathi: "हा माझा भाऊ आहे.",
                hindi: "यह मेरा भाई है।",
                english: "This is my brother."
            },

            {
                marathi: "माझे कुटुंब मोठे आहे.",
                hindi: "मेरा परिवार बड़ा है।",
                english: "My family is big."
            }

        ],

        question:
            "What is 'आई' in English?",

        answers: [
            "Mother",
            "Sister",
            "Father",
            "Brother"
        ],

        correct: "Mother"

    },


    numbers: {

        title: "🔢 Lesson 04 – Numbers",

        description:
            "Learn common numbers and counting.",

        words: [

            {
                marathi: "एक",
                hindi: "एक",
                english: "One"
            },

            {
                marathi: "दोन",
                hindi: "दो",
                english: "Two"
            },

            {
                marathi: "तीन",
                hindi: "तीन",
                english: "Three"
            },

            {
                marathi: "चार",
                hindi: "चार",
                english: "Four"
            },

            {
                marathi: "पाच",
                hindi: "पाँच",
                english: "Five"
            },

            {
                marathi: "दहा",
                hindi: "दस",
                english: "Ten"
            }

        ],

        sentences: [

            {
                marathi: "माझ्याकडे दोन पुस्तके आहेत.",
                hindi: "मेरे पास दो किताबें हैं।",
                english: "I have two books."
            },

            {
                marathi: "मला पाच आंबे हवे आहेत.",
                hindi: "मुझे पाँच आम चाहिए।",
                english: "I want five mangoes."
            },

            {
                marathi: "माझ्याकडे दहा रुपये आहेत.",
                hindi: "मेरे पास दस रुपये हैं।",
                english: "I have ten rupees."
            }

        ],

        question:
            "What is the English meaning of 'पाच'?",

        answers: [
            "Three",
            "Four",
            "Five",
            "Ten"
        ],

        correct: "Five"

    },


    food: {

        title: "🍚 Lesson 05 – Food",

        description:
            "Learn common food and drink vocabulary.",

        words: [

            {
                marathi: "पाणी",
                hindi: "पानी",
                english: "Water"
            },

            {
                marathi: "भात",
                hindi: "चावल",
                english: "Rice"
            },

            {
                marathi: "पोळी",
                hindi: "रोटी",
                english: "Roti"
            },

            {
                marathi: "भाजी",
                hindi: "सब्जी",
                english: "Vegetable"
            },

            {
                marathi: "दूध",
                hindi: "दूध",
                english: "Milk"
            },

            {
                marathi: "चहा",
                hindi: "चाय",
                english: "Tea"
            }

        ],

        sentences: [

            {
                marathi: "मला पाणी हवे आहे.",
                hindi: "मुझे पानी चाहिए।",
                english: "I want water."
            },

            {
                marathi: "मला चहा आवडतो.",
                hindi: "मुझे चाय पसंद है।",
                english: "I like tea."
            },

            {
                marathi: "जेवण तयार आहे.",
                hindi: "खाना तैयार है।",
                english: "The food is ready."
            }

        ],

        question:
            "What is 'पाणी' in English?",

        answers: [
            "Milk",
            "Water",
            "Tea",
            "Rice"
        ],

        correct: "Water"

    },


    daily: {

        title: "💬 Lesson 06 – Daily Conversation",

        description:
            "Practice simple everyday sentences.",

        words: [

            {
                marathi: "हो",
                hindi: "हाँ",
                english: "Yes"
            },

            {
                marathi: "नाही",
                hindi: "नहीं",
                english: "No"
            },

            {
                marathi: "आज",
                hindi: "आज",
                english: "Today"
            },

            {
                marathi: "उद्या",
                hindi: "कल",
                english: "Tomorrow"
            },

            {
                marathi: "आता",
                hindi: "अभी",
                english: "Now"
            },

            {
                marathi: "नंतर",
                hindi: "बाद में",
                english: "Later"
            }

        ],

        sentences: [

            {
                marathi: "तुम्ही कुठे जात आहात?",
                hindi: "आप कहाँ जा रहे हैं?",
                english: "Where are you going?"
            },

            {
                marathi: "मी महाविद्यालयात जात आहे.",
                hindi: "मैं कॉलेज जा रही हूँ।",
                english: "I am going to college."
            },

            {
                marathi: "आपण नंतर भेटू.",
                hindi: "हम बाद में मिलेंगे।",
                english: "We will meet later."
            }

        ],

        question:
            "What is the English meaning of 'आता'?",

        answers: [
            "Today",
            "Tomorrow",
            "Now",
            "Later"
        ],

        correct: "Now"

    }

};


/* ================= GET CURRENT LESSON ================= */

/*
   The lesson name comes from the URL.

   Example:
   lesson.html?lesson=greetings
*/

const urlParameters =
    new URLSearchParams(window.location.search);

const lessonName =
    urlParameters.get("lesson") || "greetings";


/* Find the selected lesson */

const currentLesson =
    lessons[lessonName];


/* ================= DISPLAY LESSON ================= */

if (currentLesson) {

    document.getElementById("lessonTitle").textContent =
        currentLesson.title;

    document.getElementById("lessonDescription").textContent =
        currentLesson.description;


    /* ================= DISPLAY WORDS ================= */

    const wordList =
        document.getElementById("wordList");

    currentLesson.words.forEach(function(word) {

        const wordCard =
            document.createElement("div");

        wordCard.className = "word-card";

        wordCard.innerHTML = `

            <div class="word-content">

                <h3>${word.marathi}</h3>

                <p>
                    Hindi: ${word.hindi}
                </p>

                <p>
                    English: ${word.english}
                </p>

            </div>

            <button
                class="listen-button"
                onclick="speakText('${word.marathi}', 'mr-IN')">

                🔊 Listen

            </button>

        `;

        wordList.appendChild(wordCard);

    });


    /* ================= DISPLAY SENTENCES ================= */

    const sentenceList =
        document.getElementById("sentenceList");

    currentLesson.sentences.forEach(function(sentence) {

        const sentenceCard =
            document.createElement("div");

        sentenceCard.className =
            "sentence-card";

        sentenceCard.innerHTML = `

            <h3>
                ${sentence.marathi}
            </h3>

            <p>
                Hindi: ${sentence.hindi}
            </p>

            <p>
                English: ${sentence.english}
            </p>

            <button
                class="listen-button"
                onclick="speakText('${sentence.marathi}', 'mr-IN')">

                🔊 Listen

            </button>

        `;

        sentenceList.appendChild(sentenceCard);

    });


    /* ================= DISPLAY QUESTION ================= */

    document.getElementById("questionText").textContent =
        currentLesson.question;


    const answerButtons =
        document.getElementById("answerButtons");


    currentLesson.answers.forEach(function(answer) {

        const button =
            document.createElement("button");

        button.textContent = answer;

        button.className = "answer-button";

        button.onclick = function() {

            checkAnswer(
                answer,
                currentLesson.correct
            );

        };

        answerButtons.appendChild(button);

    });

}


/* ================= CHECK ANSWER ================= */

function checkAnswer(answer, correctAnswer) {

    const result =
        document.getElementById("practiceResult");


    if (answer === correctAnswer) {

        result.textContent =
            "✓ Correct! Great job! 🌸";

        result.className =
            "practice-result correct";

    } else {

        result.textContent =
            "✗ Not quite. Try again!";

        result.className =
            "practice-result wrong";

    }

}


/* ================= COMPLETE LESSON ================= */

function finishLesson() {

    let completedLessons =
        JSON.parse(
            localStorage.getItem(
                "borashaCompletedLessons"
            )
        ) || [];


    if (!completedLessons.includes(lessonName)) {

        completedLessons.push(lessonName);

        localStorage.setItem(
            "borashaCompletedLessons",
            JSON.stringify(completedLessons)
        );

    }


    document.getElementById(
        "completionMessage"
    ).textContent =
        "✓ Lesson completed! Your progress has been saved. 🌸";

}
