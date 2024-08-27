import Navbar from "../components/navbar";
import  "../styles/home.scss"

export default function Home() {
  return (
    <section className="home-container">
      <main >
        <Navbar />
        <div className="home">
          <div className="home-body">
        <h3>So, you want to travel to</h3>
        <h1>Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go  to 
           outer space and not hover kind of on the edge of it. Well sit back, and relax 
           because we’ll give you a truly out of this world experience!</p>
           </div>
           <div className="rounded-div">
             <h3>EXPLORE</h3>
           </div>
        </div>
      </main>
    </section>
  )
}
