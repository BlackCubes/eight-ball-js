const randomAnswer = (...answers) => {
  const randomSelection = Math.floor(Math.random() * answers.length);

  return answers[randomSelection];
};

export default randomAnswer;
