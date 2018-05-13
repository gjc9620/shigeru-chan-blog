import React from 'react';
import Slider from "react-slick";
import HR from "../../component/HR";

const pages = {
  TwitchGraphic : {
    imgs:{
      origin: [
        require('./a0.png'),
        require('./a1.png'),
        require('./a2.png'),
      ],
      thumbnail: [
        require('./a0.png'),
        require('./a1.png'),
        require('./a2.png'),
      ],
    },
  }
}

class CenterMode extends React.Component {
  render() {
    const settings = {
      customPaging: function(i) {
        const thumbnail = pages.TwitchGraphic.imgs.thumbnail[i];
        return (
          <a>
            <img src={thumbnail} />
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
        <Slider {...settings}>
          {
            pages.TwitchGraphic.imgs.origin.map(img=>{
              return (
                <div>
                  <img src={img} />
                </div>
              )
            })
          }
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
        {/*<h2>Twitch Graphics</h2>*/}
        <figure >
          <div className='slider'>
            <CenterMode />
          </div>
          <figcaption>
            <h4 >Twitch Graphic</h4>
            <HR/>
            <ul>
              <li>
                <div>Price: $25 USD each</div>
                <div>Transparent background</div>
                <div>Max. 1 character only on a canvas</div>
              </li>
              <li>Twitch Emotes: File size: 112x112 px, 56x56 px, 28x28 px 350 dpi</li>
              <li>Twitch badges: File size: 72x72 px, 36x36 px, 18x18 px 350 dpi
              </li>
              <li>Plus the original file: 1000x1000 px</li>
              <li>Twitch Sample on my <a href="https://shigeru-chan.deviantart.com/gallery/65740177/Twitch-Emotes">Deviantart</a></li>
            </ul>
          </figcaption>
        </figure>
      </section>
    )
  }
}

CarouselPage.defaultProps = {

};

export default CarouselPage;

