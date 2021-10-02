import './Welcome.scss';

export default function Welcome(props: {onLogout: Function}) {
    return <div className={'Welcome'}>
        <h1>Welcome!</h1>
        <h3>The last time you accessed was</h3>
        <div className={'counter'}>
            <div>
                <div>00</div>
                <div>days</div>
            </div>
            <div>
                <div>00</div>
                <div>hours</div>
            </div>
            <div>
                <div>00</div>
                <div>minutes</div>
            </div>
            <div>
                <div>00</div>
                <div>seconds</div>
            </div>
        </div>
        <button onClick={() => props.onLogout()}>Logout</button>
    </div>
}
