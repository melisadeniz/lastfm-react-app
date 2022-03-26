
const LOAD_MORE_ARTISTS = "LOAD_MORE_ARTISTS"
const RESET_LOAD = "RESET_LOAD"

export const loadMoreArtists = () => ({
    type: LOAD_MORE_ARTISTS,
    
})

export const resetLoad = () => ({
    type: RESET_LOAD
})

const loadMoreReducer = (pages = [1], action) => {
    switch(action.type) {
        case LOAD_MORE_ARTISTS:
            return [...pages, pages[pages.length-1]+1]
        case RESET_LOAD:
            return [1]
        default:
            return pages
    }
}

export {loadMoreReducer}