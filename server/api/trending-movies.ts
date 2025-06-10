import type TMovie from "../../types/TMovie";

const trendingMovies: TMovie[] = [
    {
        "name": "Shadow Reckoning",
        "rating": "7.2",
        "tags": [
            "Thriller",
            "Mystery",
            "Action"
        ],
        "poster": "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80"
    },
    {
        "name": "Eclipse Protocol",
        "rating": "8.1",
        "tags": [
            "Sci-Fi",
            "Adventure",
            "Drama"
        ],
        "poster": "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80"
    },
    {
        "name": "Crimson Vortex",
        "rating": "6.8",
        "tags": [
            "Fantasy",
            "Action",
            "Horror"
        ],
        "poster": "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80"
    }
]

export default defineEventHandler(() => {
    const pivot = Math.floor(Math.random() * trendingMovies.length);
    const result = trendingMovies.slice(pivot).concat(trendingMovies.slice(0, pivot));
    return {
        trendingMovies: result,
    }
})