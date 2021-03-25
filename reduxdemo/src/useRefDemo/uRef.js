import React, { useState, useRef } from "react";
const UseRef = () => {
  const uname = useRef("");
  const [displayName, setDisplayName] = useState("");
  const fsubmit = (e) => {
    e.preventDefault();
    setDisplayName(uname.current.value);
    console.log(displayName);
  };
  return (
    <>
      <form onSubmit={fsubmit}>
        <input type="text" ref={uname} />
        <button>Submit</button>
      </form>
    </>
  );
};
export default UseRef;
