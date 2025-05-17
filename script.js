const themeSelect = document.getElementById('theme');
const moodSelect = document.getElementById('mood');
const generateBtn = document.getElementById('generateBtn');
const poemDiv = document.getElementById('poem');

const defaultPrompt = "Write a 4-stanza romantic poem in a hopeful tone about spring and new beginnings.";

function generateAIPrompt(theme, mood) {
    return `Write a 4-stanza ${theme} poem in a ${mood} tone about spring and new beginnings.`;
}

// Mock AI poem generation function (replace with real API call)
function generatePoem(prompt) {
    // For demonstration, return a static poem with slight variation based on prompt
    return `In spring's embrace, new hopes arise,
The gentle breeze, a sweet surprise.
With blossoms bright and skies so clear,
A hopeful heart draws ever near.

The morning sun ignites the day,
Chasing all the clouds away.
Each petal sings a song anew,
Of love and life, forever true.

Beneath the trees, the lovers meet,
Their whispered dreams so soft, so sweet.
In every breath, a promise made,
That time and change shall not invade.

So let the springtime light your way,
And fill your soul with bright array.
For every end, a start is born,
In hopeful hearts, forever sworn.`;
}

function displayPoem(poem) {
    poemDiv.style.opacity = 0;
    poemDiv.textContent = '';
    const lines = poem.split('\n');
    let index = 0;

    function showNextLine() {
        if (index < lines.length) {
            poemDiv.textContent += lines[index] + '\n';
            poemDiv.style.opacity = 1;
            index++;
            setTimeout(showNextLine, 800);
        }
    }
    showNextLine();
}

generateBtn.addEventListener('click', () => {
    const theme = themeSelect.value;
    const mood = moodSelect.value;
    const prompt = generateAIPrompt(theme, mood);
    // In real app, call AI API here with prompt and get poem
    const poem = generatePoem(prompt);
    displayPoem(poem);
});
