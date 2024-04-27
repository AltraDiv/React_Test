import Hello from "./components/Hello.jsx";
function App() {
  const person = {
    name: "Rob",
    message: "Hi!",
    seatNum: [1,2,3,4]
  };
  return (
    <div>
      <Hello
      person={person}
      />
    </div>
  );
}

export default App;
