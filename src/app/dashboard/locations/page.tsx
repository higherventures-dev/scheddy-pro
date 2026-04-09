'use client';

import { useState } from 'react';

import LocationWorkspace from '@/components/locations/LocationWorkspace';
import LocationSummaryCards from '@/components/locations/LocationSummaryCards';
import LocationPortfolioCards from '@/components/locations/LocationPortfolioCards';

import { mockLocations } from '@/data/mockLocations';
import { calculateLocationStats } from '@/utils/locationHelpers';

export default function LocationsPage(){

const [selectedLocation,setSelectedLocation]=
useState(mockLocations[0]);

const stats =
calculateLocationStats(mockLocations);

return(

<div className="flex flex-col gap-6">

<div>

<h1 className="text-2xl text-white">
Service Locations
</h1>

<p className="text-white/50">
All Scheddy and Ramp locations
</p>

</div>


<LocationWorkspace

locations={mockLocations}

selectedLocation={selectedLocation}

setSelectedLocation={setSelectedLocation}

/>


<LocationSummaryCards stats={stats}/>


<LocationPortfolioCards locations={mockLocations}/>


</div>

);

}