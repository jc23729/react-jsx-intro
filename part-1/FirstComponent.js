function firstComponent() {
    return <h1>My very first component</h1>;
}

function App() {
    return (
      <div>
        <FirstComponent />

      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"))