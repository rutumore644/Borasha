// Borasha app JavaScript

function recordBorashaVisit() {
    const today = new Date();
    const todayKey = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
    const last = localStorage.getItem('borashaLastVisitDay');
    let streak = Number(localStorage.getItem('borashaLearningStreak') || 0);
    if (last !== todayKey) {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayKey = yesterday.getFullYear() + '-' + String(yesterday.getMonth()+1).padStart(2,'0') + '-' + String(yesterday.getDate()).padStart(2,'0');
        streak = last === yesterdayKey ? streak + 1 : 1;
        localStorage.setItem('borashaLearningStreak', String(streak));
        localStorage.setItem('borashaLastVisitDay', todayKey);
    }
    localStorage.setItem('borashaLastActivity', new Date().toISOString());
}


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
    // Level 1 — easy words
    { marathi: 'नमस्कार', pronunciation: 'Namaskar', meaning: 'Hello' },
    { marathi: 'धन्यवाद', pronunciation: 'Dhanyavaad', meaning: 'Thank you' },
    { marathi: 'कृपया', pronunciation: 'Krupaya', meaning: 'Please' },
    { marathi: 'हो', pronunciation: 'Ho', meaning: 'Yes' },
    { marathi: 'नाही', pronunciation: 'Naahi', meaning: 'No' },
    { marathi: 'पाणी', pronunciation: 'Paani', meaning: 'Water' },
    { marathi: 'घर', pronunciation: 'Ghar', meaning: 'House' },
    { marathi: 'आई', pronunciation: 'Aai', meaning: 'Mother' },
    { marathi: 'मित्र', pronunciation: 'Mitra', meaning: 'Friend' },
    { marathi: 'चहा', pronunciation: 'Chaha', meaning: 'Tea' },
    { marathi: 'शुभ सकाळ', pronunciation: 'Shubh sakaal', meaning: 'Good morning' },
    { marathi: 'शुभ रात्री', pronunciation: 'Shubh raatri', meaning: 'Good night' },
    // Level 2 — short useful phrases
    { marathi: 'तुम्ही कसे आहात?', pronunciation: 'Tumhi kase aahat', meaning: 'How are you?' },
    { marathi: 'मी ठीक आहे.', pronunciation: 'Mi theek aahe', meaning: 'I am fine.' },
    { marathi: 'तुमचे नाव काय आहे?', pronunciation: 'Tumche naav kaay aahe', meaning: 'What is your name?' },
    { marathi: 'माझे नाव रिया आहे.', pronunciation: 'Majhe naav Riya aahe', meaning: 'My name is Riya.' },
    { marathi: 'मला पाणी हवे आहे.', pronunciation: 'Mala paani have aahe', meaning: 'I want water.' },
    { marathi: 'मला मदत करा.', pronunciation: 'Mala madat kara', meaning: 'Please help me.' },
    { marathi: 'मला समजले.', pronunciation: 'Mala samajale', meaning: 'I understood.' },
    { marathi: 'मला समजले नाही.', pronunciation: 'Mala samajale naahi', meaning: 'I did not understand.' },
    { marathi: 'कृपया हळू बोला.', pronunciation: 'Krupaya halu bola', meaning: 'Please speak slowly.' },
    { marathi: 'तुम्ही कुठे राहता?', pronunciation: 'Tumhi kuthe raahata', meaning: 'Where do you live?' },
    { marathi: 'मला मराठी शिकायची आहे.', pronunciation: 'Mala Marathi shikaychi aahe', meaning: 'I want to learn Marathi.' },
    // Level 3 — everyday sentences
    { marathi: 'आज तुम्हाला कसे वाटत आहे?', pronunciation: 'Aaj tumhala kase vaat aahe', meaning: 'How are you feeling today?' },
    { marathi: 'मला नवीन भाषा शिकायला आवडते.', pronunciation: 'Mala naveen bhaasha shikayla aavadte', meaning: 'I like learning a new language.' },
    { marathi: 'कृपया मला जवळचा बस थांबा दाखवा.', pronunciation: 'Krupaya mala javalcha bus thamba dakhava', meaning: 'Please show me the nearest bus stop.' },
    { marathi: 'हे किती रुपयांना आहे?', pronunciation: 'He kiti rupayanna aahe', meaning: 'How many rupees does this cost?' },
    { marathi: 'मला एक कप चहा आणि थोडे पाणी हवे आहे.', pronunciation: 'Mala ek cup chaha aani thode paani have aahe', meaning: 'I would like a cup of tea and some water.' },
    { marathi: 'मी रोज थोडा वेळ मराठीचा सराव करते.', pronunciation: 'Mi roj thoda vel Marathicha sarav karte', meaning: 'I practise Marathi for a little while every day.' },
    { marathi: 'तुम्ही कृपया हे वाक्य पुन्हा सांगू शकता का?', pronunciation: 'Tumhi krupaya he vaakya punha sangu shakta ka', meaning: 'Could you please repeat this sentence?' },
    { marathi: 'मला बाजारात जायचे आहे, पण मला रस्ता माहीत नाही.', pronunciation: 'Mala bazarat jayache aahe pan mala rasta mahit naahi', meaning: 'I want to go to the market, but I do not know the way.' },
    { marathi: 'आज हवामान छान आहे, म्हणून आपण बाहेर फिरायला जाऊया.', pronunciation: 'Aaj havaamaan chhaan aahe mhanun aapan baaher phirayla jauya', meaning: 'The weather is nice today, so let us go for a walk.' },
    { marathi: 'मी रोज नवीन शब्द शिकते आणि ते वाक्यांमध्ये वापरते.', pronunciation: 'Mi roj naveen shabd shikte aani te vaakyanmadhe vaaparate', meaning: 'I learn new words every day and use them in sentences.' },
    // Level 4 — longer conversations
    { marathi: 'नमस्कार, माझे नाव रिया आहे आणि मला मराठी बोलायला शिकायचे आहे.', pronunciation: 'Namaskar majhe naav Riya aahe aani mala Marathi bolayla shikayache aahe', meaning: 'Hello, my name is Riya, and I want to learn to speak Marathi.' },
    { marathi: 'माफ करा, मला हे ठिकाण माहीत नाही. तुम्ही मला तिथे जाण्याचा रस्ता सांगू शकता का?', pronunciation: 'Maaf kara mala he thikaan mahit naahi tumhi mala tithe janyacha rasta sangu shakta ka', meaning: 'Excuse me, I do not know this place. Could you tell me how to get there?' },
    { marathi: 'मी दुकानात गेले होते, पण मला हवी असलेली वस्तू तिथे मिळाली नाही.', pronunciation: 'Mi dukanaat gele hote pan mala havi asleli vastu tithe milali naahi', meaning: 'I went to the shop, but I could not find the item I wanted.' },
    { marathi: 'मला तुमच्याशी बोलून आनंद झाला. आपण पुन्हा कधीतरी भेटूया.', pronunciation: 'Mala tumchyashi bolun aanand zhala aapan punha kadhitari bhetuya', meaning: 'It was nice talking to you. Let us meet again sometime.' },
    { marathi: 'नवीन भाषा शिकताना चुका होतात, पण नियमित सराव केल्याने आपण हळूहळू सुधारतो.', pronunciation: 'Naveen bhaasha shiktana chuka hotaat pan niyamit sarav kelyane aapan haluhalu sudharato', meaning: 'Mistakes happen when learning a new language, but regular practice helps us improve gradually.' },
    { marathi: 'मला या शब्दाचा अर्थ समजला नाही. तुम्ही तो सोप्या भाषेत समजावून सांगू शकता का?', pronunciation: 'Mala ya shabdacha arth samajala naahi tumhi to sopya bhaashet samjavun sangu shakta ka', meaning: 'I did not understand the meaning of this word. Could you explain it in simple language?' },
    { marathi: 'उद्या सकाळी आपण लवकर निघूया, म्हणजे वेळेवर पोहोचू शकू.', pronunciation: 'Udya sakali aapan lavkar nighuya mhanje velevar pohachu shaku', meaning: 'Let us leave early tomorrow morning so that we can arrive on time.' },
    { marathi: 'मला मराठी चांगली बोलता यावी म्हणून मी दररोज ऐकण्याचा आणि बोलण्याचा सराव करते.', pronunciation: 'Mala Marathi changali bolata yaavi mhanun mi darroj aikanyacha aani bolanyacha sarav karte', meaning: 'I practise listening and speaking every day so that I can speak Marathi well.' },
    { marathi: 'तुम्ही मला मदत केल्याबद्दल धन्यवाद. आता मला हे वाक्य अधिक चांगल्या प्रकारे समजले.', pronunciation: 'Tumhi mala madat kelyabaddal dhanyavaad aata mala he vaakya adhik changalya prakare samajale', meaning: 'Thank you for helping me. I understand this sentence much better now.' },
    { marathi: 'मी आधी सोपे शब्द शिकेन, नंतर छोटी वाक्ये आणि शेवटी मोठी संभाषणे बोलण्याचा प्रयत्न करेन.', pronunciation: 'Mi aadhi sope shabd shiken nantar chhoti vaakye aani shevti mothi sambhashane bolanyacha prayatna karen', meaning: 'I will learn easy words first, then short sentences, and finally try speaking longer conversations.' }
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


