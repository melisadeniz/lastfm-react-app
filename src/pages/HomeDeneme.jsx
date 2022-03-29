

// export default function Home() {
//   //FETCH TOP ARTISTS
//   const fetchTopArtists = async ({ pageParam = 1 }) => {
//     const response = await fetch(
//       `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&page=${pageParam}`
//     );
//     return response.json();
//   };

//   const {
//     data,
//     isLoading,
//     isError,
//     error,
//     hasNextPage,
//     isFetching,
//     isFetchingNextPage,
//     fetchNextPage,
//   } = useInfiniteQuery(["artists"], fetchTopArtists, {
//     getNextPageParam: (pages) => {
//       if (pages.length < pages.artists[0]["@attr"].totalPages) {
//         // "totalPages": "83349"
//         // pages.artists[0]['@attr'].totalPages

//         return [pages.length + 1] + 1;
//       } else {
//         return undefined;
//       }
//     },
//   });

//   console.log(data);

//   //Infinite Scroll
//   useEffect(() => {
//     let fetching = false;
//     const onScroll = async (event) => {
//       const { scrollHeight, scrollTop, clientHeight } =
//         event.target.scrollingElement;

//       if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
//         fetching = true;
//         if (hasNextPage) await fetchNextPage();
//         fetching = false;
//       }
//     };

//     document.addEventListener("scroll", onScroll);
//     return () => {
//       document.removeEventListener("scroll", onScroll);
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);