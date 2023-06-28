import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewNote } from "./store";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import Button from "./components/Button/Button";

// function App() {
//   const notes = useSelector((state) => state.notes);
//   const dispatch = useDispatch();

//   const handleClick = (noteData) => {
//     dispatch(addNewNote(noteData));
//   };

//   return (
//     <div className="App">
//       {notes.map((note) => {
//         return (
//           <div id={note.id} className="NoteContainer_Outer">
//             <div className="Note_id">{note.id}</div>
//             <div className="Note_heading">{note.heading}</div>
//             <div className="Note_data">{note.data}</div>
//           </div>
//         );
//       })}

//       <button onClick={() => handleClick("I have to add something")}>
//         {" "}
//         Add new Note
//       </button>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="App">
      <div className="appHeading">NOTES APP</div>
      {/* <Button /> */}
      <NotesContainer />
    </div>
  );
};

export default App;
