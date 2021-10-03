import {User} from "../../types/User";
import './Login.scss';
import Padlock from "../Padlock";
import {useEffect, useState} from "react";
import FalseBackend from "../../backend/FalseBackend";
import Util from "../../Util";

export default function Login(props: { onLogin: (user: User) => any }) {

    const [isPadlockOpen, setPadlockOpen] = useState<boolean>(true); // Se pone en false al cargar el componente
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        // Se cierra el candado cuando termina la transición de la vista
        setTimeout(() => setPadlockOpen(false), 800);
    }, []);

    const tryLogin = async () => {
        // Comprobar campos
        if (email?.trim() === '' || password?.trim() === '') {
            alert(`Email and Password inputs can't be empty`);
            return;
        }
        if (!isEmail(email)) {
            alert('Email input text must be an email');
            return;
        }

        // Intentar iniciar sesión
        let user = await FalseBackend.login(email, password);
        if (!user) {
            setPassword('');
            alert('Bad credentials');
            return;
        }

        // Animación del candado
        setPadlockOpen(!!user);
        await Util.sleep(750); // Esperar a la transición del candado abriéndose

        // Cambiar vista principal
        props.onLogin(user);
    }

    const isEmail = (email: string) => {
        const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(email.toLowerCase());
    }

    return <div className={'Login'}>
        <form onSubmit={(e) => { // Permite usar la tecla "intro" para iniciar sesión
            e.preventDefault();
            tryLogin();
        }}>
            <Padlock isOpen={isPadlockOpen}/>
            <input type="text" placeholder={'Email'} value={email} onChange={e => setEmail(e.target.value)}
            className={(email === '' || isEmail(email)) ? '' : 'invalid'}/>
            <input type="password" placeholder={'Password'} value={password}
                   onChange={e => setPassword(e.target.value)}/>
            <button type={'submit'}>Log In</button>
        </form>
    </div>;
}
