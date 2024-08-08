
// import Slider from 'react-slick';
// import productsData from '../DataComponent/ProductData';
// import './Feature.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function FeatureProductSlider() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         centerMode: true,
//         centerPadding: '0',
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <>
//             <div className='titleText'>
//                 <h2 className='text-center featuredHead'>Featured Products</h2>
//             </div>

//             <div className='my-4 p-4 m-4'>
//                 <Slider {...settings}>
//                     {productsData
//                         .filter((item) => item.tag === 'featured-product')
//                         .map((item) => (
//                             <div key={item.id} className='slide-item'>
//                                 <div className='product'>
//                                 <p>{item.title}</p>
//                                     <img
//                                         src={item.images[0]}
//                                         alt={item.title}
//                                         className='img-fluid'
//                                         style={{ height: '200px' }}
//                                     />
//                                     <div className='product-info'>
                                        
//                                         <div className='d-flex align-items-center'>
//                                             <h3 className='card-title text-truncate p-2 mb-0'>
//                                                 ₹{item.finalPrice}
//                                             </h3>
//                                             <h5
//                                                 className='card-title text-truncate p-2 mb-0 ms-3'
//                                                 style={{ textDecoration: 'line-through' }}
//                                             >
//                                                 ₹{item.originalPrice}
//                                             </h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                 </Slider>
//             </div>
//         </>
//     );
// }

// export default FeatureProductSlider;



import Slider from 'react-slick';
import productsData from '../DataComponent/ProductData';
import './Feature.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState} from 'react'

function FeatureProductSlider() {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='titleText'>
                <h2 className='text-center featuredHead'>Featured Products</h2>
            </div>

            <div className='my-4 p-4 m-4 overflow-hidden'>
                <Slider {...settings} activeIndex={index} onSelect={handleSelect} controls ={false} interval={2000}>
                    {productsData
                        .filter((item) => item.tag === 'featured-product')
                        .map((item) => (
                            <div key={item.id} className='slide-item'>
                                <div className='product'>
                                <p>{item.title}</p>
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className='img-fluid m-4'
                                        style={{height:"200px"}}
                                    />
                                    <div className='product-info'>
                                        
                                        <div className='d-flex align-items-center'>
                                            <h3 className='card-title text-truncate p-2 mb-0'>
                                                ₹{item.finalPrice}
                                            </h3>
                                            <h5
                                                className='card-title text-truncate p-2 mb-0 ms-3'
                                                style={{ textDecoration: 'line-through' }}
                                            >
                                                ₹{item.originalPrice}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </>
    );
}

export default FeatureProductSlider;
