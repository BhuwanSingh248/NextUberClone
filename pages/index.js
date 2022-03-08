import Map from "../components/Map"
import Navbar from "../components/Navbar"

// to write multiple classes for css 
const style = {
  wrapper : 'h-screen w-screen flex flex-col',
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar/>
      <div className={style.main}>
      <Map/>
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
        {/* location selector   */}
        {/* confirm ride */}
        </div>
      </div>
    </div>
  )
}