// Expanded learning data: extra everyday vocabulary and sentence practice.
// This extends the existing data without changing any HTML or CSS.
const extraVocabularyData = [
    ['People','Person','व्यक्ति','व्यक्ती','Vyakti'],['People','Child','बच्चा','मूल','Mool'],
    ['People','Man','आदमी','पुरुष','Purush'],['People','Woman','महिला','स्त्री','Stree'],
    ['People','Teacher','शिक्षक','शिक्षक','Shikshak'],['People','Student','विद्यार्थी','विद्यार्थी','Vidyarthi'],
    ['People','Doctor','डॉक्टर','डॉक्टर','Doctor'],['People','Nurse','नर्स','परिचारिका','Paricharika'],
    ['Places','School','विद्यालय','शाळा','Shaala'],['Places','College','महाविद्यालय','महाविद्यालय','Mahavidyalaya'],
    ['Places','Hospital','अस्पताल','रुग्णालय','Rugnalaya'],['Places','Market','बाज़ार','बाजार','Bazaar'],
    ['Places','Station','स्टेशन','स्थानक','Sthaanak'],['Places','Village','गाँव','गाव','Gaav'],
    ['Places','City','शहर','शहर','Shahar'],['Places','Road','सड़क','रस्ता','Rasta'],
    ['Time','Today','आज','आज','Aaj'],['Time','Tomorrow','कल','उद्या','Udya'],
    ['Time','Yesterday','कल','काल','Kaal'],['Time','Morning','सुबह','सकाळ','Sakaal'],
    ['Time','Evening','शाम','संध्याकाळ','Sandhyakaal'],['Time','Now','अभी','आत्ता','Aatta'],
    ['Time','Later','बाद में','नंतर','Nantar'],['Time','Day','दिन','दिवस','Divas'],
    ['Travel','Bus','बस','बस','Bus'],['Travel','Train','रेल गाड़ी','आगगाडी','Aaggadi'],
    ['Travel','Ticket','टिकट','तिकीट','Tikit'],['Travel','Left','बायाँ','डावा','Daava'],
    ['Travel','Right','दायाँ','उजवा','Ujava'],['Travel','Straight','सीधा','सरळ','Saral'],
    ['Travel','Near','पास','जवळ','Javal'],['Travel','Far','दूर','लांब','Laamb'],
    ['Shopping','Money','पैसा','पैसे','Paise'],['Shopping','Price','कीमत','किंमत','Kimmat'],
    ['Shopping','Cheap','सस्ता','स्वस्त','Swasta'],['Shopping','Expensive','महँगा','महाग','Mahaag'],
    ['Shopping','Buy','खरीदना','विकत घेणे','Vikat ghene'],['Shopping','How much?','कितना?','किती?','Kiti?'],
    ['Feelings','Happy','खुश','आनंदी','Aanandi'],['Feelings','Sad','दुखी','दुःखी','Dukhi'],
    ['Feelings','Tired','थका हुआ','थकलेला','Thaklela'],['Feelings','Hungry','भूखा','भुकेला','Bhukela'],
    ['Feelings','Thirsty','प्यासा','तहानलेला','Tahanlela'],['Feelings','Afraid','डरा हुआ','घाबरलेला','Ghabarlela'],
    ['Health','Pain','दर्द','वेदना','Vedana'],['Health','Medicine','दवा','औषध','Aushadh'],
    ['Health','Help','मदद','मदत','Madat'],['Health','Emergency','आपातकाल','आणीबाणी','Aanibaani'],
    ['Home','Light','रोशनी','प्रकाश','Prakash'],['Home','Fan','पंखा','पंखा','Pankha'],
    ['Home','Water bottle','पानी की बोतल','पाण्याची बाटली','Panyachi batli'],['Home','Clothes','कपड़े','कपडे','Kapde'],
    ['Actions','Read','पढ़ना','वाचणे','Vaachane'],['Actions','Write','लिखना','लिहिणे','Lihine'],
    ['Actions','Speak','बोलना','बोलणे','Bolane'],['Actions','Listen','सुनना','ऐकणे','Aikane'],
    ['Actions','Learn','सीखना','शिकणे','Shikane'],['Actions','Understand','समझना','समजणे','Samajane'],
    ['Actions','Wait','इंतज़ार करना','वाट पाहणे','Vaat pahane'],['Actions','Open','खोलना','उघडणे','Ughadane'],
    ['Actions','Close','बंद करना','बंद करणे','Band karane'],['Actions','Come','आना','येणे','Yene'],
    ['Actions','Go home','घर जाना','घरी जाणे','Ghari jane'],['Questions','What?','क्या?','काय?','Kaay?'],
    ['Questions','Where?','कहाँ?','कुठे?','Kuthe?'],['Questions','When?','कब?','कधी?','Kadhi?'],
    ['Questions','Why?','क्यों?','का?','Ka?'],['Questions','Who?','कौन?','कोण?','Kon?'],
    ['Questions','How?','कैसे?','कसे?','Kase?'],['Polite phrases','Excuse me','माफ़ कीजिए','माफ करा','Maaf kara'],
    ['Polite phrases','Please help me','कृपया मेरी मदद करें','कृपया मला मदत करा','Krupaya mala madat kara'],
    ['Polite phrases','I do not understand','मुझे समझ नहीं आया','मला समजले नाही','Mala samajale nahi'],
    ['Polite phrases','Please repeat','कृपया दोहराएँ','कृपया पुन्हा सांगा','Krupaya punha sanga'],
    ['Polite phrases','Speak slowly','धीरे बोलिए','हळू बोला','Halu bola'],
    ['Polite phrases','Where is the toilet?','शौचालय कहाँ है?','स्वच्छतागृह कुठे आहे?','Swachchhata gruha kuthe aahe?'],
    ['Polite phrases','I need water','मुझे पानी चाहिए','मला पाणी हवे आहे','Mala paani have aahe'],
    ['Polite phrases','Nice to meet you','आपसे मिलकर अच्छा लगा','तुम्हाला भेटून आनंद झाला','Tumhala bhetun aanand zala'],
    ['Polite phrases','What is your name?','आपका नाम क्या है?','तुमचे नाव काय आहे?','Tumche naav kaay aahe?'],
    ['Polite phrases','My name is…','मेरा नाम … है','माझे नाव … आहे','Majhe naav ... aahe']
].map(([category, english, hindi, marathi, pronunciation]) => ({category, english, hindi, marathi, pronunciation}));

vocabularyData.push(...extraVocabularyData);

