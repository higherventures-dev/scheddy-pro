'use client';

import { useState } from 'react';

import LocationsMap from './LocationsMap';
import LocationTree from './LocationTree';
import LocationDetailsPanel from './LocationDetailsPanel';
import RoomViewer from './RoomViewer';

import {
LocationNode,
mockLocations
} from '@/data/mockLocations';

type Props={

selectedLocation:LocationNode|null

setSelectedLocation:(location:LocationNode)=>void

};

export default function LocationWorkspace({

selectedLocation,

setSelectedLocation

}:Props){

const initialLocation =
selectedLocation ?? mockLocations[0];

const [expanded,setExpanded]=
useState<string[]>([mockLocations[0].id]);

const [mapNode,setMapNode]=
useState<LocationNode>(initialLocation);

const [viewMode,setViewMode]=
useState<'map'|'room'>('map');


function toggleExpand(id:string){

if(expanded.includes(id)){

setExpanded(
expanded.filter(x=>x!==id)
);

}else{

setExpanded([...expanded,id]);

}

}


/*
CORE FIX:
Always find nearest node with coordinates
*/

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
findNearestMapNode(node,mockLocations);

setMapNode(newMapNode);

if(node.type==='ROOM'){

setViewMode('room');

}else{

setViewMode('map');

}

}


function count(type:string){

let total=0;

function walk(nodes:any){

nodes.forEach((n:any)=>{

if(n.type===type){

total++;

}

if(n.children){

walk(n.children);

}

});

}

walk(mockLocations);

return total;

}


return(

<div className="grid grid-cols-12 gap-4 h-[660px]">


{/* TREE */}

<div className="col-span-3 bg-[#141A27] border border-white/10 rounded-xl overflow-auto">

<LocationTree

nodes={mockLocations}

selected={initialLocation}

onSelect={handleSelection}

expanded={expanded}

toggleExpand={toggleExpand}

/>

</div>


{/* CENTER */}

<div className="col-span-6 flex flex-col">


{/* MAP */}

<div className="h-[380px] border border-white/10 rounded-xl overflow-hidden mb-4">

{viewMode==='map' && mapNode && (

<LocationsMap location={mapNode}/>

)}

{viewMode==='room' && selectedLocation && (

<RoomViewer room={selectedLocation}/>

)}

</div>


{/* SUMMARY */}

<div className="grid grid-cols-4 gap-3">

<div className="bg-[#141A27] border border-white/10 p-3 rounded">

<div className="text-white text-xl">

{count('LOCATION')}

</div>

<div className="text-white/50 text-xs">

Locations

</div>

</div>

<div className="bg-[#141A27] border border-white/10 p-3 rounded">

<div className="text-white text-xl">

{count('BUILDING')}

</div>

<div className="text-white/50 text-xs">

Buildings

</div>

</div>

<div className="bg-[#141A27] border border-white/10 p-3 rounded">

<div className="text-white text-xl">

{count('UNIT')}

</div>

<div className="text-white/50 text-xs">

Units

</div>

</div>

<div className="bg-[#141A27] border border-white/10 p-3 rounded">

<div className="text-white text-xl">

{count('ROOM')}

</div>

<div className="text-white/50 text-xs">

Rooms

</div>

</div>

</div>


</div>


{/* DETAILS */}

<div className="col-span-3">

<LocationDetailsPanel

location={initialLocation}

/>

</div>


</div>

);

}