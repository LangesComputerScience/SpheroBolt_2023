//Programmer: Mr. Lange
//Date: 1.10.2024
//Program: Sphero Bolt Testing
//Bolt ID: 6B78

async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}