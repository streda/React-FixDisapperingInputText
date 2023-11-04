import { useState } from "react";

export default function App() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState("");

  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form text={text} setText={setText} />
      <button
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>
    </div>
  );
}

function Form({ text, setText }) {
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
