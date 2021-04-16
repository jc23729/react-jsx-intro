function App() {
  return (
    <div>
      <Tweet
        name=" Matt Lane"
        username="mmmaattttt"
        date={new Date().toDateString()}
        message="This app will disrupt everything"
      />
      <Tweet
        name="Bobby Mills"
        username="Bobby023"
        date={new Date().toDateString()}
        message="I love life"
      />

      <Tweet
        name="Michelle Serrano"
        username="Michelly9787"
        date={new Date().toDateString()}
        message="I like Twitter"
      />
    </div>
  );
}
