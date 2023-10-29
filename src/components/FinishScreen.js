function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🏅️";
  if (percentage >= 80 && percentage < 100) emoji = "🥳️";
  if (percentage >= 50 && percentage < 80) emoji = "🙃️";
  if (percentage >= 0 && percentage < 50) emoji = "🤔️";
  if (percentage === 0) emoji = "🤦‍♀️️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> Você marcou <strong>{points}</strong> de{" "}
        {maxPossiblePoints} pontos ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Maior pontuação: {highscore} pontos)</p>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "restart",
          })
        }
      >
        Reiniciar o Quiz
      </button>
    </>
  );
}

export default FinishScreen;
