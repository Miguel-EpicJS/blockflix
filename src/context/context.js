import React, { useState } from "react";

export const MyContext = React.createContext({
    cartMovies: [],
    user: true,
});

export function MyProvider({ children }) {
    const [cartMovies, setCartMovies] = useState([]);

    const addMovieToCart = (movie) => {
        setCartMovies((prevState) => {
            if (prevState.find((p) => p.id === movie.id)) {
                return prevState;
            }

            return prevState.concat(movie);
        });
    };

    return (
        <MyContext.Provider
            value={{
                cartMovies,
                addMovieToCart,
                user: false
            }}
        >
            {children}
        </MyContext.Provider>
    );
}