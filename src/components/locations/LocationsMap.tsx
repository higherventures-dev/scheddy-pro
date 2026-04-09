'use client';

import { useEffect,useRef } from 'react';

import mapboxgl from 'mapbox-gl';

import { LocationNode } from '@/data/mockLocations';

mapboxgl.accessToken =
process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function LocationsMap({

location

}:{

location:LocationNode

}){

const containerRef =
useRef<HTMLDivElement|null>(null);

const mapRef =
useRef<mapboxgl.Map|null>(null);

const markerRef =
useRef<mapboxgl.Marker|null>(null);


//
// CREATE MAP ONLY ONCE
//

useEffect(()=>{

if(!containerRef.current) return;

if(mapRef.current) return;

mapRef.current =
new mapboxgl.Map({

container:containerRef.current,

style:
'mapbox://styles/mapbox/dark-v11',

center:[
location.longitude!,
location.latitude!
],

zoom:16

});

mapRef.current.addControl(

new mapboxgl.NavigationControl()

);

},[]);


//
// UPDATE CAMERA WHEN LOCATION CHANGES
//

useEffect(()=>{

if(!mapRef.current) return;

if(!location?.latitude) return;

if(!location?.longitude) return;


// SMOOTH CAMERA MOVE

mapRef.current.flyTo({

center:[
location.longitude,
location.latitude
],

zoom:17,

speed:0.8

});


//
// UPDATE MARKER
//

if(markerRef.current){

markerRef.current.remove();

}

markerRef.current =
new mapboxgl.Marker({

color:'#3b82f6'

})

.setLngLat([

location.longitude,
location.latitude

])

.addTo(mapRef.current);


},[location]);


return(

<div

ref={containerRef}

className="w-full h-full"

/>

);

}