import React, { createContext, useState } from "react";
export const ShopContext = createContext();
const ShopContextProv = (props) => {
 
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [passAgain, setPassAgain] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(1);
  const [Users, setUsers] = useState([
    { uName: "orel", uPass: "oc" },
    { uName: "kobi", uPass: "ko" },
    { uName: "tamar", uPass: "ta" },
    { uName: "ADMIN", uPass: "admin123" }, //
  ]);

  // const [isLogged, setIsLogged] = useState(false);

  const regValidation = () => {
    if (pass !== passAgain && !name) alert("Passwords DO NOT MATCH⛔");
    else {
      const user = { uName: name, uPass: pass };
      const newUsers = [...Users, user];
      console.log(newUsers);
      setUsers(newUsers);
      navigateTo("/", { state: user });
    }

    // (name.length===0 && alert("⛔Empty Filed Try again⛔")) ||
    //   (pass.length && alert("⛔Empty Filed Try again⛔")) ||
    //   (pass !== passAgain && alert(`UnMatched Pass`)) ||
    //   (name.length &&
    //     pass.length &&
    //     pass === passAgain &&
    //     navigateTo("/login"));
  };
  const loginValidation = () => {
    const user = Users.find(
      (user) => user.uName === name && user.uPass === pass
    );
    console.log(user);
    if (!user) {
      console.log(Users);
      alert(`⛔InValid Inputs`);
    } else {
      // setLoggedUser(user.uName);
      navigateTo(`/`, { state: user });
    }
  };
  const addNote = () => {
    setId((prev) => prev + 1);
    // console.log(id,title,desc);
    const newNotes = [...notes, { id, title, desc }];
    console.log(newNotes);
    setNotes(newNotes);
    // console.log(notes);
  };
  const dellNoteById = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    console.log(newNotes);
    setNotes(newNotes);
  };
  const updateCompDate = (id, title, desc) => {
    let newNotes = [...notes];
    const note = newNotes.find((note) => note.id === id);
    note.title = title;
    note.desc = desc;
    setNotes(newNotes);
  };
  return (
    <ShopContext.Provider
      value={{
        name,
        setName,
        pass,
        setPass,
        passAgain,
        setPassAgain,
        regValidation,
        Users,
        loginValidation,
        setTitle,
        setDesc,
        addNote,
        notes,
        dellNoteById,
        updateCompDate,

        // isLogged,
        // setIsLogged
      }}
    >
     {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProv;