// Add extra examples to the six existing lessons, keeping the original lesson cards and URLs.
const extraLessonContent = {
    greetings: {
        words: [
            {marathi:'कृपया',hindi:'कृपया',english:'Please'},
            {marathi:'माफ करा',hindi:'माफ़ कीजिए',english:'Sorry / Excuse me'},
            {marathi:'स्वागत आहे',hindi:'स्वागत है',english:'Welcome'},
            {marathi:'हो',hindi:'हाँ',english:'Yes'},
            {marathi:'नाही',hindi:'नहीं',english:'No'},
            {marathi:'पुन्हा भेटू',hindi:'फिर मिलेंगे',english:'See you again'},
            {marathi:'शुभ दुपार',hindi:'शुभ दोपहर',english:'Good afternoon'},
            {marathi:'शुभ संध्याकाळ',hindi:'शुभ संध्या',english:'Good evening'}
        ],
        sentences: [
            {marathi:'तुमचे स्वागत आहे.',hindi:'आपका स्वागत है।',english:'You are welcome.'},
            {marathi:'कृपया बसा.',hindi:'कृपया बैठिए।',english:'Please sit down.'},
            {marathi:'मला माफ करा.',hindi:'मुझे माफ़ कीजिए।',english:'Please forgive me.'},
            {marathi:'तुमचा दिवस चांगला जावो.',hindi:'आपका दिन अच्छा हो।',english:'Have a nice day.'}
        ]
    },
    introduction: {
        words: [
            {marathi:'माझे',hindi:'मेरा / मेरी',english:'My'},
            {marathi:'तुमचे',hindi:'आपका / आपकी',english:'Your'},
            {marathi:'नाव',hindi:'नाम',english:'Name'},
            {marathi:'गाव',hindi:'गाँव',english:'Village / hometown'},
            {marathi:'राहणे',hindi:'रहना',english:'To live'},
            {marathi:'काम',hindi:'काम',english:'Work'},
            {marathi:'शिकणे',hindi:'सीखना',english:'To learn'},
            {marathi:'भेटून आनंद झाला',hindi:'मिलकर खुशी हुई',english:'Nice to meet you'}
        ],
        sentences: [
            {marathi:'मी महाराष्ट्रात राहतो/राहते.',hindi:'मैं महाराष्ट्र में रहता/रहती हूँ।',english:'I live in Maharashtra.'},
            {marathi:'मी मराठी शिकत आहे.',hindi:'मैं मराठी सीख रहा/रही हूँ।',english:'I am learning Marathi.'},
            {marathi:'तुम्ही कुठे राहता?',hindi:'आप कहाँ रहते हैं?',english:'Where do you live?'},
            {marathi:'मला नवीन भाषा शिकायला आवडते.',hindi:'मुझे नई भाषा सीखना पसंद है।',english:'I like learning a new language.'}
        ]
    },
    family: {
        words: [
            {marathi:'आई',hindi:'माँ',english:'Mother'},
            {marathi:'वडील',hindi:'पिता',english:'Father'},
            {marathi:'मुलगा',hindi:'बेटा',english:'Son'},
            {marathi:'मुलगी',hindi:'बेटी',english:'Daughter'},
            {marathi:'आजोबा',hindi:'दादा / नाना',english:'Grandfather'},
            {marathi:'आजी',hindi:'दादी / नानी',english:'Grandmother'},
            {marathi:'काका',hindi:'चाचा',english:'Uncle (paternal)'},
            {marathi:'मावशी',hindi:'मौसी',english:'Aunt (maternal)'}
        ],
        sentences: [
            {marathi:'हे माझे कुटुंब आहे.',hindi:'यह मेरा परिवार है।',english:'This is my family.'},
            {marathi:'माझ्या कुटुंबात पाच जण आहेत.',hindi:'मेरे परिवार में पाँच लोग हैं।',english:'There are five people in my family.'},
            {marathi:'तुमच्या भावाचे नाव काय आहे?',hindi:'आपके भाई का नाम क्या है?',english:'What is your brother’s name?'},
            {marathi:'माझी आजी गोष्ट सांगते.',hindi:'मेरी दादी कहानी सुनाती हैं।',english:'My grandmother tells a story.'}
        ]
    },
    numbers: {
        words: [
            {marathi:'पाच',hindi:'पाँच',english:'Five'},
            {marathi:'सहा',hindi:'छह',english:'Six'},
            {marathi:'सात',hindi:'सात',english:'Seven'},
            {marathi:'आठ',hindi:'आठ',english:'Eight'},
            {marathi:'नऊ',hindi:'नौ',english:'Nine'},
            {marathi:'दहा',hindi:'दस',english:'Ten'},
            {marathi:'अकरा',hindi:'ग्यारह',english:'Eleven'},
            {marathi:'बारा',hindi:'बारह',english:'Twelve'}
        ],
        sentences: [
            {marathi:'माझ्याकडे दोन पेन आहेत.',hindi:'मेरे पास दो पेन हैं।',english:'I have two pens.'},
            {marathi:'बस सात वाजता येते.',hindi:'बस सात बजे आती है।',english:'The bus comes at seven o’clock.'},
            {marathi:'मला तीन सफरचंद हवी आहेत.',hindi:'मुझे तीन सेब चाहिए।',english:'I want three apples.'},
            {marathi:'तुमच्याकडे किती पुस्तके आहेत?',hindi:'आपके पास कितनी किताबें हैं?',english:'How many books do you have?'}
        ]
    },
    food: {
        words: [
            {marathi:'भाजी',hindi:'सब्ज़ी',english:'Vegetable / curry'},
            {marathi:'फळ',hindi:'फल',english:'Fruit'},
            {marathi:'सफरचंद',hindi:'सेब',english:'Apple'},
            {marathi:'केळे',hindi:'केला',english:'Banana'},
            {marathi:'चहा',hindi:'चाय',english:'Tea'},
            {marathi:'नाश्ता',hindi:'नाश्ता',english:'Breakfast / snack'},
            {marathi:'भूक',hindi:'भूख',english:'Hunger'},
            {marathi:'तहान',hindi:'प्यास',english:'Thirst'}
        ],
        sentences: [
            {marathi:'मला चहा हवा आहे.',hindi:'मुझे चाय चाहिए।',english:'I would like tea.'},
            {marathi:'हे जेवण खूप चविष्ट आहे.',hindi:'यह खाना बहुत स्वादिष्ट है।',english:'This food is very tasty.'},
            {marathi:'तुम्हाला काय खायचे आहे?',hindi:'आप क्या खाना चाहते हैं?',english:'What would you like to eat?'},
            {marathi:'कृपया मला पाणी द्या.',hindi:'कृपया मुझे पानी दीजिए।',english:'Please give me water.'}
        ]
    },
    daily: {
        words: [
            {marathi:'कुठे',hindi:'कहाँ',english:'Where'},
            {marathi:'कधी',hindi:'कब',english:'When'},
            {marathi:'किती',hindi:'कितना / कितनी',english:'How much / how many'},
            {marathi:'आज',hindi:'आज',english:'Today'},
            {marathi:'उद्या',hindi:'कल (आने वाला)',english:'Tomorrow'},
            {marathi:'मदत',hindi:'मदद',english:'Help'},
            {marathi:'समजले',hindi:'समझ गया/गई',english:'Understood'},
            {marathi:'हळू',hindi:'धीरे',english:'Slowly'}
        ],
        sentences: [
            {marathi:'तुम्ही मला मदत करू शकता का?',hindi:'क्या आप मेरी मदद कर सकते हैं?',english:'Can you help me?'},
            {marathi:'कृपया पुन्हा सांगा.',hindi:'कृपया फिर से बताइए।',english:'Please say that again.'},
            {marathi:'मला समजले नाही.',hindi:'मुझे समझ नहीं आया।',english:'I did not understand.'},
            {marathi:'हे किती रुपयांचे आहे?',hindi:'यह कितने रुपये का है?',english:'How much does this cost?'},
            {marathi:'स्वच्छतागृह कुठे आहे?',hindi:'शौचालय कहाँ है?',english:'Where is the toilet?'},
            {marathi:'मला थोडे हळू बोलायला मदत करा.',hindi:'कृपया थोड़ा धीरे बोलिए।',english:'Please speak a little slowly.'}
        ]
    }
};

Object.entries(extraLessonContent).forEach(([lessonName, extra]) => {
    if (!lessonData[lessonName]) return;
    lessonData[lessonName].words.push(...extra.words);
    lessonData[lessonName].sentences.push(...extra.sentences);
});

