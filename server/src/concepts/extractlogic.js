// Our imperative code for a student registration. This is super messy.
const studentRegistration = (student, creditsTaken, course) => {
  if (student.age > 18 && student.balance === 0 && creditsTaken >= 12 && creditsTaken <= 24) {
    if (course.seatsAvailable > 0) {
      return registerStudentForCourse(course)
        .then((res) => {
          if (res.assignedSection === true) {
            return 'Course registered - Assigned to :' + res.sectionAssigned;
          } else {
            return 'Course registered - Awaiting Assignment';
          }
        })
        .catch((error) => 'we encountered an error ' + error);
    } else {
      return 'No seats are available!';
    }
  }
  return 'You are not eligible to enroll';
};

/* Refactoring to make it more readable.
We extract to variables or new functions as needed.
*/
const wasSuccessfulRegistration = (response) => {
  const wasAssignedSection = res.assignedSection === true;

  if (wasAssignedSection) {
    return 'Course registered - Assigned to :' + response.sectionAssigned;
  }
  return 'Course registered - Awaiting Assignment';
};

const wasFailedRegistration = (error) => 'we encountered an error ' + error;

const studentRegistration = (student, creditsTaken, course) => {
  const isLegalAge = student.age > 18;
  const hasNoOutstandingBalance = student.balance === 0;
  const isFullTimeStudent = creditsTaken > 12;
  const hasNotReachedLimit = creditsTaken <= 24;
  const isFullTimeStudentWithinLimits = isFullTimeStudent && hasNotReachedLimit;

  const courseHasAvailableSeats = course.seatsAvailable > 0;

  if (isLegalAge && hasNoOutstandingBalance && isFullTimeStudentWithinLimits) {
    if (courseHasAvailableSeats) {
      return registerStudentForCourse(course)
        .then((res) => wasSuccessfulRegistration(res))
        .catch((error) => wasFailedRegistration(error));
    } else {
      return 'No seats are available!';
    }
  }
  return 'You are not eligible to enroll';
};
