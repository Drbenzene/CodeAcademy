let raceNumber = Math.floor(Math.random() * 1000);
const earlyOrLate = true;

const runnerAge = 15;

if (runnerAge > 18 && earlyOrLate) {
  AdultRaceNumber = raceNumber + 1000;
  }

if (runnerAge > 18 && earlyOrLate) {
  console.log("Your Race Start at 9:30 am and your Race Number is " + AdultRaceNumber);
}
else if (runnerAge > 18 && !earlyOrLate) {
  console.log("Your Race Start at 11:00 am and your Race Number is " + raceNumber)
}
else if (runnerAge < 18) {
  console.log("Your Race Start at 11:00 am and your Race Number is " + raceNumber)
}
else {
  console.log ("Please see the registration desk for more information")
}