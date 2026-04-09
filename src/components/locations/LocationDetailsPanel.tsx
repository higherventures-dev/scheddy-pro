'use client';

import { LocationNode } from '@/data/mockLocations';

export default function LocationDetailsPanel({

location

}:{

location:LocationNode|null

}){

if(!location){

return(

<div className="h-full bg-[#141A27] border border-white/10 rounded p-4">

<div className="text-white/40">

Select a location

</div>

</div>

);

}

return(

<div className="h-full bg-[#141A27] border border-white/10 rounded p-4">

<div className="text-white text-lg">

{location.name}

</div>

<div className="text-white/50 text-sm mb-3">

{location.type}

</div>

{location.images && (

<div>

<div className="text-white/50 text-xs mb-2">

Photos

</div>

<div className="grid grid-cols-2 gap-2">

{location.images.map((img,i)=>(

<img

key={i}

src={img}

className="h-24 w-full object-cover rounded"

/>

))}

</div>

</div>

)}

</div>

);
}