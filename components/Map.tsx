import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import json from './feature.json'

interface CustomMarker {
  markerOffset: number;
  name: string;
  coordinates: [number, number]
}

const markers: CustomMarker[] = [
  {
    markerOffset: -30,
    name: "Lille",
    coordinates: [ 3.057256, 50.62925]
  },
]

const Map: React.FC = () => {
    return (
        <ComposableMap
            width={500}
            height={900}
            projectionConfig={{
                rotate: [-10.0, -53.0, 0],
                scale: 500
            }}
        >


        <Geographies geography={json} fill={'#67e8f9'} stroke="#111827">
            {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                ))
            }
        </Geographies>

            {
                markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                    <g
                    fill="#cbd5e1"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                    >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                    <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fill: "#FFF" }}
                    className='text-xl font-bold text-white'
                    >
                    </text>
                </Marker>
            ))
      }
      
    </ComposableMap>
    )
}

export default Map;