import "./PathHeader.css";

const pagePathArrayTransform = (pagePathArray) => {
    const delimiter = "—";
    const result = [];
    for (let i = 0; i < pagePathArray.length - 1; i++) {
        result.push(pagePathArray[i]);
        result.push(delimiter);
    }
    const lastItem = pagePathArray.at(-1);
    result.push(lastItem);
    return result;
};

const PathHeader = ({pagePathArray}) => {
    const pageName = pagePathArray.at(-1);
    pagePathArray = pagePathArrayTransform(pagePathArray);

    return (
        <div className="page-path">
            <h1 className="page-path__header">
                {pageName}
            </h1>
            <div className="page-path__items">
                {
                    pagePathArray.map(pagePathItem => (
                        <div className="page-path__item">
                            {pagePathItem}
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default PathHeader;