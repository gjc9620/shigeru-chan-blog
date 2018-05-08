import React from 'react';
import Slider from "react-slick";
const baseUrl = 'https://s3.amazonaws.com/static.neostack.com/img/react-slick';

class CenterMode extends React.Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={require('./touma3.png')} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={require('./touma3.png')} />
          </div>
          <div>
            <img src={baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract03.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract04.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract04.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}
class CarouselPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // componentDidMount() {}
  render() {
    return (
      <section className='carousel-page'>
        <div className='slider'>
          <CenterMode />
        </div>
      </section>
    )
  }
}

CarouselPage.defaultProps = {

};

export default CarouselPage;

