'use client';

import { useState } from 'react';

import LocationWorkspace from '@/components/locations/LocationWorkspace';
import LocationSummaryCards from '@/components/locations/LocationSummaryCards';
import LocationPortfolioCards from '@/components/locations/LocationPortfolioCards';

import { mockLocations } from '@/data/mockLocations';
import { calculateLocationStats } from '@/utils/locationHelpers';

export default function ManagedLocationsPage(){

const managedLocations =
mockLocations.filter(
l=>l.source==='scheddy'
);

const [selectedLocation,setSelectedLocation]=
useState(managedLocations[0]);

const stats =
calculateLocationStats(managedLocations);

return(

<div className="flex flex-col gap-6">

<div>

<h1 className="text-2xl text-white">
Managed Locations
</h1>

<p className="text-white/50">
Scheddy managed properties
</p>

</div>


<LocationWorkspace

locations={managedLocations}

selectedLocation={selectedLocation}

setSelectedLocation={setSelectedLocation}

/>


<LocationSummaryCards stats={stats}/>


<LocationPortfolioCards locations={managedLocations}/>


</div>

);

}