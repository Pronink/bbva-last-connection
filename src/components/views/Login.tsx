import {User} from "../../types/User";
import './Login.scss';
import Padlock from "../Padlock";
import {useState} from "react";
import FalseBackend from "../../backend/FalseBackend";
import Util from "../../Util";

export default function Login(props: {onLogin: (user: User) => any}) {

    const [isPadlockOpen, setPadlockOpen] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tryLogin = async () => {
        // Intentar iniciar sesión
        let user = await FalseBackend.login(email, password);
        if (!user) {
            setPassword('');
            alert('Bad credentials');
            return;
        }

        // Animación del candado
        setPadlockOpen(!!user);
        await Util.sleep(500); // Esperar a la transición del candado abriéndose

        // Cambiar vista principal
        props.onLogin(user);
    }

    return <div className={'Login'}>
        <Padlock isOpen={isPadlockOpen}/>
        <input type="text" placeholder={'Email'} value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder={'Password'} value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={() => tryLogin()}>Log In</button>
    </div>;
}
