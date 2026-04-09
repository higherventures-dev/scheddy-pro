'use client';

import { useState,useEffect } from 'react';

import LocationsMap from './LocationsMap';
import LocationTree from './LocationTree';
import LocationDetailsPanel from './LocationDetailsPanel';
import RoomViewer from './RoomViewer';

import { LocationNode } from '@/data/mockLocations';

type Props={

locations:LocationNode[]

selectedLocation:LocationNode|null

setSelectedLocation:(location:LocationNode)=>void

};

export default function LocationWorkspace({

locations,
selectedLocation,
setSelectedLocation

}:Props){

/*
SAFETY FIX:
Handle empty datasets
*/

if(!locations || locations.length===0){

return(

<div className="h-[640px] flex items-center justify-center border border-white/10 rounded-xl bg-[#141A27]">

<div className="text-white/50">

No locations available

</div>

</div>

);

}


const initialLocation =
selectedLocation ?? locations[0];

const [expanded,setExpanded]=
useState<string[]>([locations[0].id]);

const [mapNode,setMapNode]=
useState<LocationNode>(initialLocation);

const [viewMode,setViewMode]=
useState<'map'|'room'>('map');


/*
Ensure selected location always valid
*/

useEffect(()=>{

if(!selectedLocation && locations.length){

setSelectedLocation(locations[0]);

setMapNode(locations[0]);

}

},[locations]);


function toggleExpand(id:string){

if(expanded.includes(id)){

setExpanded(
expanded.filter(x=>x!==id)
);

}else{

setExpanded([...expanded,id]);

}

}


function findNearestMapNode(
node:LocationNode,
nodes:LocationNode[]
):LocationNode{

if(node.latitude && node.longitude){

return node;

}

function search(
current:LocationNode,
parent:LocationNode|null
):LocationNode|null{

if(current.id===node.id){

if(parent?.latitude){

return parent;

}

return null;

}

if(current.children){

for(const child of current.children){

const result =
search(child,current);

if(result){

return result;

}

}

}

return null;

}

for(const root of nodes){

const result =
search(root,null);

if(result){

return result;

}

}

return nodes[0];

}


function handleSelection(node:LocationNode){

setSelectedLocation(node);

const newMapNode =
findNearestMapNode(node,locations);

setMapNode(newMapNode);

if(node.type==='ROOM'){

setViewMode('room');

}else{

setViewMode('map');

}

}


return(

<div className="grid grid-cols-12 gap-4 h-[640px]">


<div className="col-span-3 h-full bg-[#141A27] border border-white/10 rounded-xl overflow-auto">

<LocationTree

nodes={locations}

selected={initialLocation}

onSelect={handleSelection}

expanded={expanded}

toggleExpand={toggleExpand}

/>

</div>


<div className="col-span-6 h-full flex flex-col">


<div className="flex-1 border border-white/10 rounded-xl overflow-hidden">

{viewMode==='map' && mapNode && (

<LocationsMap location={mapNode}/>

)}

{viewMode==='room' && selectedLocation && (

<RoomViewer room={selectedLocation}/>

)}

</div>

</div>


<div className="col-span-3 h-full bg-[#141A27] border border-white/10 rounded-xl overflow-auto">

<LocationDetailsPanel location={initialLocation}/>

</div>


</div>

);

}