const Card = ({ imgURL, imgALT, title, content, btnTxt, }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={imgURL} alt={imgALT} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="#" className="btn btn-primary">{btnTxt}</a>
            </div>
        </div>
    );
}

export default Card;