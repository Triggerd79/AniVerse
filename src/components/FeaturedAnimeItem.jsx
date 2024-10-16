/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { FaMicrophone } from "react-icons/fa6";
import { BiSolidCaptions } from "react-icons/bi";


const FeaturedAnimeItem = ({ name, img, sub, dub, id, otherInfo }) => {
    return (
        <li className="featured-anime-list-item">
            <img src={img} alt={name} />
            <div className="info">
                <Link to={`/${id}`}>{name}</Link>
                <div className="other-info">
                    {
                        sub ? (<span className="sub-ep ep"><BiSolidCaptions />{sub}</span>) : null
                    }
                    {
                        dub ? (<span className="dub-ep ep"><FaMicrophone />{dub}</span>) : null
                    }
                    {
                        otherInfo ? (<span className="category">{otherInfo[0]}</span>) : null
                    }
                </div>
            </div>
        </li>
    )
}

export default FeaturedAnimeItem