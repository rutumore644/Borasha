// Borasha app JavaScript

const lessonData = {
    greetings: {
        title: 'Greetings',
        description: 'Learn basic greetings and polite phrases for everyday conversations.',
        words: [
            { marathi: 'नमस्कार', hindi: 'नमस्ते', english: 'Hello' },
            { marathi: 'शुभ सकाळ', hindi: 'शुभ सुबह', english: 'Good morning' },
            { marathi: 'शुभ रात्री', hindi: 'शुभ रात्रि', english: 'Good night' },
            { marathi: 'धन्यवाद', hindi: 'धन्यवाद', english: 'Thank you' }
        ],
        sentences: [
            { marathi: 'नमस्कार, तुम्ही कसे आहात?', hindi: 'नमस्ते, आप कैसे हैं?', english: 'Hello, how are you?' },
            { marathi: 'तुमचं नाव काय?', hindi: 'आपका नाम क्या है?', english: 'What is your name?' }
        ],
        question: 'Which word means “Hello”?',
        options: ['नमस्कार', 'पाणी', 'रात्री', 'कृपया'],
        answer: 'नमस्कार'
    },
    introduction: {
        title: 'Introduction',
        description: 'Learn how to introduce yourself in Marathi, Hindi and English.',
        words: [
            { marathi: 'मी', hindi: 'मैं', english: 'I' },
            { marathi: 'माझं नाव', hindi: 'मेरा नाम', english: 'My name' },
            { marathi: 'तुम्ही', hindi: 'आप', english: 'You' },
            { marathi: 'आहे', hindi: 'है', english: 'is' }
        ],
        sentences: [
            { marathi: 'माझं नाव रिया आहे.', hindi: 'मेरा नाम रिया है।', english: 'My name is Riya.' },
            { marathi: 'मी विद्यार्थिनी आहे.', hindi: 'मैं एक छात्रा हूँ।', english: 'I am a student.' }
        ],
        question: 'Which phrase means “My name is Riya”?',
        options: ['माझं नाव रिया आहे', 'माझं नाव पाणी आहे', 'मी पाणी आहे', 'तुम्ही रिया'],
        answer: 'माझं नाव रिया आहे'
    },
    family: {
        title: 'Family',
        description: 'Learn basic family words and common family-related expressions.',
        words: [
            { marathi: 'आई', hindi: 'माँ', english: 'Mother' },
            { marathi: 'वडील', hindi: 'पिता', english: 'Father' },
            { marathi: 'भाऊ', hindi: 'भाई', english: 'Brother' },
            { marathi: 'बहिण', hindi: 'बहन', english: 'Sister' }
        ],
        sentences: [
            { marathi: 'माझी आई खूप चांगली आहे.', hindi: 'मेरी माँ बहुत अच्छी हैं।', english: 'My mother is very kind.' },
            { marathi: 'आपल्या कुटुंबात चार लोक आहेत.', hindi: 'हमारे परिवार में चार लोग हैं।', english: 'There are four people in our family.' }
        ],
        question: 'Which word means “Mother”?',
        options: ['आई', 'भाऊ', 'पाणी', 'नमस्कार'],
        answer: 'आई'
    },
    numbers: {
        title: 'Numbers',
        description: 'Learn basic counting in Marathi, Hindi and English.',
        words: [
            { marathi: 'एक', hindi: 'एक', english: 'One' },
            { marathi: 'दोन', hindi: 'दो', english: 'Two' },
            { marathi: 'तीन', hindi: 'तीन', english: 'Three' },
            { marathi: 'चार', hindi: 'चार', english: 'Four' }
        ],
        sentences: [
            { marathi: 'एका जणाला एक बिस्किट द्या.', hindi: 'एक व्यक्ति को एक बिस्कुट दीजिए।', english: 'Give one biscuit to one person.' },
            { marathi: 'दोन पुस्तकं माझ्याकडे आहेत.', hindi: 'मेरे पास दो किताबें हैं।', english: 'I have two books.' }
        ],
        question: 'Which word means “Two”?',
        options: ['एक', 'दोन', 'चार', 'नमस्कार'],
        answer: 'दोन'
    },
    food: {
        title: 'Food',
        description: 'Learn useful words for everyday meals and drinks.',
        words: [
            { marathi: 'पाणी', hindi: 'पानी', english: 'Water' },
            { marathi: 'भात', hindi: 'चावल', english: 'Rice' },
            { marathi: 'रोटी', hindi: 'रोटी', english: 'Bread' },
            { marathi: 'दूध', hindi: 'दूध', english: 'Milk' }
        ],
        sentences: [
            { marathi: 'मला पाणी हवे आहे.', hindi: 'मुझे पानी चाहिए।', english: 'I want water.' },
            { marathi: 'तुम्हाला दूध हवे आहे का?', hindi: 'क्या आपको दूध चाहिए?', english: 'Do you want milk?' }
        ],
        question: 'Which word means “Water”?',
        options: ['दूध', 'पाणी', 'भात', 'रोटी'],
        answer: 'पाणी'
    },
    daily: {
        title: 'Daily Conversation',
        description: 'Learn simple and practical phrases for everyday communication.',
        words: [
            { marathi: 'कृपया', hindi: 'कृपया', english: 'Please' },
            { marathi: 'मला माफ करा', hindi: 'मुझे माफ कीजिए', english: 'Sorry' },
            { marathi: 'मी ठीक आहे', hindi: 'मैं ठीक हूँ', english: 'I am fine' },
            { marathi: 'नंतर भेटू', hindi: 'बाद में मिलते हैं', english: 'See you later' }
        ],
        sentences: [
            { marathi: 'कृपया थोडं हळू बोला.', hindi: 'कृपया थोड़ा धीरे बोलें।', english: 'Please speak a little slowly.' },
            { marathi: 'नंतर भेटू.', hindi: 'बाद में मिलते हैं।', english: 'See you later.' }
        ],
        question: 'Which phrase means “Please”?',
        options: ['कृपया', 'नंतर', 'अच्छा', 'माझं'],
        answer: 'कृपया'
    }
};

