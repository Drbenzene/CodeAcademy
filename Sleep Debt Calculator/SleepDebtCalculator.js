function getSleepHours (day) {

  switch(day) {

    case 'Monday':
    return 6;
    break;
    case 'Tuesday':
    return 5;
    break;
    case 'Wednesday':
    return 8;
    break;
    case 'Thursday':
    return 4;
    break;
    case 'Friday':
    return 9;
    break;
    case 'Saturday':
    return 3;
    break;
    case 'Sunday':
    return 10;
    break;
    default:
    return('You have entered a invalid Day')
  }
};

//Get the Total Sleep
const getActualSleepHours = () => {
const sum = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
return sum;
};

function getIdealSleepHours () {
  const idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt () {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  const difference = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours ) {
    console.log("Welldone! You got the perfect amount of sleep. You have slept for" + actualSleepHours + "Hours");
  } 
  else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed! Get to work buddy. You are sleeping" + difference + " Hours more weekly");
  }
  else {
    console.log("You are overworking yourself! Get some rest Bro. You need Extra " + difference + " Hours of sleep weekly");
  }
}

calculateSleepDebt ()