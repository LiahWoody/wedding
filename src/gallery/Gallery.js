import "./Gallery.css";
import image1 from "../images/img_gallery1.jpg";
import image2 from "../images/img_gallery2.jpg";
import image3 from "../images/img_gallery3.jpeg";
import image4 from "../images/img_gallery4.jpg";
import image5 from "../images/img_gallery5.jpg";
import image6 from "../images/img_gallery6.jpg";
import image7 from "../images/img_gallery7.jpg";
import image8 from "../images/img_gallery8_text.jpeg";
import image9 from "../images/img_gallery9.jpg";

function Gallery() {
  return (
    <div className="gallery_container">
      {/* first */}
      <div className="first_container">
        <img className="first_image" src={image1} />
        <div className="first_text_container">
          <div className="first_text1">OUR LOVE</div>
          <div className="first_text2">우리의 사랑</div>
        </div>
      </div>
      {/* second */}
      <div className="second_container">
        <img className="second_image" src={image2} />
        <div className="second_text">you mean everything</div>
      </div>
      {/* third */}
      <div className="third_container">
        <div className="third_text">You love me,<br/>so I can breath</div>
        <img className="third_image" src={image3} />
      </div>
      {/* fourth */}
      <div className="fourth_container">
        <div className="fourth_image_container">
          <div className="fourth_text">I Love You More Than Yesterday</div>
          <img className="fourth_image" src={image4} />
        </div>
        <div className="fifth_container">
          <img className="fifth_image" src={image5} />
        </div>
      </div>
      {/* sixth */}
      <div className="sixth_container">
        <div className="sixth_image_container">
          <div className="sixth_text">You are always<br/>gonna be my love</div>
          <img className="sixth_image" src={image6} />
        </div>
        <div className="seventh_container">
          <img className="seventh_image" src={image7} />
        </div>
      </div>
      {/* eighth */}
      <div className="eighth_container">
        <img className="eighth_image" src={image8} />
      </div>
      {/* nineth */}
      <div className="nineth_container">
        <div className="nineth_text">Thank you</div>
        <img className="nineth_image" src={image9} />
      </div>
    </div>
  );
}

export default Gallery;
