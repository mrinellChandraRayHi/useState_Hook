import { createContext } from "react";
import ChildA from "./Components/ChildA";
// Step 1: Create contexts outside of the component
const data = createContext();
const data1 = createContext();

const App = () => {
  const name = "Rahim";
  const gender = "Male";

  return (
    <div>
      {/* Step 2: Provide values to the contexts */}
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA/>
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default App;

// Step 3: Export the contexts
export { data, data1 };
