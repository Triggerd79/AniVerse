/* eslint-disable react/prop-types */

const TrendingAnimeListItem = ({ rank, name, poster, id }) => {
    return (
        <div className="item">
            <div className="number">
                <span>{rank < 10 ? `0${rank}` : rank}</span>
                <div className="film-title dynamic-name">{name}</div>
            </div>
            <a href={`/${id}`} className="film-poster">
                <img className="film-poster-img" title={name} alt={name} src={poster} />
            </a>
            <div className="clearfix">
            </div>
        </div>
    )
}

export default TrendingAnimeListItem