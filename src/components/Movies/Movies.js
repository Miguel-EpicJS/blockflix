import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Movie from "./Movie";
import { MyContext } from "../../context/context";
import { MovieService } from "../../services/MovieService";
import { MOVIES } from "../../tests/produtos";

/**
 * 1. [] Renderizar a lista de produtos
 * 2. [] Exibir quantos produtos estão no carrinho
 * 3. [] Ir para os detalhes do produto
 */
export function Movies() {
    const [movies, setMovies] = useState(MOVIES);
    // @todo esse produtos precisa vir do "portal"

    const { cartMovies, addMovieToCart } =
        useContext(MyContext);

    // const addMovieToCart = contexto.addMovieToCart

    const history = useHistory();

    useEffect(() => {
        const run = async () => {
            const movies = await MovieService.getMovies();
            setMovies(movies.results);
        };

        run();
    }, []);

    const goToMovies = (idMovies) => {
        history.push(`/movies/${idMovies}`);
    };

    const render = () => {
        return (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                {movies.map((movie) => {
                    return (
                        <Movie
                            key={movie.id}
                            movie={movie}
                            navigate={goToMovies}
                            addToCart={addMovieToCart}
                        />
                    );
                })}
            </div>
        )
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Movies</h1>
            {render()}
        </div>
    );
}