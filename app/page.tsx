import Booking from "@/components/Booking/Booking";
import MapboxMap from "@/components/Map/MapBoxMap";





export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        
        <div>
          <Booking />
          </div>
        <div className="col-span-2">
            <MapboxMap />
        </div>

      </div>
      
    </div>
  )
}
