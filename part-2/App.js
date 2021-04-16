function App() {
  return (
    <div>
      <Tweet
        name=" Matt Lane"
        username="mmmaattttt"
        date={new Date().toDateString()}
        message="This app will disrupt everything"
      />
    </div>
  );
}
