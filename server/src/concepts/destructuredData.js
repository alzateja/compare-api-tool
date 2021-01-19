//  We define a bunch of functions that destructure args from our student data.
const hasHighEnoughGPA = ({ gpa }) => gpa >= 2.5;
const hasEnoughCredits = ({ credits }) => credits >= 48;
const hasNoAccountBalance = ({ accountBalance }) => accountBalance === 0;

const congratulationsText = ({ name, degree }) =>
  `Congratulations ${name}! You have met the requirements for a ${degree}.`;

  const notYetText = ({ name, degree }) =>
  `Sorry ${name}. You have not yet met the requirements for a ${degree}.`;

// We can now just pass along the same student object to all our files.
const checkGraduationStatus = (student) => {
  if (
      hasEnoughCredits(student) &&
      hasNoAccountBalance(student) &&
      hasHighEnoughGPA(student)
      ) {
    return congratulationsText(student);
  }
  return notYetText(student);
};
