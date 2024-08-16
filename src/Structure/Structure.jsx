import productsData from "../Components/DataComponent/ProductData";
function Structure() {
    return (
        <div>
            <div className="box">
                <img src={productsData.images[0]} alt={productsData.title} />
                <h2>{productsData.brand}</h2>
                <h4>{productsData.title}</h4>
                <hr />
                <span>
                    <h3>${productsData.finalPrice}</h3>
                    <p>{productsData.info}</p>
                </span>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default Structure;
