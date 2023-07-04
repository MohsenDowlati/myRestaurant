import React, {useRef} from 'react';
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Gallery.css';


const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];

const Gallery = () => {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
      const {current} = scrollRef;

      if (direction==='left'){
          current.scrollLeft -= 300;
      } else {
          current.scrollLeft +=300;
      }
    }

  return(
      <div className={"app_gallery flex_center"}>
        <div className={"app_gallery_content"}>
          <SubHeading title={"Instagram"}/>
            <h1 className={"headtext_cormorant"}>Photo Gallery</h1>
            <p className={"p_opensans"} style={{color:'#AAA',marginTop:'2rem'}}>Lorem Ipsum Dolor Sit Amet, Consectetur
                Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
            <button type={"button"} className={"custom_button"}>View More</button>
        </div>

          <div className={"app_gallery_images"}>
              <div className={"app_gallery_images_container"} ref={scrollRef}>
                  {galleryImages.map((image,index)=>(
                      <div className={"app_gallery_images_card flex_center"} key={`gallery_image_${index+1}`}>
                          <img src={image} alt={'gallery'}/>
                          <BsInstagram className={"gallery_image_icon"}/>
                      </div>
                  ))}
              </div>
              <div className={"app_gallery_images_arrows"}>
                  <BsArrowLeftShort className={"gallery_arrow_icon"} onClick={()=>scroll('left')}/>
                  <BsArrowRightShort className={"gallery_arrow_icon"} onClick={()=>scroll('right')}/>
              </div>
          </div>
      </div>
  );
}


export default Gallery;
