import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const notesSlice = createSlice({
  name: "notes",
  initialState: [
    {
      id: nanoid(),
      heading: "Dummy Heading",
      data: "Something is theresfjkbdsjkbs sfdbskjbsdjbsd sdubsuhbfsuobdso sfdbsfjbsdjbsdjkb fsdubsfdjkbsd sdibsdhibsdih sdiubgsdiubsd ibvsivsdhibdsihbs diubsdihbqdi uvgsdviubsdiubs diubsdiusdiug bsdiugsfdiub ",
      time: ` Time : ${
        new Date().getHours().toString().length < 2
          ? `0${new Date().getHours()}`
          : `${new Date().getHours()}`
      } 
        : ${
          new Date().getMinutes().toString().length < 2
            ? `0${new Date().getMinutes()}`
            : `${new Date().getMinutes()}`
        } : ${new Date().getSeconds()}`,
    },
    {
      id: nanoid(),
      heading: "Dummy Heading",
      data: "Something is theresfjkbdsjkbs sfdbskjbsdjbsd sdubsuhbfsuobdso sfdbsfjbsdjbsdjkb fsdubsfdjkbsd sdibsdhibsdih sdiubgsdiubsd ibvsivsdhibdsihbs diubsdihbqdi uvgsdviubsdiubs diubsdiusdiug bsdiugsfdiub ",
      time: ` Time : ${
        new Date().getHours().toString().length < 2
          ? `0${new Date().getHours()}`
          : `${new Date().getHours()}`
      } 
        : ${
          new Date().getMinutes().toString().length < 2
            ? `0${new Date().getMinutes()}`
            : `${new Date().getMinutes()}`
        } : ${new Date().getSeconds()}`,
    },
    {
      id: nanoid(),
      heading: "Dummy Heading",
      data: "Something is theresfjkbdsjkbs sfdbskjbsdjbsd sdubsuhbfsuobdso sfdbsfjbsdjbsdjkb fsdubsfdjkbsd sdibsdhibsdih sdiubgsdiubsd ibvsivsdhibdsihbs diubsdihbqdi uvgsdviubsdiubs diubsdiusdiug bsdiugsfdiub ",
      time: ` Time : ${
        new Date().getHours().toString().length < 2
          ? `0${new Date().getHours()}`
          : `${new Date().getHours()}`
      } 
        : ${
          new Date().getMinutes().toString().length < 2
            ? `0${new Date().getMinutes()}`
            : `${new Date().getMinutes()}`
        } : ${new Date().getSeconds()}`,
    },
  ],

  reducers: {
    addNewNote(state, action) {
      if (!action.payload.data || !action.payload.heading) {
        return;
      }

      const newNote = {
        id: nanoid(),
        heading: action.payload.heading,
        data: action.payload.data,
        time: ` Time : ${
          new Date().getHours().toString().length < 2
            ? `0${new Date().getHours()}`
            : `${new Date().getHours()}`
        } 
          : ${
            new Date().getMinutes().toString().length < 2
              ? `0${new Date().getMinutes()}`
              : `${new Date().getMinutes()}`
          } : ${new Date().getSeconds()}`,
      };

      state.push(newNote);
      // save to the local storage
      localStorage.setItem(newNote.id, newNote);
    },

    removeNote(state, action) {
      return state.filter((state) => state.id != action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
  },
});

export { store };

export const { addNewNote, removeNote } = notesSlice.actions;
