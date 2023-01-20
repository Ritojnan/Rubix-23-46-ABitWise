import React from 'react'
import { Map, Marker } from "pigeon-maps"

export default function MapCustom() {
  // (navigator.geolocation.watchPosition((position=>{
  //   console.log(position.coords.longitude)
  //   console.log(position.coords.latitude)
  // longitude = position.coords.longitude
  // latitude = position.coords.latitude
  // })))
  
  return (
    
    <div className="putdown">
                 <Map className="putdown" height={300} defaultCenter={[19.2151552

,  72.8530944
]} defaultZoom={11}>
      <Marker width={50} anchor={[19.2151552,72.8530944 ]} />
      <Marker width={50} anchor={[51.879, 4.6997]} />
    </Map>
      
    </div>
  )
}
