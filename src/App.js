import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather project </h1>
        <Weather />
        <footer>
          This app was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ekaterina-romanenkova-9689b4211/"
            target="_blank"
            rel="noreferrer"
          >
            Rina R
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/Rina707S/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}
