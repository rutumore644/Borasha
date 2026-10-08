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

const vocabularyData = [
    {category:'Greetings', english:'Hello', hindi:'नमस्ते', marathi:'नमस्कार', pronunciation:'Namaskar'},
    {category:'Greetings', english:'Thank you', hindi:'धन्यवाद', marathi:'धन्यवाद', pronunciation:'Dhanyavaad'},
    {category:'Greetings', english:'Please', hindi:'कृपया', marathi:'कृपया', pronunciation:'Krupaya'},
    {category:'Greetings', english:'Sorry', hindi:'माफ़ कीजिए', marathi:'माफ करा', pronunciation:'Maaf kara'},
    {category:'Greetings', english:'Yes', hindi:'हाँ', marathi:'हो', pronunciation:'Ho'},
    {category:'Greetings', english:'No', hindi:'नहीं', marathi:'नाही', pronunciation:'Naahi'},
    {category:'Greetings', english:'Welcome', hindi:'स्वागत है', marathi:'स्वागत आहे', pronunciation:'Swaagat aahe'},
    {category:'Greetings', english:'Good morning', hindi:'सुप्रभात', marathi:'शुभ सकाळ', pronunciation:'Shubh sakaal'},
    {category:'Greetings', english:'Good night', hindi:'शुभ रात्रि', marathi:'शुभ रात्री', pronunciation:'Shubh raatri'},
    {category:'Greetings', english:'Goodbye', hindi:'अलविदा', marathi:'निरोप', pronunciation:'Niroop'},
    {category:'Family', english:'Mother', hindi:'माँ', marathi:'आई', pronunciation:'Aai'},
    {category:'Family', english:'Father', hindi:'पिता', marathi:'वडील', pronunciation:'Vadeel'},
    {category:'Family', english:'Brother', hindi:'भाई', marathi:'भाऊ', pronunciation:'Bhaau'},
    {category:'Family', english:'Sister', hindi:'बहन', marathi:'बहीण', pronunciation:'Baheen'},
    {category:'Family', english:'Grandmother', hindi:'दादी / नानी', marathi:'आजी', pronunciation:'Aaji'},
    {category:'Family', english:'Grandfather', hindi:'दादा / नाना', marathi:'आजोबा', pronunciation:'Aajoba'},
    {category:'Family', english:'Son', hindi:'बेटा', marathi:'मुलगा', pronunciation:'Mulga'},
    {category:'Family', english:'Daughter', hindi:'बेटी', marathi:'मुलगी', pronunciation:'Mulgi'},
    {category:'Family', english:'Friend', hindi:'दोस्त', marathi:'मित्र', pronunciation:'Mitra'},
    {category:'Family', english:'Family', hindi:'परिवार', marathi:'कुटुंब', pronunciation:'Kutumb'},
    {category:'Food', english:'Water', hindi:'पानी', marathi:'पाणी', pronunciation:'Paani'},
    {category:'Food', english:'Food', hindi:'खाना', marathi:'अन्न', pronunciation:'Anna'},
    {category:'Food', english:'Rice', hindi:'चावल', marathi:'भात', pronunciation:'Bhaat'},
    {category:'Food', english:'Bread', hindi:'रोटी', marathi:'पोळी', pronunciation:'Poli'},
    {category:'Food', english:'Milk', hindi:'दूध', marathi:'दूध', pronunciation:'Doodh'},
    {category:'Food', english:'Tea', hindi:'चाय', marathi:'चहा', pronunciation:'Chaha'},
    {category:'Food', english:'Coffee', hindi:'कॉफी', marathi:'कॉफी', pronunciation:'Coffee'},
    {category:'Food', english:'Fruit', hindi:'फल', marathi:'फळ', pronunciation:'Phal'},
    {category:'Food', english:'Vegetable', hindi:'सब्ज़ी', marathi:'भाजी', pronunciation:'Bhaaji'},
    {category:'Food', english:'Apple', hindi:'सेब', marathi:'सफरचंद', pronunciation:'Safarchand'},
    {category:'Home', english:'House', hindi:'घर', marathi:'घर', pronunciation:'Ghar'},
    {category:'Home', english:'Room', hindi:'कमरा', marathi:'खोली', pronunciation:'Kholi'},
    {category:'Home', english:'Door', hindi:'दरवाज़ा', marathi:'दरवाजा', pronunciation:'Darwaja'},
    {category:'Home', english:'Window', hindi:'खिड़की', marathi:'खिडकी', pronunciation:'Khidki'},
    {category:'Home', english:'Chair', hindi:'कुर्सी', marathi:'खुर्ची', pronunciation:'Khurchi'},
    {category:'Home', english:'Table', hindi:'मेज़', marathi:'टेबल', pronunciation:'Table'},
    {category:'Home', english:'Bed', hindi:'बिस्तर', marathi:'पलंग', pronunciation:'Palang'},
    {category:'Home', english:'Kitchen', hindi:'रसोई', marathi:'स्वयंपाकघर', pronunciation:'Swayampaakghar'},
    {category:'Home', english:'Bathroom', hindi:'स्नानघर', marathi:'स्नानगृह', pronunciation:'Snaangruh'},
    {category:'Home', english:'Book', hindi:'किताब', marathi:'पुस्तक', pronunciation:'Pustak'},
    {category:'Numbers', english:'One', hindi:'एक', marathi:'एक', pronunciation:'Ek'},
    {category:'Numbers', english:'Two', hindi:'दो', marathi:'दोन', pronunciation:'Don'},
    {category:'Numbers', english:'Three', hindi:'तीन', marathi:'तीन', pronunciation:'Teen'},
    {category:'Numbers', english:'Four', hindi:'चार', marathi:'चार', pronunciation:'Chaar'},
    {category:'Numbers', english:'Five', hindi:'पाँच', marathi:'पाच', pronunciation:'Paach'},
    {category:'Numbers', english:'Six', hindi:'छह', marathi:'सहा', pronunciation:'Saha'},
    {category:'Numbers', english:'Seven', hindi:'सात', marathi:'सात', pronunciation:'Saat'},
    {category:'Numbers', english:'Eight', hindi:'आठ', marathi:'आठ', pronunciation:'Aath'},
    {category:'Numbers', english:'Nine', hindi:'नौ', marathi:'नऊ', pronunciation:'Nau'},
    {category:'Numbers', english:'Ten', hindi:'दस', marathi:'दहा', pronunciation:'Daha'},
    {category:'Colors', english:'Red', hindi:'लाल', marathi:'लाल', pronunciation:'Laal'},
    {category:'Colors', english:'Blue', hindi:'नीला', marathi:'निळा', pronunciation:'Nila'},
    {category:'Colors', english:'Green', hindi:'हरा', marathi:'हिरवा', pronunciation:'Hirva'},
    {category:'Colors', english:'Yellow', hindi:'पीला', marathi:'पिवळा', pronunciation:'Pivala'},
    {category:'Colors', english:'Black', hindi:'काला', marathi:'काळा', pronunciation:'Kaala'},
    {category:'Colors', english:'White', hindi:'सफेद', marathi:'पांढरा', pronunciation:'Paandhara'},
    {category:'Colors', english:'Pink', hindi:'गुलाबी', marathi:'गुलाबी', pronunciation:'Gulaabi'},
    {category:'Colors', english:'Orange', hindi:'नारंगी', marathi:'नारंगी', pronunciation:'Naaraangi'},
    {category:'Colors', english:'Purple', hindi:'बैंगनी', marathi:'जांभळा', pronunciation:'Jaambhala'},
    {category:'Colors', english:'Brown', hindi:'भूरा', marathi:'तपकिरी', pronunciation:'Tapkiri'},
    {category:'Actions', english:'Eat', hindi:'खाना', marathi:'खाणे', pronunciation:'Khaane'},
    {category:'Actions', english:'Drink', hindi:'पीना', marathi:'पिणे', pronunciation:'Pine'},
    {category:'Actions', english:'Go', hindi:'जाना', marathi:'जाणे', pronunciation:'Jaane'},
    {category:'Actions', english:'Come', hindi:'आना', marathi:'येणे', pronunciation:'Yene'},
    {category:'Actions', english:'Sit', hindi:'बैठना', marathi:'बसणे', pronunciation:'Basne'},
    {category:'Actions', english:'Stand', hindi:'खड़ा होना', marathi:'उभे राहणे', pronunciation:'Ubhe rahane'},
    {category:'Actions', english:'Sleep', hindi:'सोना', marathi:'झोपणे', pronunciation:'Zhopne'},
    {category:'Actions', english:'Walk', hindi:'चलना', marathi:'चालणे', pronunciation:'Chaalne'},
    {category:'Actions', english:'Run', hindi:'दौड़ना', marathi:'धावणे', pronunciation:'Dhaavne'},
    {category:'Actions', english:'Learn', hindi:'सीखना', marathi:'शिकणे', pronunciation:'Shikne'},
    {category:'Feelings', english:'Happy', hindi:'खुश', marathi:'आनंदी', pronunciation:'Aanandi'},
    {category:'Feelings', english:'Sad', hindi:'दुखी', marathi:'दुःखी', pronunciation:'Dukhi'},
    {category:'Feelings', english:'Angry', hindi:'गुस्सा', marathi:'रागावलेला', pronunciation:'Raagavlela'},
    {category:'Feelings', english:'Tired', hindi:'थका हुआ', marathi:'थकलेला', pronunciation:'Thaklela'},
    {category:'Feelings', english:'Afraid', hindi:'डरा हुआ', marathi:'घाबरलेला', pronunciation:'Ghaabarlela'},
    {category:'Feelings', english:'Excited', hindi:'उत्साहित', marathi:'उत्साही', pronunciation:'Utsaahi'},
    {category:'Feelings', english:'Hungry', hindi:'भूखा', marathi:'भुकेलेला', pronunciation:'Bhukelela'},
    {category:'Feelings', english:'Thirsty', hindi:'प्यासा', marathi:'तहानलेला', pronunciation:'Tahanlela'},
    {category:'Shopping', english:'Money', hindi:'पैसे', marathi:'पैसे', pronunciation:'Paise'},
    {category:'Shopping', english:'Price', hindi:'कीमत', marathi:'किंमत', pronunciation:'Kimmat'},
    {category:'Shopping', english:'Shop', hindi:'दुकान', marathi:'दुकान', pronunciation:'Dukaan'},
    {category:'Shopping', english:'Buy', hindi:'खरीदना', marathi:'खरेदी करणे', pronunciation:'Kharedi karne'},
    {category:'Shopping', english:'Sell', hindi:'बेचना', marathi:'विकणे', pronunciation:'Vikne'},
    {category:'Shopping', english:'Cheap', hindi:'सस्ता', marathi:'स्वस्त', pronunciation:'Swast'},
    {category:'Shopping', english:'Expensive', hindi:'महंगा', marathi:'महाग', pronunciation:'Mahaag'},
    {category:'Shopping', english:'More', hindi:'अधिक', marathi:'जास्त', pronunciation:'Jaast'},
    {category:'Shopping', english:'Less', hindi:'कम', marathi:'कमी', pronunciation:'Kami'},
    {category:'Shopping', english:'How much?', hindi:'कितना?', marathi:'किती?', pronunciation:'Kiti?'},
    {category:'Travel', english:'Road', hindi:'सड़क', marathi:'रस्ता', pronunciation:'Rasta'},
    {category:'Travel', english:'Bus', hindi:'बस', marathi:'बस', pronunciation:'Bus'},
    {category:'Travel', english:'Train', hindi:'ट्रेन', marathi:'रेल्वे', pronunciation:'Railway'},
    {category:'Travel', english:'Station', hindi:'स्टेशन', marathi:'स्थानक', pronunciation:'Sthaanak'},
    {category:'Travel', english:'Ticket', hindi:'टिकट', marathi:'तिकीट', pronunciation:'Tikit'},
    {category:'Travel', english:'Car', hindi:'गाड़ी', marathi:'गाडी', pronunciation:'Gaadi'},
    {category:'Travel', english:'Left', hindi:'बायाँ', marathi:'डावा', pronunciation:'Daava'},
    {category:'Travel', english:'Right', hindi:'दायाँ', marathi:'उजवा', pronunciation:'Ujava'},
    {category:'Travel', english:'Near', hindi:'पास', marathi:'जवळ', pronunciation:'Javal'},
    {category:'Travel', english:'Far', hindi:'दूर', marathi:'दूर', pronunciation:'Door'},
    {category:'Time', english:'Today', hindi:'आज', marathi:'आज', pronunciation:'Aaj'},
    {category:'Time', english:'Tomorrow', hindi:'कल', marathi:'उद्या', pronunciation:'Udya'},
    {category:'Time', english:'Yesterday', hindi:'कल', marathi:'काल', pronunciation:'Kaal'},
    {category:'Time', english:'Morning', hindi:'सुबह', marathi:'सकाळ', pronunciation:'Sakaal'},
    {category:'Time', english:'Afternoon', hindi:'दोपहर', marathi:'दुपार', pronunciation:'Dupaar'},
    {category:'Time', english:'Evening', hindi:'शाम', marathi:'संध्याकाळ', pronunciation:'Sandhyaakaal'},
    {category:'Time', english:'Night', hindi:'रात', marathi:'रात्र', pronunciation:'Raatra'},
    {category:'Time', english:'Now', hindi:'अभी', marathi:'आता', pronunciation:'Aata'},
    {category:'Time', english:'Later', hindi:'बाद में', marathi:'नंतर', pronunciation:'Nantar'},
    {category:'Nature', english:'Sun', hindi:'सूरज', marathi:'सूर्य', pronunciation:'Surya'},
    {category:'Nature', english:'Rain', hindi:'बारिश', marathi:'पाऊस', pronunciation:'Paus'},
    {category:'Nature', english:'Wind', hindi:'हवा', marathi:'वारा', pronunciation:'Vaara'},
    {category:'Nature', english:'Cloud', hindi:'बादल', marathi:'ढग', pronunciation:'Dhag'},
    {category:'Nature', english:'Sky', hindi:'आकाश', marathi:'आकाश', pronunciation:'Aakaash'},
    {category:'Nature', english:'Hot', hindi:'गर्म', marathi:'गरम', pronunciation:'Garam'},
    {category:'Nature', english:'Cold', hindi:'ठंडा', marathi:'थंड', pronunciation:'Thand'},
    {category:'Nature', english:'Tree', hindi:'पेड़', marathi:'झाड', pronunciation:'Jhaad'},
    {category:'Nature', english:'Flower', hindi:'फूल', marathi:'फूल', pronunciation:'Phool'},
    {category:'Nature', english:'River', hindi:'नदी', marathi:'नदी', pronunciation:'Nadi'}
];