const speakingPracticeWords = [
    { marathi: 'नमस्कार', pronunciation: 'Namaskar', meaning: 'Hello' },
    { marathi: 'धन्यवाद', pronunciation: 'Dhanyavaad', meaning: 'Thank you' },
    { marathi: 'कृपया', pronunciation: 'Krupaya', meaning: 'Please' },
    { marathi: 'शुभ सकाळ', pronunciation: 'Shubh Sakaal', meaning: 'Good morning' },
    { marathi: 'शुभ रात्री', pronunciation: 'Shubh Raatri', meaning: 'Good night' },
    { marathi: 'तुम्ही कसे आहात', pronunciation: 'Tumhi kase aahat', meaning: 'How are you?' },
    { marathi: 'मी ठीक आहे', pronunciation: 'Mi theek aahe', meaning: 'I am fine' },
    { marathi: 'मला पाणी हवे आहे', pronunciation: 'Mala paani have aahe', meaning: 'I want water' },
    { marathi: 'माझे नाव रिया आहे', pronunciation: 'Majhe naav Riya aahe', meaning: 'My name is Riya' },
    { marathi: 'आपण नंतर भेटू', pronunciation: 'Aapan nantar bhetu', meaning: 'We will meet later' }
];

const quizQuestions = [
    { question: 'What does “नमस्कार” mean?', options: ['Hello', 'Water', 'Thank you', 'Food'], answer: 'Hello' },
    { question: 'What does “धन्यवाद” mean?', options: ['Please', 'Thank you', 'Good morning', 'Family'], answer: 'Thank you' },
    { question: 'Which word means “Water”?', options: ['पाणी', 'भाऊ', 'आई', 'कृपया'], answer: 'पाणी' },
    { question: 'What is “Good morning” in Marathi?', options: ['शुभ रात्रि', 'शुभ सकाळ', 'कृपया', 'नमस्कार'], answer: 'शुभ सकाळ' },
    { question: 'Which word means “Please”?', options: ['धन्यवाद', 'कृपया', 'दूध', 'रोटी'], answer: 'कृपया' }
];

let currentPracticeIndex = 0;
let quizIndex = 0;
let quizScore = 0;

