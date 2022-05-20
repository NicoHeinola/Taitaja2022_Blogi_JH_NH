const Link = ({text}) => {
    return (
        <div className="Link">
            <h3 className="LinkText">{text}</h3>
        </div>
    );
}

const Navigation = () => {
    return (
        <nav>
            <div className="Header">
                <h1>Taitaja-Blogi</h1>
            </div>
            <div className="Links">
                <Link text={"Taitajista"}></Link>
                <Link text={"Miksi osallistua?"}></Link>
                <Link text={"Millaista on?"}></Link>
                <Link text={"Kuinka vaikeaa?"}></Link>
            </div>
        </nav>
    );
}

export {Navigation}