import './Welcome.scss';
import {User} from "../../types/User";
import {useEffect, useState} from "react";
import {useInterval} from "../../hooks/useInterval";

export default function Welcome(props: { onLogout: Function, loguedUser: User }) {

    const [timeElapsed, setTimeElapsed] = useState<number>(0);

    /**
     * Calcula el tiempo que ha transcurrido entre ahora y el penúltimo login (en el caso de no existir aún, se usará
     * el último login, que siempre será el login actual)
     */
    const updateTimeElapsed = () => {
        if (!props.loguedUser.penultimateLogin) {
            setTimeElapsed(Date.now() - props.loguedUser.lastLogin!);
        } else {
            setTimeElapsed(Date.now() - props.loguedUser.penultimateLogin);
        }
    }

    // Establece el estado inicial de timeElapsed
    useEffect(() => updateTimeElapsed(), []);

    // Calcula el tiempo transcurrido cada segundo
    useInterval(() => updateTimeElapsed(), 1000);

    const getDays = (): number => Math.floor(timeElapsed / 1000 / 60 / 60 / 24);

    const getHours = (): number => Math.floor(timeElapsed / 1000 / 60 / 60 % 24);

    const getMinutes = (): number => Math.floor(timeElapsed / 1000 / 60 % 60);

    const getSeconds = (): number => Math.floor(timeElapsed / 1000 % 60);

    const formatDigits = (number: number): string => number.toString().length < 2 ? ('0' + number) : number.toString();

    return <div className={'Welcome'}>
        <h1>Welcome!</h1>
        <h3>The last time you accessed was</h3>
        <div className={'counter'}>
            <div>
                <div>{formatDigits(getDays())}</div>
                <div>days</div>
            </div>
            <div>
                <div>{formatDigits(getHours())}</div>
                <div>hours</div>
            </div>
            <div>
                <div>{formatDigits(getMinutes())}</div>
                <div>minutes</div>
            </div>
            <div>
                <div>{formatDigits(getSeconds())}</div>
                <div>seconds</div>
            </div>
        </div>
        <button onClick={() => props.onLogout()}>Logout</button>
    </div>
}