function speakText(text, language = 'en-IN') {
    if (!('speechSynthesis' in window)) {
        alert('Speech is not supported in this browser.');
        return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

function selectLanguage(language) {
    localStorage.setItem('borashaLanguage', language);
    alert(language + ' selected!');
}

function completeLesson(lessonName) {
    const lessons = JSON.parse(localStorage.getItem('borashaCompletedLessons') || '[]');

    if (!lessons.includes(lessonName)) {
        lessons.push(lessonName);
        localStorage.setItem('borashaCompletedLessons', JSON.stringify(lessons));
    }

    const messageEl = document.getElementById('completion-message');
    if (messageEl) {
        messageEl.textContent = 'Lesson saved successfully.';
    }
}

function finishLesson() {
    const params = new URLSearchParams(window.location.search);
    const lesson = params.get('lesson');
    if (lesson) completeLesson(lesson);
}

function isLessonCompleted(lessonName) {
    const lessons = JSON.parse(localStorage.getItem('borashaCompletedLessons') || '[]');
    return lessons.includes(lessonName);
}

function saveQuizScore(score, total) {
    localStorage.setItem('borashaQuizScore', JSON.stringify({ score, total }));
}

function loadLessonContent() {
    const params = new URLSearchParams(window.location.search);
    const lesson = params.get('lesson') || 'greetings';
    const config = lessonData[lesson];

    const title = document.getElementById('lesson-title');
    const description = document.getElementById('lesson-description');
    const wordList = document.getElementById('word-list');
    const sentenceList = document.getElementById('sentence-list');
    const questionText = document.getElementById('question-text');
    const answerButtons = document.getElementById('answer-buttons');

    if (!config) return;

    if (title) title.textContent = config.title;
    if (description) description.textContent = config.description;

    if (wordList) {
        wordList.innerHTML = config.words.map(word => `
            <div class="word-item">
                <div class="marathi">${word.marathi}</div>
                <p class="meta">Hindi: ${word.hindi}</p>
                <p class="meta">English: ${word.english}</p>
                <button class="btn btn-secondary" onclick="speakText('${word.marathi}', 'mr-IN')">🔊 Listen</button>
            </div>
        `).join('');
    }

    if (sentenceList) {
        sentenceList.innerHTML = config.sentences.map(sentence => `
            <div class="sentence-item">
                <p><strong>${sentence.marathi}</strong></p>
                <p>Hindi: ${sentence.hindi}</p>
                <p>English: ${sentence.english}</p>
            </div>
        `).join('');
    }

    if (questionText) questionText.textContent = config.question;

    if (answerButtons) {
        answerButtons.innerHTML = config.options.map(option => `
            <button class="answer-btn" data-answer="${option}">${option}</button>
        `).join('');

        answerButtons.querySelectorAll('.answer-btn').forEach(button => {
            button.addEventListener('click', function () {
                const result = document.getElementById('practice-result');
                const selected = this.dataset.answer;

                if (selected === config.answer) {
                    result.textContent = 'Correct!';
                    result.className = 'practice-result success';
                } else {
                    result.textContent = 'Try again. Correct answer: ' + config.answer;
                    result.className = 'practice-result error';
                }
            });
        });
    }
}

function loadSpeakingPractice() {
    const targetWord = document.getElementById('targetWord');
    const pronunciation = document.getElementById('pronunciation');
    const meaning = document.getElementById('meaning');
    const progressText = document.getElementById('practiceProgressText');
    const progressFill = document.getElementById('practiceProgressFill');
    const speechResult = document.getElementById('speechResult');
    const speechFeedback = document.getElementById('speechFeedback');

    if (!targetWord) return;

    const currentWord = speakingPracticeWords[currentPracticeIndex];
    targetWord.textContent = currentWord.marathi;
    pronunciation.textContent = currentWord.pronunciation;
    meaning.textContent = currentWord.meaning;

    progressText.textContent = 'Word ' + (currentPracticeIndex + 1) + ' of ' + speakingPracticeWords.length;
    const percent = ((currentPracticeIndex + 1) / speakingPracticeWords.length) * 100;
    progressFill.style.width = percent + '%';

    if (speechResult) speechResult.textContent = 'Your speech will appear here.';
    if (speechFeedback) {
        speechFeedback.textContent = '';
        speechFeedback.className = 'feedback-message';
    }
}

function listenToCurrentWord() {
    const currentWord = speakingPracticeWords[currentPracticeIndex];
    speakText(currentWord.marathi, 'mr-IN');
}

function normalizeSpeech(value) {
    return value.trim().toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ');
}

function startSpeechRecognition(targetText = '') {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert('Speech recognition is not supported in this browser.');
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'mr-IN';

    const output = document.getElementById('speechResult');
    const feedback = document.getElementById('speechFeedback');

    if (output) output.textContent = 'Listening... Please speak now.';

    recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;
        if (output) output.textContent = 'You said: ' + result;

        if (targetText) {
            const spoken = normalizeSpeech(result);
            const expected = normalizeSpeech(targetText);

            if (spoken === expected) {
                if (feedback) {
                    feedback.textContent = 'Excellent! Your answer matched.';
                    feedback.className = 'feedback-message success';
                }
            } else {
                if (feedback) {
                    feedback.textContent = 'Try again. Listen carefully and speak the same word.';
                    feedback.className = 'feedback-message error';
                }
            }
        }
    };

    recognition.onerror = function () {
        if (output) output.textContent = 'Speech could not be recognized.';
        if (feedback) {
            feedback.textContent = 'Please try again and speak clearly.';
            feedback.className = 'feedback-message error';
        }
    };

    try {
        recognition.start();
    } catch (error) {
        console.log('Speech recognition error:', error);
    }
}

function nextSpeakingWord() {
    currentPracticeIndex += 1;

    if (currentPracticeIndex >= speakingPracticeWords.length) {
        currentPracticeIndex = 0;
        alert('Great job! You completed all practice words.');
    }

    loadSpeakingPractice();
}

function resetPractice() {
    const output = document.getElementById('speechResult');
    const feedback = document.getElementById('speechFeedback');
    if (output) output.textContent = 'Your speech will appear here.';
    if (feedback) {
        feedback.textContent = '';
        feedback.className = 'feedback-message';
    }
}

function showImagePreview(file) {
    const previewBox = document.getElementById('imagePreviewBox');
    const preview = document.getElementById('imagePreview');
    const status = document.getElementById('imageStatus');

    if (!file || !previewBox || !preview) return;

    if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        preview.src = event.target.result;
        previewBox.hidden = false;

        if (status) {
            status.textContent = 'Image selected. You can use it as a reference for the text you want to translate.';
        }
    };

    reader.readAsDataURL(file);
}

