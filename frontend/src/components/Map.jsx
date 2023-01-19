import { motion } from "framer-motion";
import { Map, Marker } from "pigeon-maps"
import React from 'react'

export default function Map() {
  return (
    <div>
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
      
    </div>
  )
}
