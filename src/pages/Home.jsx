import { useState, useEffect } from "react";
import CarouselItem from "../components/CarouselItem";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import TrendingAnimeListItem from "../components/TrendingAnimeListItem";
import FeaturedAnimeItem from "../components/FeaturedAnimeItem";


function Home() {
    const shareOnTelegram = () => {
        window.open("https://t.me/share/url?url=", "_blank");
    };

    const shareOnFacebook = () => {
        window.open("https://www.facebook.com/sharer/sharer.php?u=", "_blank");
    };

    const shareOnTwitter = () => {
        window.open("https://twitter.com/intent/tweet?url=&text=Check%20this%20out!", "_blank");
    };

    const shareOnWhatsApp = () => {
        window.open("https://api.whatsapp.com/send?text=", "_blank");
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const [data, setData] = useState(null); // State to store fetched data
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle error

    useEffect(() => {
        const fetchData = async () => {
            try {
                let baseURL = import.meta.env.VITE_API_BASE_URL;
                let response = await fetch(baseURL);

                if (!response.ok) {
                    baseURL = import.meta.env.VITE_API_BASE_URL2;
                    response = await fetch(baseURL);
                }

                const data = await response.json();
                setData(data); // Update state with the fetched  data
                setLoading(false);
            } catch (err) {
                setError(err.message); // Set error if any
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }


    let carouselList = data.spotLightAnimes;
    let trendingAnimes = data.trendingAnimes;
    let topAiringAnimes = data.featuredAnimes.topAiringAnimes;
    let mostPopularAnimes = data.featuredAnimes.mostPopularAnimes;

    let index = -1;

    return (
        <>

            <section className="spotlight-carousel">
                {
                    data !== null ? (carouselList.map((item) => {
                        index++;
                        return (
                            <CarouselItem key={index} item={item} index={index} currentSlide={currentSlide} />
                        )
                    })) : <div>No data available</div>

                }

                <div className="button-container">
                    <button onClick={() => {
                        if (currentSlide < carouselList.length - 1) setCurrentSlide(currentSlide + 1);
                        else setCurrentSlide(0);
                    }}>
                        <GrFormNextLink />
                    </button>

                    <button onClick={() => {
                        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
                        else setCurrentSlide(carouselList.length - 1);
                    }}>
                        <GrFormPreviousLink />
                    </button>
                </div>
            </section>

            {/* Trending anime  */}

            <section className="trending-section">

                <h3 className="trending-title">Trending Animes</h3>

                <div className="trending-container">

                    <div className="trending-list">
                        {
                            trendingAnimes.map((item, index) => {
                                return (
                                    <TrendingAnimeListItem key={index} rank={item.rank ? item.rank : (index + 1)} name={item.name} poster={item.poster ? item.poster : item.img} id={item.id} />
                                )
                            })}
                    </div>

                </div>
            </section>

            <section className="share" style={{
                marginTop: "2rem"
            }}>
                <div className="container">
                    <div className="share-icon"></div>
                    <div>
                        <p>Share <strong style={{
                            fontSize: "1.2rem",
                            color: "var(--secondary-color)"

                        }}>AniVerse</strong>
                            <br />    with your friends</p>
                    </div>

                    <div className="share-buttons">
                        <div className="telegram" onClick={shareOnTelegram}>
                            <img alt="Telegram sharing button" src="https://platform-cdn.sharethis.com/img/telegram.svg" />
                            <span className="share-label">Telegram</span>
                        </div>

                        <div className="facebook" onClick={shareOnFacebook}>
                            <img alt="Facebook sharing button" src="https://platform-cdn.sharethis.com/img/facebook.svg" />
                            <span className="share-label">Facebook</span>
                        </div>

                        <div className="twitter" onClick={shareOnTwitter}>
                            <img alt="Twitter sharing button" src="https://platform-cdn.sharethis.com/img/twitter.svg" />
                            <span className="share-label">Twitter</span>
                        </div>

                        <div className="whatsapp" onClick={shareOnWhatsApp}>
                            <img alt="WhatsApp sharing button" src="https://platform-cdn.sharethis.com/img/whatsapp.svg" />
                            <span className="share-label">WhatsApp</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="featured">
                <div className="featured-container">
                    <h4>Top Airing</h4>
                    <ul>
                        {topAiringAnimes.map((item, index) => {
                            return (
                                index < 10 &&
                                <FeaturedAnimeItem
                                    key={index}
                                    name={item.name}
                                    img={item.img ? item.img : item.poster}
                                    sub={item.eps ? item.eps.sub : null}
                                    dub={item.eps ? item.eps.dub : null}
                                    id={item.id}
                                    otherInfo={item.otherInfo}
                                />
                            )
                        })}
                    </ul>
                </div>
                <div className="featured-container">
                    <h4>Most popular</h4>
                    <ul>
                        {mostPopularAnimes.map((item, index) => {
                            return (
                                index < 10 &&
                                <FeaturedAnimeItem
                                    key={index}
                                    name={item.name}
                                    img={item.img ? item.img : item.poster}
                                    sub={item.episodes ? item.episodes.sub : null}
                                    dub={item.episodes ? item.episodes.dub : null}
                                    id={item.id}
                                    otherInfo={item.otherInfo}
                                />
                            )
                        })}
                    </ul>
                </div>
            </section>

        </>
    )
}

export default Home