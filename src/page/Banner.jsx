import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {

    return (
        <Carousel>
             <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" 
     data-aos-duration="2000">
                    <img src="https://i.ytimg.com/vi/fBonRLiYdYA/maxresdefault.jpg" />
                    
                </div>

<div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGCB8njlidSymCTbJ6r0Zz-pa5dGId2E3rn0rchi3HgfSUie7_Ebs_qsNBunsHAYJd0k&usqp=CAU"  />
                    
                </div>
               
                <div>
                    <img src="https://i.ytimg.com/vi/7RDwcUMJ2lU/maxresdefault.jpg"  />
                    
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppwrBGre70R6BeiSTLQble6Zm5gUnS1ZEBD9H_zxFCtkuW3CDuzBDKxEjESEyXgW_DRM&usqp=CAU"  />
                    
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyi2h3yIRmXvjHXNclD-6Ezefqq4pB4lqVeEdUnU2CC5Q3NjR7kYrrsAczNZzuEhyQ0L4&usqp=CAU" />
                    
                </div>
             
                <div>
                    <img src="https://i.ytimg.com/vi/bpZFpWysYeg/maxresdefault.jpg"  />
                    
                </div>
               
            </Carousel>
    );
};

export default Banner;