import NavBar from "../components/NavBar";

const HomePage = () => {
  const title = "welcome to my homepage";
  const times = 50;

  return (
    <div className="class">
      <NavBar />
      <h1>{title}</h1>
      <p>Lets rule the world {times}</p>
    </div>
  );
};

export default HomePage;
