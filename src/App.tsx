import { useState } from "react";
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { getVersion } from "@tauri-apps/api/app";
import { message } from "@tauri-apps/api/dialog";
import { relaunch } from "@tauri-apps/api/process";
import "./App.css";

const appVersion = await getVersion();

// try {
//   const { shouldUpdate, manifest } = await checkUpdate();
//   if (shouldUpdate) {
//     // display dialog
//     await installUpdate();
//     // install complete, restart the app
//     await relaunch();
//   }
// } catch (error) {
//   console.log(error);
// }

function App() {
  async function onUpdate() {
    const { shouldUpdate, manifest } = await checkUpdate();
    if (shouldUpdate) {
      await installUpdate();
      await relaunch();
    }
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <p>{appVersion ? appVersion : "0.0.0"}</p>

      <div className="row">
        <div>
          <button type="button" onClick={() => onUpdate()}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
