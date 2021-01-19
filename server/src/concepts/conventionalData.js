//  We define a bunch of functions that take only the data they need.
const hasHighEnoughGPA = (gpa) => gpa >= 2.5;
const hasEnoughCredits = (credits) => credits >= 48;
const hasNoAccountBalance = (accountBalance) => accountBalance === 0;
const congratulationsText = (name, degree) =>
  `Congratulations ${name}! You have met the requirements for a ${degree}.`;

const notYetText = (name, degree) =>
  `Sorry ${name}. You have not yet met the requirements for a ${degree}.`;

// We now have a function that puts it all together.
const checkGraduationStatus = (student) => {
  const { credits, degree, accountBalance, name, gpa } = student;

  if (
      hasEnoughCredits(credits) &&
      hasNoAccountBalance(accountBalance)
      && hasHighEnoughGPA(gpa)) {
    return congratulationsText(name, degree);
  }
  return notYetText(name, degree);
};
// This is not bad but we can do better
