import servicesData from "../../Components/DataComponent/servicesData";
import './Temp.css'

function OurAdvantages() {
    return (
        <>
            <div className="text-center m-5">
                <h2 className='heading-text'>Our Advantages</h2>
            </div>
            <div className="d-flex flex-wrap justify-content-center p-4">
                {servicesData.map((items) => (
                    <div key={items.id} className="d-flex align-items-center p-3">
                        <div className="d-flex align-items-center me-3">
                            <ul className="list-unstyled mb-0 ms-5">
                                <li className="icon-Styling">{items.icon}</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-1">{items.title}</h4>
                            <p className="mb-0">{items.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default OurAdvantages;
