import {LocationNode} from '@/data/mockLocations'

export function getLocationStats(
locations:LocationNode[]
){

let locationsCount = 0
let buildings = 0
let units = 0
let rooms = 0

function walk(node:LocationNode){

if(node.type==='LOCATION')
locationsCount++

if(node.type==='BUILDING')
buildings++

if(node.type==='UNIT')
units++

if(node.type==='ROOM')
rooms++

node.children?.forEach(walk)

}

locations.forEach(walk)

return {

locations:locationsCount,

buildings,

units,

rooms

}

}