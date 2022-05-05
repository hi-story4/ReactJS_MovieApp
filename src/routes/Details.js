import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie.description_full);
    if (movie == "") {
      setMovie("No Summary...");
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const linkStyle = {
    color: "skyblue",
    display: "flex"
  };
  return (
    <div>
      <h1 style={{ color: "#035397", display: "flex" }}>Summary</h1>

      <Link to={"/"} exact={true} style={{ textDecoration: "none" }}>
        <p style={linkStyle}>Home</p>
      </Link>

      <div style={{ marginTop: 50, fontSize: 20, color: "black" }}>{movie}</div>
    </div>
  );
}
export default Detail;
