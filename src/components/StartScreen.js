export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Bem vindo(a) ao QUIZ!</h2>
      <h3>{numQuestions} questões sobre Sustentabilidade</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Iniciar
      </button>
    </div>
  );
}
