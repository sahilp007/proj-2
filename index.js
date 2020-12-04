var readlineSync = require('readline-sync')

var username = readlineSync.question("Heyy!!!\nWhat would you liked to be called?\n")
console.log("\nWelcome " + username)

//Leaderboard

let lb =
	[
		{
			name: "Blah1",
			points: 5
		},
		{
			name: "Blah3",
			points: 3
		},
		{
			name: "Blah2",
			points: 6
		}
	]

console.log("\nLet's see if you make it to the Top of this leaderboard\n");
console.log(lb);
var score = 0


function check(pre, user) {
	if (pre.toLowerCase() === user.toLowerCase()) {
		score++
		console.log("Wow!!! \nYou guessed it right.");
	}
	else {
		console.log("Incorrect.\nAt least you tried...");
	}
	console.log("Your Score is:" + score + "\n")
}

var ques = [
	{
		q: "How many straight edges does a cube have?\n",
		a: "a",
		o: "[a] 12\n[b] 18\n[c] 16\n[d] 8\n"
	},
	{
		q: "Who hunts most, the male or female lion?\n",
		a: "b",
		o: "[a] Male\n[b] Female\n"
	},
	{
		q: "What is the 'Land of the Rising Sun'?\n",
		a: "d",
		o: "[a] China\n[b] India\n[c] Taiwan\n[d] Japan\n"
	},
	{
		q: "Which is  the Tallest Mountain in the World?\n",
		a: "d",
		o: "[a] Mount Everest\n[b] K2\n[c] Mont Blanc\n[d] Mauna Kea\n"
	},
	{
		q: "Where is Sahara Dessert Located?\n",
		a: "b",
		o: "[a] India\n[b] Africa\n[c] Australia \n[d] Egypt\n"
	},
	{
		q: "What percentage of the Brain do we Use?\n",
		a: "d",
		o: "[a] 10%\n[b] Less than 10%\n[c] More than 10%\n[d] More than 90%\n[e] 100%\n"
	},
	{
		q: "The Capital of Australia is?\n",
		a: "b",
		o: "[a] Sydney\n[b] Canberra\n[c] Washington DC\n[d] Melbourne\n"
	},
]

for (var i = 0; i < ques.length; i++) {
	console.log(ques[i].q + ques[i].o)
	var u = readlineSync.question()
	check(ques[i].a, u)
}
lb[lb.length]={name:username, points: score}

lb.sort((a, b) => (a.points < b.points) ? 1 : -1)
console.log(lb)


if (score >= lb[0].points) {
	console.log("\nYay! You Nailed It");
}
else {
	console.log("\nBetter Luck next Time");

}