function loadVocabulary() {
    const grid = document.getElementById('vocabGrid');
    const filters = document.getElementById('vocabFilters');
    const search = document.getElementById('vocabSearch');
    const count = document.getElementById('vocabCount');
    const empty = document.getElementById('vocabEmpty');
    if (!grid || !filters) return;

    const categories = ['All', ...new Set(vocabularyData.map(item => item.category))];
    let activeCategory = 'All';

    filters.innerHTML = categories.map(category =>
        `<button class="vocab-filter ${category === 'All' ? 'active' : ''}" data-category="${category}">${category}</button>`
    ).join('');

    function render() {
        const query = (search?.value || '').trim().toLowerCase();
        const filtered = vocabularyData.filter(item => {
            const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            const text = [item.english, item.hindi, item.marathi, item.pronunciation].join(' ').toLowerCase();
            return matchesCategory && text.includes(query);
        });

        grid.innerHTML = filtered.map(item => `
            <div class="vocab-card">
                <span class="vocab-category">${item.category}</span>
                <div class="word">${item.marathi}</div>
                <div class="word-meta">Hindi: ${item.hindi}</div>
                <div class="word-meta">English: ${item.english}</div>
                <div class="word-meta">Pronunciation: ${item.pronunciation}</div>
                <button class="btn btn-secondary vocab-listen" onclick="speakText('${item.marathi.replace(/'/g, "\\'")}', 'mr-IN')">🔊 Listen</button>
            </div>
        `).join('');

        count.textContent = `${filtered.length} words`;
        empty.hidden = filtered.length !== 0;
    }

    filters.addEventListener('click', function(event) {
        const button = event.target.closest('.vocab-filter');
        if (!button) return;
        activeCategory = button.dataset.category;
        filters.querySelectorAll('.vocab-filter').forEach(item => item.classList.remove('active'));
        button.classList.add('active');
        render();
    });

    if (search) search.addEventListener('input', render);
    render();
}

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

