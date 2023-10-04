const NavBar = () => {
  const navName = "TTTV-QUOTES";
  return (
    <div className="">
      <nav className="flex justify-between bg-red-300">
        <h1>{navName}</h1>
        <div className="flex space-x-4">
          <a href="#">Home</a>
          <a href="#">Favourites</a>
          <a href="#">My Quotes</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
    </div>
  );
};

export default NavBar;
