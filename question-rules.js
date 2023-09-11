// Questions that will be asked
const Questions = [{
	// q: "What did Aparna say?",
	a: [{ text: "Time will always be on my side", isCorrect: true },
	{ text: "I'm tired of feeling like I'm f***ing crazy", isCorrect: false },
	{ text: "He hit me and it felt like a kiss", isCorrect: false },
	{ text: "Money is the anthem, of success", isCorrect: false }
	]

},
{
	// q: "What is the capital of Thailand?",
	a: [{ text: "But you are unfixable, I can't break through your world", isCorrect: false, isSelected: false },
	{ text: "But I lost myself when I lost you", isCorrect: false },
	{ text: "There's something in the wind, I can feel it blowing in", isCorrect: false },
	{ text: "In my garden he's a dead plant", isCorrect: true }
	]

},
{
	// q: "What is the capital of Gujarat",
	a: [{ text: "If you're not drinkin', then you're not playing", isCorrect: false },
	{ text: "We both know that it's not fashionable to love me", isCorrect: false },
	{ text: "There are times when you must get on your knees and pray, but not today", isCorrect: true },
	{ text: "Life is beautiful, but you don't have a clue", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
