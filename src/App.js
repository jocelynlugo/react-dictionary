import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyord="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Jocelyn Lugo</small>
        </footer>
      </div>
    </div>
  );
}
