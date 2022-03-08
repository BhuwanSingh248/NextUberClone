import {useEffect, React} from 'react'
import mapboxgl from 'mapbox-gl'

const style={
  wrapper:'flex-1 h-full w-full',

}

mapboxgl.accessToken = 'pk.eyJ1IjoiYmh1d2Fuc2luZ2gyNDgiLCJhIjoiY2wwaWV4YXNpMDF1OTNkbnN1Y2l2NnZxNiJ9.4A64vrDQhpgryGDa7u2kLg'
const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container:'map',
      style:'mapbox://styles/bhuwansingh248/cl0i5xgv1000a14rtxxbksqrk',
      center:[79.52433, 29.21609],
      zoom:10,
    })
  }, [])
  return (

    <div className={style.wrapper} id='map'>Map</div>
  )
}

export default Map