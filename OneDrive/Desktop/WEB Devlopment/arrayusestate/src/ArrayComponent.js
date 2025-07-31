import { useState } from "react";

const ArrayComponent = () => {
  const [toggle, settoggle] = useState(true);
  const [fruits, setfruits] = useState(["Apple", "Banana", "Grapes", "Orange"]);

  const handleShuffle = () => {
    if (toggle) {
      setfruits(["Banana", "Grapes", "Orange", "Apple"]);
    } else {
      setfruits(["Apple", "Banana", "Grapes", "Orange"]);
    }
    settoggle(!toggle);
  };

  const handleEmptyFruits = () => {
    setfruits([]);
  };

  const handleFillFruits = () => {
    setfruits(["Apple", "Banana", "Grapes", "Orange"]);
  };

  const handleAddFruits = () => {
    let oldFruits = [...fruits];
    oldFruits.push("Mango");
    oldFruits.push("Pineapple");
    setfruits(oldFruits);
  };

  const handleRemoveFruits = () => {
    let oldFruits = [...fruits];
    oldFruits.pop();
    oldFruits.pop();
    setfruits(oldFruits);
  };

  const handleRemoveApple = () => {
    let oldFruits = [...fruits];
    let index = oldFruits.indexOf("Apple");
    if (index > -1) {
      oldFruits.splice(index, 1);
    }
    setfruits(oldFruits);
  };

  const handleRemoveBanana = () => {
    let oldFruits = [...fruits];
    let index = oldFruits.indexOf("Banana");
    if (index > -1) {
      oldFruits.splice(index, 1);
    }
    setfruits(oldFruits);
  };

  const handleRemoveGrapes = () => {
    let oldFruits = [...fruits];
    let index = oldFruits.indexOf("Grapes");
    if (index > -1) {
      oldFruits.splice(index, 1);
    }
    setfruits(oldFruits);
  };

  const handleRemoveMango = () => {
    let oldFruits = [...fruits];
    let index = oldFruits.indexOf("Mango");
    if (index > -1) {
      oldFruits.splice(index, 1);
    }
    setfruits(oldFruits);
  };

  const handleRemoveOrange = () => {
    let oldFruits = [...fruits];
    let index = oldFruits.indexOf("Orange");
    if (index > -1) {
      oldFruits.splice(index, 1);
    }
    setfruits(oldFruits);
  };

  const handleRemovePineapple = () => {
    let oldFruits = [...fruits];
    let index = oldFruits.indexOf("Pineapple");
    if (index > -1) {
      oldFruits.splice(index, 1);
    }
    setfruits(oldFruits);
  };

  return (
    <>
      <div>
        <h1>This is the list of fruits:</h1>
        <ul>
          <li>{fruits[0]}</li>
          <li>{fruits[1]}</li>
          <li>{fruits[2]}</li>
          <li>{fruits[3]}</li>
          <li>{fruits[4]}</li>
          <li>{fruits[5]}</li>
        </ul>
        <button onClick={() => handleShuffle()} type="button">
          Shuffle Fruits
        </button>
        <button onClick={() => handleEmptyFruits()} type="button">
          Empty Fruits
        </button>
        <button onClick={() => handleFillFruits()} type="button">
          Fill Fruits
        </button>
        <br />
        <button onClick={() => handleAddFruits()} type="button">
          Add Fruits
        </button>
        <button onClick={() => handleRemoveFruits()} type="button">
          Remove Fruit
        </button>
        <button onClick={() => handleRemoveApple()} type="button">
          Remove Apple
        </button>{" "}
        <br />
        <button onClick={() => handleRemoveBanana()} type="button">
          Remove Banana
        </button>
        <button onClick={() => handleRemoveGrapes()} type="button">
          Remove Grapes
        </button>
        <button onClick={() => handleRemoveOrange()} type="button">
          Remove Orange
        </button>{" "}
        <br />
        <button onClick={() => handleRemoveMango()} type="button">
          Remove Mango
        </button>
        <button onClick={() => handleRemovePineapple()} type="button">
          Remove Pineapple
        </button>
      </div>
    </>
  );
};
export default ArrayComponent;
