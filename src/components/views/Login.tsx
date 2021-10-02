import {User} from "../../types/User";
import './Login.scss';
import Padlock from "../Padlock";
import {useState} from "react";
import FalseBackend from "../../backend/FalseBackend";
import Util from "../../Util";

export default function Login(props: {onLogin: (user: User) => any}) {

    const [isSuccessful, setSuccessful] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tryLogin = async () => {
        let user = await FalseBackend.login(email, password);
        setSuccessful(!!user);
        if (!user) {
            setPassword('');
            alert('Bad credentials');
            return;
        }
        await Util.sleep(500);
        props.onLogin(user);
    }

    return <div className={'Login'}>
        <Padlock isOpen={!isSuccessful}/>
        <input type="text" placeholder={'Email'} value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder={'Password'} value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={() => tryLogin()}>Log In</button>
    </div>;
}
