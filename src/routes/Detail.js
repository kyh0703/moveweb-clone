import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const getDetail = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setDetail(json.data.movie);
            setLoading(false);
            console.log(json.data.movie);
        };
        getDetail();
    }, [id]);

    return (
        <div>
            {loading ? (
                <h1> Loading...</h1 >
            ) : (
                <div>
                    <img src={detail.large_cover_image} />
                    <h1>{detail.title}</h1>
                    <span>{detail.rating} {detail.runtime}</span>
                    <p>{detail.description_full}</p>
                    <ul>
                        {detail.torrents.map((torrent) => (
                            <li key={torrent.hash}>{torrent.url}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Detail;