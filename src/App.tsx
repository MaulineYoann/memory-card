import React, { useState } from "react";

type TypeObj = {
  id: number;
  name: string;
};

function App() {
  const [nameCard, setNameCard] = useState<string>("");
  const [card2, setCard2] = useState<string>("");
  const [numberOfTry, setNumberOfTry] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  
  const [obj, setObj] = useState([
    { id: 1, name: "yoann" },
    { id: 2, name: "steven" },
    { id: 3, name: "nathan" },
    { id: 4, name: "yoann" },
  ]);

  const resetGame = () => {
    if (numberOfTry.length === 2) {
      const [firstCard, secondCard] = numberOfTry;
      if (firstCard === secondCard) {
        const updateObj = obj.filter((item) => item.name !== firstCard);
        setMatchedCards((prev) => [...prev, firstCard]);
        setObj(updateObj);
      }
      setNumberOfTry([]);
    }
  }


  const handleClick = (name: string) => {

    if (!nameCard) {
      setNameCard(name)
      setNumberOfTry((prev) => [...prev, name])
    } else {
      setCard2(name)
      setNumberOfTry((prev) => [...prev, name])
    }
  }


  resetGame()
  console.log(obj.map( item => item))

  return (
    // <div className="bg-orange-300 h-screen px-[5%] flex justify-center items-center">
    //   <div className="flex gap-4">
    //     {obj.map((items) => (
    //       <div
    //         className={`flex h-32 w-32 cursor-pointer justify-center items-center rounded bg-black ${
    //           isCardMatched(items.name) ? "opacity-0" : ""
    //         } transition-all`}
    //         key={items.id}
    //         onClick={() => handleClick(items.name)}
    //       >
    //         <p className="text-lg text-white">{items.name}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="bg-orange-300 h-screen px-[5%] flex justify-center items-center">
    <div className="flex gap-4">
      {obj.map((item) => (
        <div
          className={`flip-card ${
            isCardFlipped(item.name) ? "flipped" : ""
          }`}
          key={item.id}
          onClick={() => handleClick(item.name)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front bg-black h-32 w-32 flex justify-center items-center rounded cursor-pointer">
              <p className="text-lg text-white">{item.name}</p>
            </div>
            <div className="flip-card-back bg-blue-500 h-32 w-32 flex justify-center items-center rounded">
              <p className="text-lg text-white">Back</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
}

export default App;
