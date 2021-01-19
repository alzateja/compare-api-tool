import { allPass, ifElse } from 'ramda';

//  We define a bunch of functions that destructure args from our student data.
const hasHighEnoughGPA = ({ gpa }) => gpa >= 2.5;
const hasEnoughCredits = ({ credits }) => credits >= 48;
const hasNoAccountBalance = ({ accountBalance }) => accountBalance === 0;
const congratulationsText = ({ name, degree }) =>
  `Congratulations ${name}! You have completed the requirements for a ${degree}.`;

const notYetText = ({ name, degree }) => `Sorry ${name}. You have not yet completed the requirements for a ${degree}.`;

// This is equivalent to our common data structure approach.
const checkGraduationStatus = ifElse(
  allPass([hasHighEnoughGPA, hasEnoughCredits, hasNoAccountBalance]),
  congratulationsText,
  notYetText,
);
