import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    const res = await fetch("http://localhost:5000/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ repoUrl: url })
    });
    setResult(await res.json());
  };

  const repoName = url ? url.split("/").pop() : "";

  return (
    <div className="page">
      <div className="container">
        <h1>GitGrade <span>– Repository Mirror</span></h1>

        <p className="subtitle">
          AI-powered evaluation of GitHub repositories
        </p>

        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste GitHub repository URL"
        />

        <button onClick={analyze}>Analyze Repository</button>

        {result && (
          <div className="result-card">
            <h4>Score</h4>
            <div className="score-box">
              <span className="score">{result.score ?? "N/A"}</span>
              <span className="score-label">/ 100</span>
            </div>

            <div className="section">
              <h3>
                📘 Summary
                <span className="repo-name"> — {repoName}</span>
              </h3>
              <p className="summary-text">{result.summary}</p>
            </div>

            <div className="section">
              <h3>
                🛠 Personalized Roadmap
                <span className="repo-name"> — {repoName}</span>
              </h3>
              <ul className="roadmap">
                {result.roadmap?.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
