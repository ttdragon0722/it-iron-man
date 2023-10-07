const Panel = ({text,price,tag}) => {
    return (
        <div className="scrollable-block">
            <div className="block-img">
                <img src={"https://fakeimg.pl/350x200/?text="+text} alt=""></img>
            </div>
            <div className="block-tag">
                {tag}
            </div>
            <div className="block-content">
                <h3>{text}</h3>
                <div className="block-price">NT$ {price}起</div>
            </div>
        </div>
    )
}

export default Panel;
