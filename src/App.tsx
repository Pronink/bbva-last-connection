import React, {useState} from 'react';
import './App.scss';
import './Global.scss';
import Login from "./components/views/Login";
import {User} from "./types/User";
import Welcome from "./components/views/Welcome";

export default function App() {
    const [loguedUser, setLoguedUser] = useState<User | null>(null);
    return (
        <div className="App">
            {
                !loguedUser
                    ? <Login onLogin={user => setLoguedUser(user)}/>
                    : <Welcome onLogout={() => setLoguedUser(null)} loguedUser={loguedUser}/>
            }
        </div>
    );
}

