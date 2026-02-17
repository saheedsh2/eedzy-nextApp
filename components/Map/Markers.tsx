import { DestinationCordiContext } from '@/context/DestinationCordiContext';
import { SourceCordiContext } from '@/context/SourceCordContext';
import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext } from 'react'

import Map, { Marker } from "react-map-gl/mapbox";

function Markers() {

  const { userLocation } = useContext(UserLocationContext);
  const { sourceCordinates } = useContext(SourceCordiContext);
  const { destinationCordinates } = useContext(DestinationCordiContext);

  return (
    <div>

  

      {/* Source Marker */}
     {sourceCordinates? <Marker
          longitude={sourceCordinates?.lng}
          latitude={sourceCordinates?.lat}
          anchor="bottom" >
          <img src="./location.png" className="w-10 h-10" />
        </Marker>:null}
    

      {/* Destination Marker */}
          {destinationCordinates? <Marker
          longitude={destinationCordinates?.lng}
          latitude={destinationCordinates?.lat}
          anchor="bottom" >
          <img src="./location.png" className="w-10 h-10" />
        </Marker>:null}

    </div>
  )
}

export default Markers;
