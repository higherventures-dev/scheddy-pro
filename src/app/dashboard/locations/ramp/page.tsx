'use client';

import { useState } from 'react';

import LocationWorkspace from '@/components/locations/LocationWorkspace';

import {
mockLocations,
LocationNode
} from '@/data/mockLocations';

export default function ExternalLocationsPage(){

const [selectedLocation,setSelectedLocation]=
useState<LocationNode|null>(mockLocations[0]);

return(

<div className="flex flex-col gap-6">

<div>

<h1 className="text-2xl text-white">

External Locations

</h1>

<p className="text-white/50">

Locations imported from Ramp

</p>

</div>

<LocationWorkspace

selectedLocation={selectedLocation}

setSelectedLocation={setSelectedLocation}

/>

</div>

);

}