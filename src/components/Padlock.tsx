import './Padlock.scss';

export default function Padlock(props: {isOpen: boolean}) {
    return <div className={'Padlock'}>
        <div className={'ring'} style={{transform: `translateY(${props.isOpen ? 20 : 0}px)`}}/>
        <div className={'body'}>
            <div className={'cylinder'}>
                <div/><div/>
            </div>
        </div>
    </div>;
}
