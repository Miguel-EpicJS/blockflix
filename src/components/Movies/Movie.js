import { MovieContainer } from "./styles";


const imgUrl = "https://image.tmdb.org/t/p/w200/";

export default function Movie({ movie, navigate, addToCart }) {
    const gotToMovie = () => {
        navigate(movie.id);
    };

    const onClickAddToCart = () => {
        addToCart(movie);
    };

    return (
        <MovieContainer className="card">
            <img
                onClick={gotToMovie}
                src={imgUrl + movie.poster_path}
                className="card-img-top"
                alt="..."
                style={{ maxHeight: 300, padding: 20 }}
            />
            <div className="card-body">
                <h5 className="card-title" onClick={gotToMovie}>
                    {movie.title}
                </h5>
            </div>

            <div className="card-footer">
                <span onClick={gotToMovie} className="btn btn-primary">Ver detalhes</span>
                <button
                    className="btn btn-secondary"
                    onClick={onClickAddToCart}
                >
                    R$ {movie.price}
                </button>
            </div>
        </MovieContainer>
    );
}