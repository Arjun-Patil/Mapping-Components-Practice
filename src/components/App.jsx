import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(ele) {
  return (
    <Entry
      key={ele.id}
      emoji={ele.emoji}
      name={ele.name}
      meaning={ele.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