// New lessons are arranged from beginner to more challenging conversation practice.
const additionalLessonData = {
    colours: {
        title:'Colours and Descriptions', level:'Beginner', description:'Learn colours and describe the things around you.',
        words:[
            {marathi:'लाल',hindi:'लाल',english:'Red'},{marathi:'निळा',hindi:'नीला',english:'Blue'},
            {marathi:'हिरवा',hindi:'हरा',english:'Green'},{marathi:'पिवळा',hindi:'पीला',english:'Yellow'},
            {marathi:'पांढरा',hindi:'सफेद',english:'White'},{marathi:'काळा',hindi:'काला',english:'Black'}
        ],
        sentences:[
            {marathi:'माझी पिशवी लाल आहे.',hindi:'मेरा बैग लाल है।',english:'My bag is red.'},
            {marathi:'मला निळे आकाश आणि हिरवी झाडे आवडतात.',hindi:'मुझे नीला आसमान और हरे पेड़ पसंद हैं।',english:'I like the blue sky and green trees.'},
            {marathi:'तुमच्या घराचा रंग कोणता आहे?',hindi:'आपके घर का रंग कौन सा है?',english:'What colour is your house?'},
            {marathi:'आज मी पांढरा शर्ट आणि काळी पँट घातली आहे.',hindi:'आज मैंने सफेद शर्ट और काली पैंट पहनी है।',english:'Today I am wearing a white shirt and black trousers.'}
        ],
        question:'What does “हिरवा” mean?',options:['Green','Red','White','Black'],answer:'Green'
    },
    home: {
        title:'At Home', level:'Beginner', description:'Talk about rooms, objects and simple things you do at home.',
        words:[
            {marathi:'घर',hindi:'घर',english:'House / home'},{marathi:'खोली',hindi:'कमरा',english:'Room'},
            {marathi:'दरवाजा',hindi:'दरवाज़ा',english:'Door'},{marathi:'खिडकी',hindi:'खिड़की',english:'Window'},
            {marathi:'खुर्ची',hindi:'कुर्सी',english:'Chair'},{marathi:'स्वयंपाकघर',hindi:'रसोईघर',english:'Kitchen'}
        ],
        sentences:[
            {marathi:'माझे घर बाजाराजवळ आहे.',hindi:'मेरा घर बाज़ार के पास है।',english:'My home is near the market.'},
            {marathi:'कृपया खिडकी उघडा कारण खोलीत खूप गरम झाले आहे.',hindi:'कृपया खिड़की खोलिए क्योंकि कमरे में बहुत गर्मी है।',english:'Please open the window because the room has become very hot.'},
            {marathi:'आई स्वयंपाकघरात जेवण बनवत आहे.',hindi:'माँ रसोई में खाना बना रही हैं।',english:'Mother is cooking food in the kitchen.'},
            {marathi:'मी अभ्यास केल्यानंतर माझी पुस्तके टेबलावर ठेवतो/ठेवते.',hindi:'मैं पढ़ाई के बाद अपनी किताबें मेज़ पर रखता/रखती हूँ।',english:'I put my books on the table after studying.'}
        ],
        question:'What does “खिडकी” mean?',options:['Door','Window','Kitchen','Chair'],answer:'Window'
    },
    school: {
        title:'School and College', level:'Beginner', description:'Use useful words and sentences for study and class.',
        words:[
            {marathi:'शाळा',hindi:'विद्यालय',english:'School'},{marathi:'महाविद्यालय',hindi:'कॉलेज',english:'College'},
            {marathi:'शिक्षक',hindi:'शिक्षक',english:'Teacher'},{marathi:'वर्ग',hindi:'कक्षा',english:'Classroom / class'},
            {marathi:'पुस्तक',hindi:'किताब',english:'Book'},{marathi:'प्रश्न',hindi:'प्रश्न',english:'Question'}
        ],
        sentences:[
            {marathi:'माझे महाविद्यालय माझ्या घरापासून थोडे दूर आहे.',hindi:'मेरा कॉलेज मेरे घर से थोड़ा दूर है।',english:'My college is a little far from my home.'},
            {marathi:'कृपया शिक्षकांनी सांगितलेला प्रश्न पुन्हा समजावून सांगा.',hindi:'कृपया शिक्षक द्वारा बताए गए प्रश्न को फिर से समझाइए।',english:'Please explain the question the teacher gave us again.'},
            {marathi:'आज आमच्या वर्गात नवीन विद्यार्थिनी आली आहे.',hindi:'आज हमारी कक्षा में एक नई छात्रा आई है।',english:'A new student joined our class today.'},
            {marathi:'परीक्षेच्या आधी मी सर्व महत्त्वाच्या नोट्स पुन्हा वाचणार आहे.',hindi:'परीक्षा से पहले मैं सभी ज़रूरी नोट्स दोबारा पढ़ूँगा/पढ़ूँगी।',english:'I am going to review all the important notes before the exam.'}
        ],
        question:'What does “पुस्तक” mean?',options:['Book','Teacher','Class','Question'],answer:'Book'
    },
    dailyRoutine: {
        title:'Daily Routine', level:'Beginner', description:'Describe your day using longer sentences and time words.',
        words:[
            {marathi:'उठणे',hindi:'उठना',english:'To wake up'},{marathi:'आंघोळ',hindi:'नहाना',english:'Bath'},
            {marathi:'नाश्ता',hindi:'नाश्ता',english:'Breakfast'},{marathi:'अभ्यास',hindi:'पढ़ाई',english:'Study'},
            {marathi:'काम',hindi:'काम',english:'Work'},{marathi:'झोपणे',hindi:'सोना',english:'To sleep'}
        ],
        sentences:[
            {marathi:'मी रोज सकाळी सात वाजता उठून तयार होतो/होते.',hindi:'मैं रोज़ सुबह सात बजे उठकर तैयार होता/होती हूँ।',english:'I wake up at seven every morning and get ready.'},
            {marathi:'नाश्ता केल्यानंतर मी बसने महाविद्यालयात जातो/जाते.',hindi:'नाश्ता करने के बाद मैं बस से कॉलेज जाता/जाती हूँ।',english:'After breakfast, I travel to college by bus.'},
            {marathi:'घरी परत आल्यावर मी थोडा आराम करून गृहपाठ पूर्ण करतो/करते.',hindi:'घर लौटने के बाद मैं थोड़ा आराम करके अपना गृहकार्य पूरा करता/करती हूँ।',english:'After returning home, I rest for a while and finish my homework.'},
            {marathi:'रात्री झोपण्यापूर्वी मी उद्याच्या कामांची यादी तयार करतो/करते.',hindi:'रात को सोने से पहले मैं कल के कामों की सूची बनाता/बनाती हूँ।',english:'Before sleeping at night, I make a list of tasks for tomorrow.'}
        ],
        question:'What does “नाश्ता” mean?',options:['Dinner','Breakfast','Sleep','Work'],answer:'Breakfast'
    },
    directions: {
        title:'Asking for Directions', level:'Elementary', description:'Ask for places and understand simple directions.',
        words:[
            {marathi:'डावीकडे',hindi:'बाईं ओर',english:'To the left'},{marathi:'उजवीकडे',hindi:'दाईं ओर',english:'To the right'},
            {marathi:'सरळ',hindi:'सीधा',english:'Straight'},{marathi:'जवळ',hindi:'पास',english:'Near'},
            {marathi:'लांब',hindi:'दूर',english:'Far'},{marathi:'रस्ता',hindi:'सड़क',english:'Road'}
        ],
        sentences:[
            {marathi:'कृपया मला जवळच्या बस स्थानकाचा रस्ता सांगू शकता का?',hindi:'क्या आप मुझे पास के बस स्टॉप का रास्ता बता सकते हैं?',english:'Could you please tell me the way to the nearest bus stop?'},
            {marathi:'या रस्त्यावर सरळ जा आणि मग उजवीकडे वळा.',hindi:'इस सड़क पर सीधे जाइए और फिर दाईं ओर मुड़िए।',english:'Go straight along this road and then turn right.'},
            {marathi:'रेल्वे स्थानक इथून चालत जाण्याइतके जवळ आहे का?',hindi:'क्या रेलवे स्टेशन यहाँ से पैदल जाने जितना पास है?',english:'Is the railway station close enough to walk to from here?'},
            {marathi:'मला पत्ता समजला नाही, म्हणून कृपया तो हळू आणि स्पष्ट सांगा.',hindi:'मुझे पता समझ नहीं आया, इसलिए कृपया धीरे और साफ़ बताइए।',english:'I did not understand the address, so please say it slowly and clearly.'}
        ],
        question:'What does “डावीकडे” mean?',options:['Right','Left','Straight','Far'],answer:'Left'
    },
    shopping: {
        title:'Shopping and Prices', level:'Elementary', description:'Ask prices, quantities and make polite purchases.',
        words:[
            {marathi:'किंमत',hindi:'कीमत',english:'Price'},{marathi:'स्वस्त',hindi:'सस्ता',english:'Cheap'},
            {marathi:'महाग',hindi:'महँगा',english:'Expensive'},{marathi:'पैसे',hindi:'पैसे',english:'Money'},
            {marathi:'किलो',hindi:'किलो',english:'Kilogram'},{marathi:'पावती',hindi:'रसीद',english:'Receipt'}
        ],
        sentences:[
            {marathi:'या सफरचंदांची किंमत एका किलोसाठी किती आहे?',hindi:'इन सेबों की एक किलो की कीमत कितनी है?',english:'How much do these apples cost per kilogram?'},
            {marathi:'मला अर्धा किलो साखर आणि एक लिटर दूध द्या.',hindi:'मुझे आधा किलो चीनी और एक लीटर दूध दीजिए।',english:'Please give me half a kilogram of sugar and one litre of milk.'},
            {marathi:'हे थोडे महाग आहे; यापेक्षा स्वस्त पर्याय आहे का?',hindi:'यह थोड़ा महँगा है; क्या इससे सस्ता विकल्प है?',english:'This is a little expensive; is there a cheaper option?'},
            {marathi:'खरेदी झाल्यावर कृपया मला पावती द्या.',hindi:'खरीदारी के बाद कृपया मुझे रसीद दीजिए।',english:'Please give me a receipt after the purchase.'}
        ],
        question:'What does “किंमत” mean?',options:['Receipt','Price','Money','Market'],answer:'Price'
    },
    travel: {
        title:'Travel and Transport', level:'Elementary', description:'Talk about tickets, journeys and transport.',
        words:[
            {marathi:'तिकीट',hindi:'टिकट',english:'Ticket'},{marathi:'प्रवास',hindi:'यात्रा',english:'Journey'},
            {marathi:'बस स्थानक',hindi:'बस स्टैंड',english:'Bus stop'},{marathi:'रेल्वे स्थानक',hindi:'रेलवे स्टेशन',english:'Railway station'},
            {marathi:'उशीर',hindi:'देर',english:'Late / delay'},{marathi:'आरक्षण',hindi:'आरक्षण',english:'Reservation'}
        ],
        sentences:[
            {marathi:'पुण्याला जाणारी पुढची बस किती वाजता सुटते?',hindi:'पुणे जाने वाली अगली बस कितने बजे निकलती है?',english:'What time does the next bus to Pune leave?'},
            {marathi:'मला मुंबईपर्यंत जाण्यासाठी एक तिकीट आरक्षित करायचे आहे.',hindi:'मुझे मुंबई तक जाने के लिए एक टिकट आरक्षित करना है।',english:'I would like to reserve one ticket to Mumbai.'},
            {marathi:'वाहतुकीमुळे ट्रेनला उशीर झाला, त्यामुळे मी थोडा उशिरा पोहोचेन.',hindi:'यातायात के कारण ट्रेन देर से है, इसलिए मैं थोड़ी देर से पहुँचूँगा/पहुँचूँगी।',english:'The train is delayed, so I will arrive a little late.'},
            {marathi:'माझे स्थानक आल्यावर कृपया मला सांगा.',hindi:'मेरा स्टेशन आने पर कृपया मुझे बता दीजिए।',english:'Please tell me when my station arrives.'}
        ],
        question:'What does “तिकीट” mean?',options:['Ticket','Journey','Station','Late'],answer:'Ticket'
    },
    health: {
        title:'Health and Asking for Help', level:'Elementary', description:'Learn respectful phrases for common needs and emergencies.',
        words:[
            {marathi:'डॉक्टर',hindi:'डॉक्टर',english:'Doctor'},{marathi:'औषध',hindi:'दवा',english:'Medicine'},
            {marathi:'वेदना',hindi:'दर्द',english:'Pain'},{marathi:'मदत',hindi:'मदद',english:'Help'},
            {marathi:'रुग्णालय',hindi:'अस्पताल',english:'Hospital'},{marathi:'आपत्कालीन',hindi:'आपातकालीन',english:'Emergency'}
        ],
        sentences:[
            {marathi:'माझे डोके दुखत आहे आणि मला डॉक्टरांना भेटायचे आहे.',hindi:'मेरे सिर में दर्द है और मुझे डॉक्टर से मिलना है।',english:'I have a headache and I need to see a doctor.'},
            {marathi:'कृपया मला जवळच्या रुग्णालयात जाण्यास मदत करा.',hindi:'कृपया मुझे पास के अस्पताल पहुँचने में मदद करें।',english:'Please help me get to the nearest hospital.'},
            {marathi:'हे औषध जेवणापूर्वी घ्यायचे आहे की जेवणानंतर?',hindi:'यह दवा खाने से पहले लेनी है या खाने के बाद?',english:'Should this medicine be taken before or after food?'},
            {marathi:'मला या औषधाची अॅलर्जी आहे, त्यामुळे कृपया डॉक्टरांना सांगा.',hindi:'मुझे इस दवा से एलर्जी है, इसलिए कृपया डॉक्टर को बताइए।',english:'I am allergic to this medicine, so please tell the doctor.'}
        ],
        question:'What does “रुग्णालय” mean?',options:['School','Hospital','Market','Station'],answer:'Hospital'
    },
    conversations: {
        title:'Longer Conversations', level:'Intermediate', description:'Combine phrases to explain needs, ask follow-up questions and respond politely.',
        words:[
            {marathi:'कारण',hindi:'क्योंकि',english:'Because'},{marathi:'म्हणून',hindi:'इसलिए',english:'Therefore / so'},
            {marathi:'कदाचित',hindi:'शायद',english:'Perhaps'},{marathi:'खरं तर',hindi:'दरअसल',english:'Actually'},
            {marathi:'मला वाटते',hindi:'मुझे लगता है',english:'I think'},{marathi:'तरीसुद्धा',hindi:'फिर भी',english:'Nevertheless'}
        ],
        sentences:[
            {marathi:'मला मराठी शिकायची आहे कारण मला माझ्या शेजाऱ्यांशी सहज बोलता यावे.',hindi:'मैं मराठी सीखना चाहता/चाहती हूँ क्योंकि मैं अपने पड़ोसियों से आसानी से बात कर सकूँ।',english:'I want to learn Marathi because I want to speak comfortably with my neighbours.'},
            {marathi:'तुम्ही हळू बोललात तर मला प्रत्येक शब्द समजून घेण्यास मदत होईल.',hindi:'अगर आप धीरे बोलेंगे तो मुझे हर शब्द समझने में मदद मिलेगी।',english:'If you speak slowly, it will help me understand every word.'},
            {marathi:'मला हा शब्द माहीत नाही, पण तुम्ही उदाहरण दिलेत तर मी त्याचा अर्थ समजू शकतो/शकते.',hindi:'मुझे यह शब्द नहीं पता, लेकिन अगर आप उदाहरण देंगे तो मैं इसका अर्थ समझ सकता/सकती हूँ।',english:'I do not know this word, but if you give an example, I may understand its meaning.'},
            {marathi:'आज वेळ कमी आहे, तरीसुद्धा मी नवीन वाक्यांचा सराव करण्यासाठी दहा मिनिटे काढणार आहे.',hindi:'आज समय कम है, फिर भी मैं नए वाक्यों का अभ्यास करने के लिए दस मिनट निकालूँगा/निकालूँगी।',english:'I have little time today; nevertheless, I will set aside ten minutes to practise new sentences.'}
        ],
        question:'What does “कारण” mean?',options:['Because','Tomorrow','Ticket','Window'],answer:'Because'
    },
    storytelling: {
        title:'Tell a Short Story', level:'Intermediate', description:'Read a short connected passage and practise understanding a sequence of events.',
        words:[
            {marathi:'एके दिवशी',hindi:'एक दिन',english:'One day'},{marathi:'त्यानंतर',hindi:'उसके बाद',english:'After that'},
            {marathi:'शेवटी',hindi:'आखिर में',english:'Finally'},{marathi:'आनंदाने',hindi:'खुशी से',english:'Happily'}
        ],
        sentences:[
            {marathi:'एके दिवशी रिया बाजारात जात असताना तिला रस्त्याच्या कडेला एक लहान कुत्र्याचे पिल्लू दिसले.',hindi:'एक दिन जब रिया बाज़ार जा रही थी, तो उसे सड़क के किनारे एक छोटा पिल्ला दिखाई दिया।',english:'One day, while Riya was going to the market, she saw a small puppy beside the road.'},
            {marathi:'तिने पिल्लाला पाणी दिले आणि जवळच्या दुकानदाराला त्याच्या मालकाबद्दल विचारले.',hindi:'उसने पिल्ले को पानी दिया और पास के दुकानदार से उसके मालिक के बारे में पूछा।',english:'She gave the puppy some water and asked a nearby shopkeeper about its owner.'},
            {marathi:'थोड्या वेळाने पिल्लाचा मालक तिथे आला आणि त्याने रियाचे मनापासून आभार मानले.',hindi:'कुछ देर बाद पिल्ले का मालिक वहाँ आया और उसने रिया को दिल से धन्यवाद दिया।',english:'After a while, the puppy’s owner arrived and thanked Riya sincerely.'},
            {marathi:'शेवटी रिया आनंदाने घरी परतली कारण तिने एका गरजू प्राण्याला मदत केली होती.',hindi:'आखिर में रिया खुशी से घर लौटी क्योंकि उसने एक ज़रूरतमंद जानवर की मदद की थी।',english:'Finally, Riya returned home happily because she had helped an animal in need.'}
        ],
        question:'Why did Riya feel happy?',options:['She helped a puppy','She bought a book','She missed the bus','She went to school'],answer:'She helped a puppy'
    },
    opinions: {
        title:'Share Your Opinion', level:'Intermediate', description:'Explain preferences, give reasons and compare ideas.',
        words:[
            {marathi:'मते',hindi:'राय',english:'Opinions'},{marathi:'फायदा',hindi:'फ़ायदा',english:'Benefit'},
            {marathi:'तोटा',hindi:'नुकसान',english:'Disadvantage'},{marathi:'उदाहरण',hindi:'उदाहरण',english:'Example'},
            {marathi:'तुलना',hindi:'तुलना',english:'Comparison'},{marathi:'निवड',hindi:'चुनाव',english:'Choice'}
        ],
        sentences:[
            {marathi:'माझ्या मते, रोज थोडा सराव केल्याने नवीन भाषा शिकणे सोपे होते.',hindi:'मेरी राय में, रोज़ थोड़ा अभ्यास करने से नई भाषा सीखना आसान हो जाता है।',english:'In my opinion, practising a little every day makes learning a new language easier.'},
            {marathi:'व्हिडिओ पाहण्याचा फायदा असा आहे की आपण शब्द ऐकू शकतो आणि त्यांचे उच्चार पाहू शकतो.',hindi:'वीडियो देखने का लाभ यह है कि हम शब्द सुन सकते हैं और उनका उच्चारण देख सकते हैं।',english:'One benefit of watching videos is that we can hear words and observe their pronunciation.'},
            {marathi:'पुस्तकांमधून शिकणे उपयोगी आहे, परंतु संभाषणाचा सराव केल्याने आत्मविश्वासही वाढतो.',hindi:'किताबों से सीखना उपयोगी है, लेकिन बातचीत का अभ्यास करने से आत्मविश्वास भी बढ़ता है।',english:'Learning from books is useful, but conversation practice also builds confidence.'},
            {marathi:'प्रत्येक विद्यार्थ्याची शिकण्याची पद्धत वेगळी असते, म्हणून स्वतःला योग्य वाटणारी पद्धत निवडावी.',hindi:'हर विद्यार्थी का सीखने का तरीका अलग होता है, इसलिए अपने लिए सही तरीका चुनना चाहिए।',english:'Every learner has a different learning style, so each person should choose a method that suits them.'}
        ],
        question:'What does “उदाहरण” mean?',options:['Example','Disadvantage','Choice','Opinion'],answer:'Example'
    },
    realLife: {
        title:'Real-Life Problem Solving', level:'Advanced', description:'Practise longer, polite sentences for explaining a problem and asking for a solution.',
        words:[
            {marathi:'समस्या',hindi:'समस्या',english:'Problem'},{marathi:'उपाय',hindi:'समाधान',english:'Solution'},
            {marathi:'शक्य असल्यास',hindi:'यदि संभव हो',english:'If possible'},{marathi:'कृपया लक्ष द्या',hindi:'कृपया ध्यान दें',english:'Please pay attention'},
            {marathi:'गैरसमज',hindi:'गलतफ़हमी',english:'Misunderstanding'},{marathi:'स्पष्ट करणे',hindi:'स्पष्ट करना',english:'To clarify'}
        ],
        sentences:[
            {marathi:'माफ करा, मला दिलेला पत्ता समजण्यात अडचण येत आहे; कृपया जवळची ओळखण्यासारखी जागा सांगू शकाल का?',hindi:'माफ़ कीजिए, मुझे दिया गया पता समझने में कठिनाई हो रही है; क्या आप पास की कोई पहचानने योग्य जगह बता सकते हैं?',english:'Excuse me, I am having trouble understanding the address I was given; could you tell me a nearby landmark?'},
            {marathi:'मी तुमचे म्हणणे समजून घेण्याचा प्रयत्न करत आहे, पण कृपया शेवटचा भाग आणखी एकदा स्पष्ट कराल का?',hindi:'मैं आपकी बात समझने की कोशिश कर रहा/रही हूँ, लेकिन क्या आप कृपया आखिरी भाग एक बार और स्पष्ट करेंगे?',english:'I am trying to understand what you mean, but could you please clarify the last part once more?'},
            {marathi:'शक्य असल्यास, मला ही माहिती लिहून द्या जेणेकरून मी ती नंतर पुन्हा वाचू शकेन.',hindi:'यदि संभव हो, तो यह जानकारी लिख दीजिए ताकि मैं इसे बाद में फिर से पढ़ सकूँ।',english:'If possible, please write this information down so that I can read it again later.'},
            {marathi:'आपल्यात गैरसमज झाला असेल तर आपण शांतपणे बोलून योग्य उपाय शोधू शकतो.',hindi:'अगर हमारे बीच कोई गलतफ़हमी हुई है, तो हम शांति से बात करके सही समाधान ढूँढ सकते हैं।',english:'If there has been a misunderstanding between us, we can talk calmly and find a suitable solution.'}
        ],
        question:'What does “उपाय” mean?',options:['Solution','Problem','Choice','Morning'],answer:'Solution'
    }
};
Object.assign(lessonData, additionalLessonData);
const orderedLessonIds = [
    'greetings','introduction','family','numbers','food','daily',
    'colours','home','school','dailyRoutine','directions','shopping',
    'travel','health','conversations','storytelling','opinions','realLife'
];