function getSpeechVoice(language) {
    if (!('speechSynthesis' in window)) return null;

    const voices = window.speechSynthesis.getVoices();
    const wanted = language.toLowerCase();

    return voices.find(voice => voice.lang.toLowerCase() === wanted) ||
        voices.find(voice => voice.lang.toLowerCase().startsWith(wanted.split('-')[0])) ||
        null;
}

function speakText(text, language = 'en-IN') {
    if (!('speechSynthesis' in window)) {
        alert('Speech is not supported in this browser. Please use Chrome or Edge.');
        return;
    }

    if (!text) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.78;
    utterance.pitch = 1;

    const voice = getSpeechVoice(language);
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
}

function speakTranslationResult() {
    const result = document.getElementById('translationResult');
    if (!result) return;

    const output = result.textContent.trim();

    if (!output || output === 'Your translation will appear here.') return;

    window.speechSynthesis.cancel();

    // Speak only the translated words, using the correct language voice.
    const parts = output.split('|').map(part => part.trim());

    parts.forEach((part, index) => {
        const colonIndex = part.indexOf(':');
        const label = colonIndex >= 0 ? part.slice(0, colonIndex).trim().toLowerCase() : '';
        const word = colonIndex >= 0 ? part.slice(colonIndex + 1).trim() : part;

        if (!word) return;

        let language = 'en-IN';
        if (label === 'marathi') language = 'mr-IN';
        else if (label === 'hindi') language = 'hi-IN';
        else if (label === 'english') language = 'en-IN';

        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = language;
        utterance.rate = 0.78;
        utterance.pitch = 1;

        const voice = getSpeechVoice(language);
        if (voice) utterance.voice = voice;

        // Add a tiny pause between languages.
        if (index > 0) utterance.text = word;

        window.speechSynthesis.speak(utterance);
    });
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

function getPronunciationSimilarity(a, b) {
    const first = a.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const second = b.replace(/[^a-z0-9]/gi, '').toLowerCase();

    if (!first || !second) return 0;
    if (first === second) return 1;

    const rows = second.length + 1;
    const cols = first.length + 1;
    const distance = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) distance[i][0] = i;
    for (let j = 0; j < cols; j++) distance[0][j] = j;

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            const cost = second[i - 1] === first[j - 1] ? 0 : 1;
            distance[i][j] = Math.min(
                distance[i - 1][j] + 1,
                distance[i][j - 1] + 1,
                distance[i - 1][j - 1] + cost
            );
        }
    }

    return 1 - distance[rows - 1][cols - 1] / Math.max(first.length, second.length);
}

