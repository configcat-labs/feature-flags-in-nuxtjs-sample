import type TMovie from "../../types/TMovie";

const movies: TMovie[] = [
    {
        "name": "Externals",
        "rating": "6.30",
        "tags": [
            "Drama",
            "Adventure",
            "Action"
        ],
        "poster": "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80"
    },
    {
        "name": "Avengers: Endgame",
        "rating": "8.40",
        "tags": [
            "Drama",
            "Action",
            "Crime"
        ],
        "poster": "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80"
    },
    {
        "name": "Spiderman 2",
        "rating": "6.00",
        "tags": [
            "Sci-Fi",
            "Adventure",
            "Action"
        ],
        "poster": "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80"
    }
]

export default defineEventHandler(() => {
    return {
        movies,
    }
})