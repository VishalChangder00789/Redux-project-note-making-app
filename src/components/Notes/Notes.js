import React from "react";
import "./Notes.css";
import bin from "../../Assets/bin.png";
import { removeNote } from "../../store";
import { useDispatch } from "react-redux";

const Notes = ({ note }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <div className="NotesOuter">
      <div className="NotesHeading">{note.heading}</div>
      <div className="NotesData">{note.data}</div>
      <div className="NotesBottomHolder">
        <div className="NotesTime">{note.time}</div>
        <div onClick={() => handleDeleteButton(note.id)} className="delete">
          <img classNames="binImg" src={bin} />
        </div>
      </div>
    </div>
  );
};

export default Notes;
