export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Bem vindo(a) ao Quiz de Coleta Sustentável!</h2>
      <h3>{numQuestions} questões para testar o seu conhecimento</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Iniciar
      </button>
    </div>
  );
}
