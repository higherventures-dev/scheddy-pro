'use client';

import { useState } from 'react';

import LocationWorkspace from '@/components/locations/LocationWorkspace';
import LocationSummaryCards from '@/components/locations/LocationSummaryCards';
import LocationPortfolioCards from '@/components/locations/LocationPortfolioCards';

import { mockLocations } from '@/data/mockLocations';
import { calculateLocationStats } from '@/utils/locationHelpers';

export default function ExternalLocationsPage(){

const externalLocations =
mockLocations.filter(
l=>l.source==='ramp'
);

const [selectedLocation,setSelectedLocation]=
useState(externalLocations[0]);

const stats =
calculateLocationStats(externalLocations);

return(

<div className="flex flex-col gap-6">

<div>

<h1 className="text-2xl text-white">
External Locations
</h1>

<p className="text-white/50">
Ramp integrated properties
</p>

</div>


<LocationWorkspace

locations={externalLocations}

selectedLocation={selectedLocation}

setSelectedLocation={setSelectedLocation}

/>


<LocationSummaryCards stats={stats}/>


<LocationPortfolioCards locations={externalLocations}/>


</div>

);

}