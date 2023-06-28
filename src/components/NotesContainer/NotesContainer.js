import React from "react";
import "./NotesContainer.css";
import Notes from "../Notes/Notes";

import { useDispatch, useSelector } from "react-redux";
import AddNotes from "../AddNote/AddNote";

const NotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  return (
    <div className="NotesContainer">
      {notes.map((note) => {
        return <Notes note={note} />;
      })}
      <AddNotes />
    </div>
  );
};

export default NotesContainer;