function loadVocabulary() {
    const grid = document.getElementById('vocabGrid');
    const filters = document.getElementById('vocabFilters');
    const search = document.getElementById('vocabSearch');
    const count = document.getElementById('vocabCount');
    const empty = document.getElementById('vocabEmpty');
    if (!grid || !filters) return;

    const categories = ['All', '⭐ Favourites', ...new Set(vocabularyData.map(item => item.category))];
    let activeCategory = 'All';
    const getFavourites = () => JSON.parse(localStorage.getItem('borashaFavouriteWords') || '[]');
    const safe = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

    filters.innerHTML = categories.map(category =>
        `<button class="vocab-filter ${category === 'All' ? 'active' : ''}" data-category="${safe(category)}">${safe(category)}</button>`
    ).join('');

    function render() {
        const query = (search?.value || '').trim().toLowerCase();
        const favourites = getFavourites();
        const filtered = vocabularyData.filter(item => {
            const matchesCategory = activeCategory === 'All' ||
                (activeCategory === '⭐ Favourites' ? favourites.includes(item.marathi) : item.category === activeCategory);
            const text = [item.english, item.hindi, item.marathi, item.pronunciation, item.category].join(' ').toLowerCase();
            return matchesCategory && text.includes(query);
        });

        grid.innerHTML = filtered.map(item => {
            const saved = favourites.includes(item.marathi);
            return `<div class="vocab-card">
                <span class="vocab-category">${safe(item.category)}</span>
                <div class="word">${safe(item.marathi)}</div>
                <div class="word-meta">Hindi: ${safe(item.hindi)}</div>
                <div class="word-meta">English: ${safe(item.english)}</div>
                <div class="word-meta">Pronunciation: ${safe(item.pronunciation)}</div>
                <button class="btn btn-secondary vocab-listen" type="button" data-marathi="${safe(item.marathi)}">🔊 Listen</button>
                <button class="btn btn-secondary vocab-favourite" type="button" data-marathi="${safe(item.marathi)}" aria-pressed="${saved}">${saved ? '★ Saved' : '☆ Save word'}</button>
            </div>`;
        }).join('');

        count.textContent = `${filtered.length} words • ${favourites.length} saved`;
        empty.hidden = filtered.length !== 0;
    }

    filters.addEventListener('click', function(event) {
        const button = event.target.closest('.vocab-filter');
        if (!button) return;
        activeCategory = button.dataset.category;
        filters.querySelectorAll('.vocab-filter').forEach(item => item.classList.toggle('active', item === button));
        render();
    });
    grid.addEventListener('click', function(event) {
        const listen = event.target.closest('.vocab-listen');
        if (listen) {
            speakText(listen.dataset.marathi, 'mr-IN');
            localStorage.setItem('borashaLastActivity', new Date().toISOString());
            return;
        }
        const favourite = event.target.closest('.vocab-favourite');
        if (!favourite) return;
        const word = favourite.dataset.marathi;
        const updated = getFavourites();
        const index = updated.indexOf(word);
        if (index >= 0) updated.splice(index, 1); else updated.push(word);
        localStorage.setItem('borashaFavouriteWords', JSON.stringify(updated));
        render();
    });
    if (search) search.addEventListener('input', render);
    render();
}

