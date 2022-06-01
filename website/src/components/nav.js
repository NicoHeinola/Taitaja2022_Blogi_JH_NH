const Link = ({text, setContent}) => {
    return (
        <div onClick={setContent} className="Link">
            <h3 className="LinkText">{text}</h3>
        </div>
    );
}

const Navigation = ({setContent}) => {
    return (
        <nav>
            <div className="Header">
                <h1>Taitaja-Blogi</h1>
            </div>
            <div className="Links">
                <Link setContent={() => setContent("1")} text={"Taitajista"}></Link>
                <Link setContent={() => setContent("2")} text={"Miksi osallistua?"}></Link>
                <Link setContent={() => setContent("3")} text={"Millaista on?"}></Link>
                <Link setContent={() => setContent("1")} text={"Kuinka vaikeaa?"}></Link>
            </div>
        </nav>
    );
}

export {Navigation}