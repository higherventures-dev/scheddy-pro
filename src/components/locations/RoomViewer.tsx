'use client';

import { LocationNode } from '@/data/mockLocations';

export default function RoomViewer({

room

}:{

room:LocationNode|null

}){

if(!room){

return null;

}

return(

<div className="h-full bg-[#141A27]">

<div className="p-4 border-b border-white/10">

<div className="text-white text-lg">

{room.name}

</div>

</div>

<div className="p-4 grid grid-cols-2 gap-3">

{room.images?.map((img,i)=>(

<img

key={i}

src={img}

className="h-44 w-full object-cover rounded"

/>

))}

</div>

</div>

);
}