function shuffleItems(items) { return [...items].sort(() => Math.random() - 0.5); }

function buildQuizQuestions(category = 'all') {
    const questions = [];
    const words = typeof vocabularyData !== 'undefined' ? vocabularyData : [];
    const lessonSentences = Object.values(lessonData).flatMap(lesson => lesson.sentences || []);
    if (category === 'all' || category === 'lessons') {
        Object.entries(lessonData).forEach(([lessonId, lesson]) => {
            (lesson.words || []).forEach(word => {
                const answer = word.english;
                const wrong = shuffleItems(words.map(item => item.english).filter(value => value && value !== answer));
                const options = shuffleItems([answer, ...[...new Set(wrong)].slice(0, 3)]);
                if (options.length === 4) questions.push({question:'In "' + lesson.title + '", what does “' + word.marathi + '” mean?', options, answer, source:'lessons', topic:lesson.title});
            });
            (lesson.sentences || []).forEach(sentence => {
                const answer = sentence.english;
                const wrong = shuffleItems(lessonSentences.map(item => item.english).filter(value => value && value !== answer));
                const options = shuffleItems([answer, ...[...new Set(wrong)].slice(0, 3)]);
                if (options.length === 4) questions.push({question:'Choose the English meaning of: “' + sentence.marathi + '”', options, answer, source:'lessons', topic:lesson.title});
            });
        });
    }
    if (category === 'all' || category === 'vocabulary') {
        words.forEach(word => {
            const answer = word.english;
            const wrong = shuffleItems(words.map(item => item.english).filter(value => value && value !== answer));
            const options = shuffleItems([answer, ...[...new Set(wrong)].slice(0, 3)]);
            if (options.length === 4) questions.push({question:'What does the Marathi vocabulary word “' + word.marathi + '” mean?', options, answer, source:'vocabulary', topic:word.category});
        });
    }
    return shuffleItems(questions);
}

