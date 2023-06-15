import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
let voice: "Male";
let comms: "Phone";
let difficulty: "Easy";
const SettingsPage = () => {
    const history = useHistory();
    const handleChange = (event) => {
        if (event.target.name === "voice") {
            voice = event.target.value;
        }
        if (event.target.name === "comms") {
            comms = event.target.value;
        }
        if (event.target.name === "difficulty") {
            difficulty = event.target.value;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(voice, comms, difficulty);
    };

    function pushToHomePage() {
        history.push('/')
    }

    return (
        <div className={"settings-container"}>
            <form onSubmit={handleSubmit}>
                <select className={"settings-select"} id="voice" name="voice" value={voice} onChange={handleChange}>
                    <option value="">-- Voice --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>


                <select className={"settings-select"} id="comms" name="comms" value={comms} onChange={handleChange}>
                    <option value="">-- Communication --</option>
                    <option value="Phone">Phone</option>
                    <option value="Letter">Letter</option>
                </select>

                <select className={"settings-select"} id="difficulty" name="difficulty" value={difficulty} onChange={handleChange}>
                    <option value="">-- Difficulty --</option>
                    <option value="Easy">Easy</option>
                    <option value="Normal">Normal</option>
                    <option value="Hard">Hard</option>
                </select>

                <button className={"settings-submit"} type="submit" onClick={() => pushToHomePage()}>Submit</button>
            </form>
        </div>
    );
};

export default SettingsPage;
export {voice, comms, difficulty}