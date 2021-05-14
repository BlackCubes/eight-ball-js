const randomQuestion = (...questions) => {
  const randomSelection = Math.floor(Math.random() * questions.length);

  return questions[randomSelection];
};

export default randomQuestion;