let quizQuestions = buildQuizQuestions('all');
let currentPracticeIndex = 0;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = 0;
let activeQuizCategory = 'all';

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

function saveQuizScore(score, total, category = 'all') {
    const record = { score, total, date: new Date().toISOString() };
    localStorage.setItem('borashaQuizScore', JSON.stringify(record));
    localStorage.setItem('borashaQuizScore_' + category, JSON.stringify(record));
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
    if (title) title.textContent = (config.level ? config.level + ' • ' : '') + config.title;
    if (description) description.textContent = config.description;

    if (wordList) {
        wordList.innerHTML = config.words.map(word => `
            <div class="word-item">
                <div class="marathi">${word.marathi}</div>
                <p class="meta">Hindi: ${word.hindi}</p>
                <p class="meta">English: ${word.english}</p>
                <button class="btn btn-secondary lesson-listen" type="button">🔊 Listen</button>
            </div>
        `).join('');
        wordList.querySelectorAll('.lesson-listen').forEach((button,index) => {
            button.addEventListener('click', () => speakText(config.words[index].marathi, 'mr-IN'));
        });
    }

    if (sentenceList) {
        sentenceList.innerHTML = config.sentences.map(sentence => `
            <div class="sentence-item">
                <p><strong>${sentence.marathi}</strong></p>
                <p>Hindi: ${sentence.hindi}</p>
                <p>English: ${sentence.english}</p>
                <button class="btn btn-secondary sentence-listen" type="button">🔊 Listen</button>
            </div>
        `).join('');
        sentenceList.querySelectorAll('.sentence-listen').forEach((button,index) => {
            button.setAttribute('aria-label', 'Listen to Marathi sentence: ' + config.sentences[index].english);
            button.addEventListener('click', () => {
                const sentence = config.sentences[index];
                // Speak the complete sentence, not just an individual word.
                speakText(sentence.marathi, 'mr-IN');
            });
        });
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
    localStorage.setItem('borashaLastActivity', new Date().toISOString());
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
    localStorage.setItem('borashaSpeakingItemsPractised', String(Number(localStorage.getItem('borashaSpeakingItemsPractised') || 0) + 1));
    localStorage.setItem('borashaLastActivity', new Date().toISOString());

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

async function loadBorashaOCR() {
    if (window.Tesseract) return window.Tesseract;
    if (window.borashaOCRLoading) return window.borashaOCRLoading;

    window.borashaOCRLoading = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
        script.onload = () => resolve(window.Tesseract);
        script.onerror = () => reject(new Error('Could not load image text reader.'));
        document.head.appendChild(script);
    });
    return window.borashaOCRLoading;
}

