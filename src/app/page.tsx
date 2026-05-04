import MovieCarousel from "@/app/components/MovieCarousel";
import FetchMovies from "@/app/components/FetchMovies"
import SideMenu from "@/app/components/SideMenu";
import MovieBanner from "@/app/components/MovieBanner";

export default async function HomePage() {
  const [latestMovies, recommendMovies, popularMovies, ratingMovies] = await Promise.all([
    FetchMovies("https://tv.lk21official.cc/release/"),
    FetchMovies("https://tv.lk21official.cc/latest/"),
    FetchMovies("https://tv.lk21official.cc/populer/"),
    FetchMovies("https://tv.lk21official.cc/rating/")
  ]);

  // Ambil film acak dengan aman tanpa modul 'crypto'
  const randomMovie = recommendMovies.length > 0 
    ? recommendMovies[Math.floor(Math.random() * recommendMovies.length)] 
    : null;

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans">
      <SideMenu />
      <main className="ml-16 pb-20">
        {/* Render banner hanya jika randomMovie ada nilainya */}
        {randomMovie && <MovieBanner movie={randomMovie} />}
        
        <MovieCarousel title="New on Web" movies={latestMovies} />
        <MovieCarousel title="Today's Top Picks for You" movies={recommendMovies} />
        <MovieCarousel title="Users Favorites" movies={popularMovies} />
        <MovieCarousel title="Exciting Movies" movies={ratingMovies} />
      </main>
    </div>
  );
}
