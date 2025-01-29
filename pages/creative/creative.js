// Daily Inspiration from Nepali Poets & Songwriters
const quotes = [
    "हामी नफर्कने भो, फिर्ता नभएका बाटोहरू हिँडेर - नरेश खरेल",
    "तिमी बिना मेरो जीवन अधुरो लाग्छ - नारायण गोपाल",
    "बाँच्नै परेछ जिन्दगीले, हास्नै परेछ बाध्यताले - रामकृष्ण ढकाल",
    "बुझ्न सके जिन्दगी, सजिलो त होला नि - दीप श्रेष्ठ",
    "कति माया लाएछु, कति तिमी बुझ्दिनौ - राई इशान",
    "तिमी बिना जिउनु भनेको, श्वास नलिइ बाँच्नु जस्तै हो - अनी मोक्तान",
    "यस्तो जीवनमा, न कुनै मेलो, न कुनै यत्रा, बस निष्ठा र प्रेमका बलमा चल्ने - शंकर लामिछाने",
    "जीवनको संघर्षसँग लड्नको लागि हामी सबैलाई सुत्नु आवश्यक छ, त्यसपछि मात्र उभिन सकिन्छ - हरि ढकाल",
    "त्यो प्रीतिको खुसी र दुःखसँग जिउनु भनेको जीवनको साँचो अनुभव हो - सुवास भट्टराई",
    "सम्झना र पिरमा साँचिएको एक आत्मा जस्तो मैले भनेको, न सम्झिन सक्छु न भुल्न सक्छु - अम्बिका शर्मा",
    "तिमीलाई मैले भनेको, हाम्रा किस्सा धेरै छन्, सुन्ने भनेको, यो जीवन संगी साथी भएको छ - बिन्दु सिग्देल",
    "आफ्नो संघर्षको रंगिनतामा सत्य र विश्वास पाउन हामीले महत्त्व दिनु पर्छ - डा. रामकृष्ण महर्जन",
    "आशा र यथार्थको बीचको फरक, त्यो पथ हो जुन हामीले दिनदिनै यात्रा गर्छौं - गीतिका तामाङ",
    "एकपटक प्रेम गरेका भावनामा तपाईलाई थाहा हुने छैन, साँचो प्रेम के हो भनेर - सिद्धार्थ रिमाल",
    "हाम्रो जोस र हिम्मतले नै हामीलाई आफूसँग जुदाउँछ, हाम्रो सपना पुरा गर्नु छ - पूजा नेपाल",
    "तिमीलाई सम्झेर हामी जिन्दगीका रंगीन सपनामा पुग्ने छौं - पवित्रा गिरी"
];


function loadDailyQuote() {
    const today = new Date().getDate();
    const quote = quotes[today % quotes.length];
    document.getElementById("quote").innerText = quote;
}

window.onload = loadDailyQuote;

// Random Song Prompts
const prompts = [
    "Write a song about a childhood memory",
    "Describe your perfect day in lyrics",
    "A song about missing someone far away",
    "A song about the beauty of Nepali nature",
    "Write from the perspective of an old person giving advice",
    "A heartbreak song that ends with hope",
    "Imagine a conversation between you and your past self"
];

function generateSongPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    document.getElementById("prompt-result").innerText = prompts[randomIndex];
}

// Chord Progression Generator
const chordProgressions = {
    sad: ["Am - F - C - G", "Dm - G - C - Am", "Em - C - G - D"],
    angry: ["E - G - D - A", "Bm - F# - A - E", "D - Bb - G - F"],
    happy: ["C - G - Am - F", "D - G - Bm - A", "E - A - C#m - B"],
    loved: ["G - C - Em - D", "A - D - E - F#m", "C - Am - F - G"],
    frustrated: ["F#m - Bm - E - A", "Cm - G - D# - A#", "A - D - F#m - C"]
};

function generateChords(mood) {
    const randomIndex = Math.floor(Math.random() * chordProgressions[mood].length);
    document.getElementById("chord-result").innerText = `Try this: ${chordProgressions[mood][randomIndex]}`;
}
