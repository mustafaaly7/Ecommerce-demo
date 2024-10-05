import headerLogo from "../images/logo.png"

import { Carousel, Image } from 'antd';
// const contentStyle = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
const CarouselProduct = () => (
  <>
    <Carousel arrows infinite={false}>
      <div className="flex">
        {/* <h3 style={contentStyle}>1</h3> */}
        <Image src={headerLogo} style={{background : "blue"}} />
        <Image src={headerLogo} style={{background : "green"}} />
      </div>
      <div>
        {/* <h3 style={contentStyle}>2</h3> */}
        <Image src={headerLogo} style={{background : "blue"}} />
      </div>
      <div>
        {/* <h3 style={contentStyle}>3</h3> */}
        <Image src={headerLogo} style={{background : "blue"}} />
      </div>
      <div>
        {/* <h3 style={contentStyle}>4</h3> */}
        <Image src={headerLogo} style={{background : "blue"}} className="w-full"/>
      </div>
    </Carousel>
   
  </>
);
export default CarouselProduct;