function closeCamera() {
    const box = document.getElementById('cameraBox');
    const video = document.getElementById('cameraVideo');

    if (window.borashaCameraStream) {
        window.borashaCameraStream.getTracks().forEach(track => track.stop());
        window.borashaCameraStream = null;
    }

    if (video) video.srcObject = null;
    if (box) box.hidden = true;
}

async function openCamera() {
    const box = document.getElementById('cameraBox');
    const video = document.getElementById('cameraVideo');

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Camera access is not supported here. Please use Upload instead.');
        return;
    }

    try {
        window.borashaCameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: { ideal: 'environment' } },
            audio: false
        });

        video.srcObject = window.borashaCameraStream;
        box.hidden = false;
    } catch (error) {
        alert('Camera access was blocked or unavailable. Please allow camera permission or use Upload.');
    }
}

function captureCameraImage() {
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('cameraCanvas');

    if (!video || !canvas || !video.videoWidth) {
        alert('Camera is not ready yet. Please try again.');
        return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(function (blob) {
        if (!blob) return;

        const file = new File([blob], 'borasha-camera-photo.jpg', { type: 'image/jpeg' });
        showImagePreview(file);
        closeCamera();
    }, 'image/jpeg', 0.9);
}

function removeSelectedImage() {
    const previewBox = document.getElementById('imagePreviewBox');
    const preview = document.getElementById('imagePreview');
    const upload = document.getElementById('imageUpload');

    if (preview) preview.src = '';
    if (upload) upload.value = '';
    if (previewBox) previewBox.hidden = true;
}

function translateText() {
    const input = document.getElementById('translationInput');
    const result = document.getElementById('translationResult');

    if (!input || !result) return;

    const text = input.value.trim().toLowerCase();

    if (!text) {
        result.textContent = 'Please enter some text.';
        return;
    }

    const dictionary = {
        'hello': 'नमस्कार / नमस्ते',
        'thank you': 'धन्यवाद',
        'please': 'कृपया',
        'water': 'पाणी',
        'good morning': 'शुभ सकाळ',
        'good night': 'शुभ रात्री'
    };

    result.textContent = dictionary[text] || 'Translation not available in this demo. Try a word from the vocabulary or lessons.';
}

function activateMicForTranslation() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert('Microphone input is not supported on this browser.');
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'mr-IN';
    recognition.interimResults = false;

    recognition.onresult = function (event) {
        const text = event.results[0][0].transcript;
        const input = document.getElementById('translationInput');
        if (input) input.value = text;
        translateText();
    };

    recognition.start();
}

function initQuiz() {
    const questionEl = document.getElementById('quizQuestion');
    const optionsEl = document.getElementById('quizOptions');
    const resultEl = document.getElementById('quizResult');
    const nextBtn = document.getElementById('nextQuestionBtn');

    if (!questionEl || !optionsEl || !resultEl || !nextBtn) return;

    const showQuestion = () => {
        const current = quizQuestions[quizIndex];
        if (!current) {
            questionEl.textContent = 'Quiz complete';
            optionsEl.innerHTML = '';
            resultEl.textContent = 'Final score: ' + quizScore + ' / ' + quizQuestions.length;
            saveQuizScore(quizScore, quizQuestions.length);
            nextBtn.disabled = true;
            return;
        }

        questionEl.textContent = current.question;
        optionsEl.innerHTML = current.options.map(option => `
            <button class="quiz-option" data-answer="${option}">${option}</button>
        `).join('');

        resultEl.textContent = '';

        optionsEl.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const selected = button.dataset.answer;
                if (selected === current.answer) {
                    quizScore += 1;
                    resultEl.textContent = 'Correct!';
                    resultEl.className = 'quiz-result success';
                } else {
                    resultEl.textContent = 'Wrong. Correct answer: ' + current.answer;
                    resultEl.className = 'quiz-result error';
                }

                optionsEl.querySelectorAll('.quiz-option').forEach(item => {
                    item.disabled = true;
                });
            });
        });
    };

    nextBtn.addEventListener('click', () => {
        quizIndex += 1;
        showQuestion();
    });

    showQuestion();
}

