import React,{Component} from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './ImageSlider.css'

export default class PauseOnHover extends Component {
 
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
           
          }
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 2,
           
          }
        }
      ]

    };
    
    return (

      <Container> 
        <Slider {...settings}>
            <Wrap>
            <img src="/images/M1.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/M2.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/M3.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/M4.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/M1.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/M2.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/M3.png"  />
            </Wrap>
            
        </Slider>
      </Container>
    );
  }
}

const Container=styled.div`
background-color:black;
// padding-right:100px;
// padding-left:100px;
height: 50vh;


ul li button {
  &:before{
      font-size:8px;
      color:white;

  }
}
ul li.slick-active button:before{
  color:white;
}



`

const Wrap=styled.div`
 cursor:pointer;
 align-content:center;
 justify-content:center;

    

    img {
        border:4px solid transparent;
        border-radius:3px;
        width:100%;
        height:100%;
        
        object-fit:cover;
        display:flex;
      }

    }

    Slider{
        margin-top: 100px;
      
    }
 `

