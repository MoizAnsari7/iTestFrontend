const QuestionCard = ({ question }) => {
    return (
      <div className="question-card">
        <h2>{question.question}</h2>
        <p><strong>Type:</strong> {question.questionType}</p>
        <p><strong>Difficulty:</strong> {question.difficultyLevel}</p>
        <p><strong>Marks:</strong> {question.marks}</p>
        <p><strong>Created At:</strong> {new Date(question.createdAt).toLocaleString()}</p>
      </div>
    );
  };

  export default QuestionCard