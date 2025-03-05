import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  //******************************Convert to uppercase logic********************************** */
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  //******************************Convert to LowerCase logic********************************** */
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //   ******************************Convert to Clear text logic********************************** */
  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  //   ******************************Logic to extract email id's********************************** */
  const extractEmail = () => {
    let extractedEmail = text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
    );
    let email = document.getElementById("email");
    email.innerHTML = extractedEmail;
  };

  //   ******************************Logic to copy given text********************************** */
  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  //   ******************************Logic to copy given text********************************** */
  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //*********************************On change evevnt handler********************************* */

  const handleOnChange = (event) => {
    console.log("on change has been clicke");
    setText(event.target.value);
  };

  //******************using state************************** */
  const [text, setText] = useState("Enter text here");

  //******************************logic to count number of words************************ */
  // let removeChar = text.replace(/[^A-Za-z]\s+/g, " ");
  // let newWord = removeChar.trim().split(" ");
  // let lengthOfWords = newWord.length;

  //***************************return by function****************************** */
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.color,
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control textBoard"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-outline-${
            props.mode === "dark" ? "info" : "primary"
          } mx-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-1`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-1`}
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-1`}
          onClick={extractEmail}
        >
          Extract Email
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-1`}
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-1`}
          onClick={extraSpace}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h4>Your text summary</h4>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters (including space)
        </p>
        <h5>Email in the above text:-</h5>
        <p id="email"></p>
      </div>
    </>
  );
}
