'use client';

import { useState } from 'react';

import LocationWorkspace from './LocationWorkspace';

import { mockLocations } from '@/data/mockLocations';

export default function LocationsDashboard(){

const [selectedLocation,setSelectedLocation]=
useState(
mockLocations[0]
);

return(

<div className="space-y-4">

<div className="text-lg text-white font-semibold">

Service Locations

</div>

<LocationWorkspace

selectedLocation={selectedLocation}

setSelectedLocation={setSelectedLocation}

/>

</div>

);

}