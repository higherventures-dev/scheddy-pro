import { LocationNode } from '@/data/mockLocations';

export type LocationStats = {

locations:number
buildings:number
units:number
rooms:number

};

export function calculateLocationStats(
locations:LocationNode[]
):LocationStats{

let stats:LocationStats={

locations:0,
buildings:0,
units:0,
rooms:0

};

function walk(node:LocationNode){

if(node.type==='LOCATION') stats.locations++;
if(node.type==='BUILDING') stats.buildings++;
if(node.type==='UNIT') stats.units++;
if(node.type==='ROOM') stats.rooms++;

if(node.children){

node.children.forEach(walk);

}

}

locations.forEach(walk);

return stats;

}