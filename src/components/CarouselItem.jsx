/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaPlayCircle, FaCalendar, FaClock } from "react-icons/fa";

function CarouselItem(props) {
    const { item, index, currentSlide } = props;
    return (
        <div className="spotlight-card" style={{
            display: (currentSlide === index ? "block" : "none"),
        }}>
            <div className="spotlight-card-info">
                <h3 className="rank">#{item.rank} Spotlight</h3>

                <h2 className="title">{item.name}</h2>
                <div className="other-info-container">
                    <div className="other-info category"><FaPlayCircle /> {item.category}</div>
                    <div className="other-info duration"><FaClock /> {item.duration}</div>
                    <div className="other-info release-day"> <FaCalendar />{item.releasedDay}</div>
                    <div className="other-info quality">{item.quality}</div>
                </div>
                <p className="description">{item.description}</p>

                <Link to={`/watch/${item.id}`} >
                    <button >
                        <FaPlayCircle />
                        <div className="text">
                            Watch Now
                        </div>
                    </button>
                </Link>
            </div>

            <div className="image-container">
                <img src={item.img} alt="poster" />
                <div className="blur-overlay-right" />
                <div className="blur-overlay-left" />
                <div className="blur-overlay-bottom" />
                {/* <div className="blur-overlay-top" /> */}
            </div>

        </div>
    )
}

export default CarouselItem