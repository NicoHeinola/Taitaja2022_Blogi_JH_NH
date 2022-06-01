const Content = ({ elements, ids, show }) => {
    return (
        <div className="Content">
            {elements.map((e, i) => {
                let id = ids[i];
                let doShow = (id === show) ? true : false;
                return <SubContent key={id} e={e} show={doShow}></SubContent>
            })}
        </div >
    )
}

const SubContent = ({ e, show }) => {
    return <div className={(!show) ? "SubContent AnimateOut" : "SubContent AnimateIn"}>
        {e}
    </div>
}

const TestContent = () => {
    return (
        <div>
            awoeuawoeh
        </div>
    )
}

export { Content, TestContent }