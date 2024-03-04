const Article = ({ id, image, name, text, style }) => {
    return (
        <div className="row" style={style}>
            <div className="id">{id}</div>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="content">
                <div>{name}</div>
                <div>{text}</div>
            </div>
        </div>
    );
};

export default Article;