async function readTextFromImage(file) {
    const status = document.getElementById('imageStatus');
    const input = document.getElementById('translationInput');
    const result = document.getElementById('translationResult');
    if (status) status.textContent = 'Reading text from image... Please wait.';
    if (result) result.textContent = 'Reading text from image...';

    try {
        const Tesseract = await loadBorashaOCR();
        const worker = await Tesseract.createWorker('eng+hin+mar');
        const output = await worker.recognize(file);
        await worker.terminate();
        const extractedText = (output.data.text || '').replace(/\\s+/g, ' ').trim();

        if (!extractedText) {
            if (status) status.textContent = 'No text was found. Try a clearer, well-lit image with readable text.';
            if (result) result.textContent = 'No readable text found in this image. Try another image or type the text.';
            return;
        }

        if (input) input.value = extractedText;
        if (status) status.textContent = 'Text found. Translating now...';
        await translateText();
        if (status) status.textContent = 'Text extracted from image. You can edit it in the text box and translate again.';
    } catch (error) {
        console.error('Borasha image text reading error:', error);
        if (status) status.textContent = 'Could not read this image. Check your internet connection and try a clear image.';
        if (result) result.textContent = 'Image text reading failed. You can still type the text in the box and translate it.';
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

    if (window.borashaImageUrl) URL.revokeObjectURL(window.borashaImageUrl);
    window.borashaImageUrl = URL.createObjectURL(file);
    preview.src = window.borashaImageUrl;
    preview.alt = 'Selected image preview';
    previewBox.hidden = false;

    if (status) status.textContent = 'Image selected. Reading text...';
    preview.onerror = function () {
        preview.removeAttribute('src');
        if (status) status.textContent = 'The image could not be previewed. Please try another image.';
    };

    // Automatically extract text and translate it after selecting/capturing an image.
    readTextFromImage(file);
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

    // Live camera access requires HTTPS/localhost and browser permission.
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        useCameraUploadFallback();
        return;
    }

    try {
        window.borashaCameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: { ideal: 'environment' } },
            audio: false
        });
        video.srcObject = window.borashaCameraStream;
        box.hidden = false;
        await video.play();
    } catch (error) {
        console.warn('Live camera unavailable; opening device camera/upload fallback.', error);
        useCameraUploadFallback();
    }
}

function useCameraUploadFallback() {
    // On devices/browsers without live camera support, offer the native camera picker.
    const upload = document.getElementById('imageUpload');
    if (!upload) {
        alert('Camera is unavailable in this browser. Please use Upload to select a photo.');
        return;
    }
    upload.setAttribute('capture', 'environment');
    upload.click();
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

async function requestTranslation(text, source, target) {
    const url = 'https://api.mymemory.translated.net/get?q=' +
        encodeURIComponent(text) + '&langpair=' + encodeURIComponent(source + '|' + target);
    const response = await fetch(url);
    if (!response.ok) throw new Error('Translation service unavailable.');
    const data = await response.json();
    if (data.responseStatus !== 200 || !data.responseData || !data.responseData.translatedText) {
        throw new Error('No translation returned.');
    }
    return data.responseData.translatedText;
}

async function translateText() {
    const input = document.getElementById('translationInput');
    const result = document.getElementById('translationResult');
    const listenButton = document.getElementById('speakTranslationBtn');
    if (!input || !result) return;

    const text = input.value.trim();
    if (!text) {
        result.textContent = 'Please enter a word or sentence.';
        if (listenButton) listenButton.hidden = true;
        return;
    }

    result.textContent = 'Translating... Please wait.';
    if (listenButton) listenButton.hidden = true;

    // Devanagari text may be Marathi or Hindi. Translate it to English.
    // English text is translated into both Marathi and Hindi.
    const hasDevanagari = /[\u0900-\u097F]/.test(text);
    try {
        let lines;
        if (hasDevanagari) {
            const english = await requestTranslation(text, 'hi', 'en');
            const marathi = await requestTranslation(text, 'mr', 'en').catch(() => '');
            lines = ['English: ' + english];
            if (marathi && marathi.toLowerCase() !== english.toLowerCase()) {
                lines.push('Possible Marathi meaning in English: ' + marathi);
            }
        } else {
            const [marathi, hindi] = await Promise.all([
                requestTranslation(text, 'en', 'mr'),
                requestTranslation(text, 'en', 'hi')
            ]);
            lines = ['Marathi: ' + marathi, 'Hindi: ' + hindi];
        }
        result.textContent = lines.join(' | ');
        if (listenButton) {
            listenButton.hidden = false;
            listenButton.onclick = speakTranslationResult;
        }
    } catch (error) {
        console.error('Translation error:', error);
        result.textContent = 'Translation service is unavailable right now. Please check your internet connection and try again.';
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
    const categorySelect = document.getElementById('quizCategory');
    const countEl = document.getElementById('quizCount');
    if (!questionEl || !optionsEl || !resultEl || !nextBtn) return;

    function startQuiz() {
        activeQuizCategory = categorySelect ? categorySelect.value : 'all';
        quizQuestions = buildQuizQuestions(activeQuizCategory).slice(0, 10);
        quizIndex = 0; quizScore = 0; quizAnswered = 0;
        nextBtn.disabled = false;
        showQuestion();
    }
    function showQuestion() {
        const current = quizQuestions[quizIndex];
        if (!current) {
            questionEl.textContent = 'Quiz complete!';
            optionsEl.innerHTML = '';
            resultEl.textContent = 'Final score: ' + quizScore + ' / ' + quizAnswered;
            saveQuizScore(quizScore, quizAnswered, activeQuizCategory);
            nextBtn.disabled = true;
            if (countEl) countEl.textContent = 'Completed ' + quizAnswered + ' questions';
            return;
        }
        questionEl.textContent = 'Question ' + (quizIndex + 1) + ' of ' + quizQuestions.length + ': ' + current.question;
        optionsEl.innerHTML = current.options.map(option => '<button class="quiz-option" data-answer="' + option.replace(/"/g, '&quot;') + '">' + option + '</button>').join('');
        resultEl.textContent = '';
        if (countEl) countEl.textContent = activeQuizCategory === 'lessons' ? 'Lesson practice' : activeQuizCategory === 'vocabulary' ? 'Vocabulary practice' : 'Mixed practice';
        optionsEl.querySelectorAll('.quiz-option').forEach(button => button.addEventListener('click', () => {
            if (button.disabled) return;
            quizAnswered++;
            if (button.dataset.answer === current.answer) {
                quizScore++;
                resultEl.textContent = 'Correct! • ' + current.topic;
                resultEl.className = 'quiz-result success';
            } else {
                resultEl.textContent = 'Not quite. Correct answer: ' + current.answer;
                resultEl.className = 'quiz-result error';
            }
            optionsEl.querySelectorAll('.quiz-option').forEach(item => {
                item.disabled = true;
                if (item.dataset.answer === current.answer) item.classList.add('correct');
            });
        }));
    }
    if (categorySelect) categorySelect.addEventListener('change', startQuiz);
    nextBtn.addEventListener('click', () => { if (quizIndex < quizQuestions.length) { quizIndex++; showQuestion(); } });
    startQuiz();
}

function updateProgressUI() {
    const streakEl = document.getElementById('learningStreak');
    const speakingEl = document.getElementById('speakingPracticeCount');
    const favouritesEl = document.getElementById('savedWordsCount');
    if (streakEl) streakEl.textContent = (localStorage.getItem('borashaLearningStreak') || '0') + ' days';
    if (speakingEl) speakingEl.textContent = localStorage.getItem('borashaSpeakingItemsPractised') || '0';
    if (favouritesEl) favouritesEl.textContent = JSON.parse(localStorage.getItem('borashaFavouriteWords') || '[]').length;
    const completedLessons = JSON.parse(localStorage.getItem('borashaCompletedLessons') || '[]');
    const savedScore = JSON.parse(localStorage.getItem('borashaQuizScore') || '{"score":0,"total":0}');
    const lessonQuiz = JSON.parse(localStorage.getItem('borashaQuizScore_lessons') || '{"score":0,"total":0}');
    const vocabQuiz = JSON.parse(localStorage.getItem('borashaQuizScore_vocabulary') || '{"score":0,"total":0}');
    const lessonQuizEl = document.getElementById('lessonQuizScore');
    const vocabQuizEl = document.getElementById('vocabularyQuizScore');
    if (lessonQuizEl) lessonQuizEl.textContent = lessonQuiz.score + ' / ' + lessonQuiz.total;
    if (vocabQuizEl) vocabQuizEl.textContent = vocabQuiz.score + ' / ' + vocabQuiz.total;

    const completedEl = document.getElementById('completedLessonsCount');
    const quizTextEl = document.getElementById('quizScoreText');
    const levelEl = document.getElementById('learningLevel');
    const progressEl = document.getElementById('overallProgress');

    if (completedEl) completedEl.textContent = completedLessons.length;
    if (quizTextEl) quizTextEl.textContent = savedScore.score + ' / ' + savedScore.total;

    const totalUnits = Math.max(Object.keys(lessonData).length + 10, 1);
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
    recordBorashaVisit();
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
