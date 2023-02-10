import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import axios from "axios";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  const [meme, setMeme] = useState("");

  useEffect(() => {
    // https://meme-api.com/gimme

    axios.get("https://meme-api.com/gimme").then((e) => setMeme(e.data.url));
  }, []);

  const NewMeme = () => {
    axios.get("https://meme-api.com/gimme").then((e) => setMeme(e.data.url));
  };

  return (
    <div className="container">
      <h1>Welcome to Tauri Meme App</h1>
      <img src={meme} />
      <br />
      <button onClick={NewMeme}>Get New</button>
    </div>
  );
}

export default App;
