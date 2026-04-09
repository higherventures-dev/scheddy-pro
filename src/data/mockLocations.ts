export type LocationType =
'LOCATION'|
'BUILDING'|
'UNIT'|
'ROOM'

export type LocationSource =
'scheddy'|
'ramp'

export type LocationNode={

id:string

name:string

type:LocationType

source:LocationSource

latitude?:number
longitude?:number

activeJobs?:number

images?:string[]

children?:LocationNode[]

}

export const mockLocations:LocationNode[]=[

{
id:'loc1',

name:'Lincoln Plaza Apartments',

type:'LOCATION',

source:'ramp',

latitude:38.891,

longitude:-121.293,

activeJobs:12,

children:[

{
id:'bld1',

name:'Building A',

type:'BUILDING',

source:'ramp',

latitude:38.8911,

longitude:-121.2931,

children:[

{
id:'unit1',

name:'Unit 101',

type:'UNIT',

source:'ramp',

latitude:38.89105,

longitude:-121.29305,

images:[

'/mock/units/unit101-1.jpg',
'/mock/units/unit101-2.jpg'

],

children:[

{
id:'room1',

name:'Kitchen',

type:'ROOM',

source:'ramp',

images:[

'/mock/rooms/kitchen-1.jpg'

]

},

{
id:'room2',

name:'Living Room',

type:'ROOM',

source:'ramp',

images:[

'/mock/rooms/living-1.jpg'

]

},

{
id:'room3',

name:'Bathroom',

type:'ROOM',

source:'ramp',

images:[

'/mock/rooms/bathroom-1.jpg'

]

}

]

},

{
id:'unit2',

name:'Unit 102',

type:'UNIT',

source:'ramp',

latitude:38.89106,

longitude:-121.29303,

images:[

'/mock/units/unit102-1.jpg'

],

children:[

{
id:'room4',

name:'Bedroom',

type:'ROOM',

source:'ramp',

images:[

'/mock/rooms/bedroom-1.jpg'

]

}

]

}

]

}

]

},

{
id:'loc2',

name:'Sunset Retail Center',

type:'LOCATION',

source:'scheddy',

latitude:38.612,

longitude:-121.402,

children:[

{
id:'bld2',

name:'Retail Strip',

type:'BUILDING',

source:'scheddy',

latitude:38.6122,

longitude:-121.4018,

children:[

{
id:'unit3',

name:'Suite 1',

type:'UNIT',

source:'scheddy',

latitude:38.61221,

longitude:-121.40178

},

{
id:'unit4',

name:'Suite 2',

type:'UNIT',

source:'scheddy',

latitude:38.61223,

longitude:-121.40176

}

]

}

]

}

];