function updateProgressUI() {
    const completedLessons = JSON.parse(localStorage.getItem('borashaCompletedLessons') || '[]');
    const savedScore = JSON.parse(localStorage.getItem('borashaQuizScore') || '{"score":0,"total":0}');

    const completedEl = document.getElementById('completedLessonsCount');
    const quizTextEl = document.getElementById('quizScoreText');
    const levelEl = document.getElementById('learningLevel');
    const progressEl = document.getElementById('overallProgress');

    if (completedEl) completedEl.textContent = completedLessons.length;
    if (quizTextEl) quizTextEl.textContent = savedScore.score + ' / ' + savedScore.total;

    const totalProgress = Math.min(((completedLessons.length + savedScore.score) / 12) * 100, 100);
    if (progressEl) progressEl.style.width = totalProgress + '%';

    if (levelEl) {
        if (totalProgress >= 70) levelEl.textContent = 'Advanced';
        else if (totalProgress >= 40) levelEl.textContent = 'Intermediate';
        else levelEl.textContent = 'Beginner';
    }
}

function saveFeedback(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput');
    const rating = document.getElementById('ratingInput');
    const message = document.getElementById('messageInput');
    const feedbackMessage = document.getElementById('feedbackMessage');

    if (!name || !rating || !message || !feedbackMessage) return;

    const item = {
        name: name.value || 'Anonymous',
        rating: rating.value,
        message: message.value,
        date: new Date().toLocaleString()
    };

    const existing = JSON.parse(localStorage.getItem('borashaFeedback') || '[]');
    existing.push(item);
    localStorage.setItem('borashaFeedback', JSON.stringify(existing));

    feedbackMessage.textContent = 'Thank you for your feedback!';
    feedbackMessage.className = 'feedback-success success';
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('targetWord')) {
        loadSpeakingPractice();
        const listenButton = document.getElementById('listenButton');
        const speakButton = document.getElementById('speakButton');
        const nextButton = document.getElementById('nextButton');
        const tryButton = document.getElementById('tryButton');

        if (listenButton) listenButton.addEventListener('click', listenToCurrentWord);
        if (speakButton) {
            speakButton.addEventListener('click', function () {
                const word = speakingPracticeWords[currentPracticeIndex];
                startSpeechRecognition(word.marathi);
            });
        }
        if (nextButton) nextButton.addEventListener('click', nextSpeakingWord);
        if (tryButton) tryButton.addEventListener('click', resetPractice);
    }

    if (document.getElementById('translationInput')) {
        const translateBtn = document.getElementById('translateBtn');
        const micBtn = document.getElementById('micBtn');
        const cameraBtn = document.getElementById('cameraBtn');
        const captureBtn = document.getElementById('captureBtn');
        const closeCameraBtn = document.getElementById('closeCameraBtn');
        const imageUpload = document.getElementById('imageUpload');
        const removeImageBtn = document.getElementById('removeImageBtn');

        if (translateBtn) translateBtn.addEventListener('click', translateText);
        if (micBtn) micBtn.addEventListener('click', activateMicForTranslation);
        if (cameraBtn) cameraBtn.addEventListener('click', openCamera);
        if (captureBtn) captureBtn.addEventListener('click', captureCameraImage);
        if (closeCameraBtn) closeCameraBtn.addEventListener('click', closeCamera);

        if (imageUpload) {
            imageUpload.addEventListener('change', function () {
                if (this.files && this.files[0]) {
                    showImagePreview(this.files[0]);
                }
            });
        }

        if (removeImageBtn) removeImageBtn.addEventListener('click', removeSelectedImage);
    }

    if (document.getElementById('quizQuestion')) {
        initQuiz();
    }

    if (document.getElementById('completedLessonsCount')) {
        updateProgressUI();
    }

    if (document.getElementById('feedbackForm')) {
        document.getElementById('feedbackForm').addEventListener('submit', saveFeedback);
    }

    if (document.getElementById('lesson-title')) {
        loadLessonContent();
    }
});
