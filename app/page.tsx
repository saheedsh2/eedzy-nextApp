"use client"
import Booking from "@/components/Booking/Booking";
import MapboxMap from "@/components/Map/MapBoxMap";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { SourceCordiContext } from "@/context/SourceCordContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import {SelectedCarAmountContext} from "@/context/SelectedCarAmountContext"
import { useEffect, useState } from "react";





export default function Home() {

    const [userLocation, setUserLocation] = useState<any>()
    const [sourceCordinates, setSourceCordinates] = useState<any>();
    const [destinationCordinates, setDestinationCordinates] = useState<any>();
    const [directionData, setDirectionData] = useState<any>();
    const [carAmount, setCarAmount] = useState<any>();

  useEffect(() => {
    getUserLocation();
  },[])

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function(pos) {
      console.log(pos);
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
      
    })
  }



  return (
    <div>
      <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
      <SourceCordiContext.Provider value={{sourceCordinates, setSourceCordinates}}>
      <DestinationCordiContext.Provider value={{destinationCordinates, setDestinationCordinates}}>
      <DirectionDataContext.Provider value={{directionData, setDirectionData}}>
      <SelectedCarAmountContext.Provider value={{carAmount, setCarAmount}}>

      <div className="grid grid-cols-1 md:grid-cols-3">
        
        <div>
          <Booking />
          </div>
        <div className="col-span-2">
            <MapboxMap />
        </div>

      </div>
    
      </SelectedCarAmountContext.Provider>
      </DirectionDataContext.Provider>
      </DestinationCordiContext.Provider>
      </SourceCordiContext.Provider>
       </UserLocationContext.Provider>
       
      
    </div>
  )
}
