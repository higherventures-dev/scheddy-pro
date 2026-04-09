'use client';

import { LocationNode } from '@/data/mockLocations';

type Props={
locations:LocationNode[]
};

function count(node:LocationNode,type:string){

let total=0;

function walk(n:LocationNode){

if(n.type===type){

total++;

}

if(n.children){

n.children.forEach(walk);

}

}

if(node.children){

node.children.forEach(walk);

}

return total;

}

export default function LocationPortfolioCards({

locations

}:Props){

return(

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

{locations.map(location=>(

<div

key={location.id}

className="rounded-2xl border border-white/10 bg-[#1A1F2E] p-6 hover:border-[#69AADE]/40 transition"

>

<div className="flex justify-between mb-5">

<div>

<div className="text-white text-lg font-medium">

{location.name}

</div>

<div className="text-white/40 text-sm">

—

</div>

</div>

<div className="text-xs border border-[#69AADE] text-[#69AADE] px-3 py-1 rounded-full">

{location.source.toUpperCase()}

</div>

</div>


<div className="grid grid-cols-3 gap-4 mb-5">

<div className="bg-white/5 rounded-xl p-4">

<div className="text-white text-xl">

{count(location,'BUILDING')}

</div>

<div className="text-white/40 text-xs">

BUILDINGS

</div>

</div>

<div className="bg-white/5 rounded-xl p-4">

<div className="text-white text-xl">

{count(location,'UNIT')}

</div>

<div className="text-white/40 text-xs">

UNITS

</div>

</div>

<div className="bg-white/5 rounded-xl p-4">

<div className="text-white text-xl">

{count(location,'ROOM')}

</div>

<div className="text-white/40 text-xs">

ROOMS

</div>

</div>

</div>


<div className="flex gap-6 text-white/60 text-sm">

<div>

{location.activeJobs ?? 0} active jobs

</div>

<div>

0 vendors

</div>

</div>

</div>

))}

</div>

);

}