function Card(props){
    // const imgLink = "http://via.placeholder.com/350x150";
    return (
        <div className="card">
            <img className="card-img-top" src={props.imgUrl} alt={props.imgCap} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <a href="#" className="btn btn-primary">{props.btnText}</a>
            </div>
        </div>
    );
}

export default Card;