function startSpeechRecognition(targetText = '') {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert('Speech recognition is not supported in this browser. Please use Chrome.');
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    // Use English-India recognition because the practice page displays
    // the Marathi pronunciation in English letters (e.g. Namaskar).
    recognition.lang = 'en-IN';

    const output = document.getElementById('speechResult');
    const feedback = document.getElementById('speechFeedback');

    if (output) output.textContent = 'Listening... Please speak now.';

    recognition.onresult = function (event) {
        const result = event.results[0][0].transcript || '';
        if (output) output.textContent = 'You said: ' + result;

        if (!targetText) return;

        const currentWord = speakingPracticeWords[currentPracticeIndex];
        const spoken = normalizeSpeech(result);
        const expectedMarathi = normalizeSpeech(targetText);
        const expectedPronunciation = normalizeSpeech(currentWord.pronunciation);

        const spokenCompact = spoken.replace(/[^a-z0-9]/gi, '');
        const expectedCompact = expectedPronunciation.replace(/[^a-z0-9]/gi, '');

        // Accept exact pronunciation, close spelling differences,
        // and common speech-recognition variations.
        const similarity = getPronunciationSimilarity(spokenCompact, expectedCompact);
        const isMatch =
            spoken === expectedMarathi ||
            spoken === expectedPronunciation ||
            spokenCompact === expectedCompact ||
            (spokenCompact.length >= 4 && similarity >= 0.70) ||
            (spokenCompact.length >= 4 &&
                (expectedCompact.includes(spokenCompact) ||
                 spokenCompact.includes(expectedCompact)));

        if (feedback) {
            if (isMatch) {
                feedback.textContent = 'Excellent! Your pronunciation matched.';
                feedback.className = 'feedback-message success';
            } else {
                feedback.textContent = 'Almost! Listen once more and try saying the word clearly.';
                feedback.className = 'feedback-message error';
            }
        }
    };

    recognition.onerror = function (event) {
        if (output) output.textContent = 'Speech could not be recognized.';
        if (feedback) {
            if (event.error === 'not-allowed') {
                feedback.textContent = 'Please allow microphone permission and try again.';
            } else {
                feedback.textContent = 'Please try again and speak clearly.';
            }
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

    if (!file.type || !file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }

    // Use an object URL for reliable local image preview.
    if (window.borashaImageUrl) {
        URL.revokeObjectURL(window.borashaImageUrl);
    }

    window.borashaImageUrl = URL.createObjectURL(file);
    preview.src = window.borashaImageUrl;
    preview.alt = 'Selected image preview';
    previewBox.hidden = false;

    if (status) {
        status.textContent = 'Image selected. You can use it as a reference for the text you want to translate.';
    }

    preview.onerror = function () {
        preview.removeAttribute('src');
        if (status) {
            status.textContent = 'The image could not be previewed. Please try another image.';
        }
    };
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
    const listenButton = document.getElementById('speakTranslationBtn');

    if (!input || !result) return;

    const text = input.value.trim().toLowerCase();

    if (!text) {
        result.textContent = 'Please enter a word or sentence.';
        if (listenButton) listenButton.hidden = true;
        return;
    }

    const dictionary = {
        'hello': 'Marathi: नमस्कार | Hindi: नमस्ते',
        'नमस्कार': 'Hindi: नमस्ते | English: Hello',
        'नमस्ते': 'Marathi: नमस्कार | English: Hello',
        'thank you': 'Marathi: धन्यवाद | Hindi: धन्यवाद',
        'धन्यवाद': 'Hindi: धन्यवाद | English: Thank you',
        'please': 'Marathi: कृपया | Hindi: कृपया',
        'कृपया': 'Hindi: कृपया | English: Please',
        'water': 'Marathi: पाणी | Hindi: पानी',
        'पाणी': 'Hindi: पानी | English: Water',
        'पानी': 'Marathi: पाणी | English: Water',
        'good morning': 'Marathi: शुभ सकाळ | Hindi: सुप्रभात',
        'शुभ सकाळ': 'Hindi: सुप्रभात | English: Good morning',
        'सुप्रभात': 'Marathi: शुभ सकाळ | English: Good morning',
        'good night': 'Marathi: शुभ रात्री | Hindi: शुभ रात्रि',
        'शुभ रात्री': 'Hindi: शुभ रात्रि | English: Good night',
        'goodbye': 'Marathi: निरोप | Hindi: अलविदा',
        'family': 'Marathi: कुटुंब | Hindi: परिवार',
        'food': 'Marathi: अन्न | Hindi: भोजन',
        'mother': 'Marathi: आई | Hindi: माँ',
        'father': 'Marathi: वडील | Hindi: पिता'
    };

    result.textContent = dictionary[text] ||
        'Translation not available in this demo. Try a word from Vocabulary or Lessons.';

    if (listenButton) {
        listenButton.hidden = false;
        listenButton.onclick = speakTranslationResult;
    }
}

function activateMicForTranslation() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert('Microphone input is not supported on this browser. Please use Chrome or Edge.');
        return;
    }

    const input = document.getElementById('translationInput');
    const result = document.getElementById('translationResult');

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    // English is the most reliable starting language for browser speech recognition.
    // Users can still type Marathi or Hindi directly into the box.
    recognition.lang = 'en-IN';

    if (result) result.textContent = 'Listening... Please speak now.';

    recognition.onresult = function (event) {
        const text = event.results[0][0].transcript;
        if (input) input.value = text;
        translateText();
    };

    recognition.onerror = function () {
        if (result) {
            result.textContent = 'Could not recognize your speech. Please try again or type the word.';
        }
    };

    try {
        recognition.start();
    } catch (error) {
        console.log('Speech recognition error:', error);
    }
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

    const totalUnits = 6 + 5;
    const totalProgress = Math.min(((completedLessons.length + savedScore.score) / totalUnits) * 100, 100);
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

    if (document.getElementById('vocabGrid')) {
        loadVocabulary();
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
