'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { LocationNode } from '@/data/mockLocations';

type Props={

nodes:LocationNode[]

selected:LocationNode|null

onSelect:(location:LocationNode)=>void

expanded:string[]

toggleExpand:(id:string)=>void

};

export default function LocationTree({

nodes,

selected,

onSelect,

expanded,

toggleExpand

}:Props){

return(

<div>

{nodes.map(node=>(

<TreeNode

key={node.id}

node={node}

selected={selected}

onSelect={onSelect}

expanded={expanded}

toggleExpand={toggleExpand}

level={0}

/>

))}

</div>

);

}

function TreeNode({

node,

selected,

onSelect,

expanded,

toggleExpand,

level

}:{

node:LocationNode

selected:LocationNode|null

onSelect:(location:LocationNode)=>void

expanded:string[]

toggleExpand:(id:string)=>void

level:number

}){

const hasChildren =
node.children && node.children.length>0;

const isExpanded =
expanded.includes(node.id);

const isSelected =
selected?.id===node.id;

return(

<div>

<div

className={`
flex items-center gap-2 text-sm rounded px-2 py-1 cursor-pointer

${isSelected
? 'bg-[#1E2638] text-white'
: 'text-white/70 hover:bg-white/5'
}

`}

style={{

paddingLeft:(level*14)+8

}}

onClick={()=>onSelect(node)}

>

{hasChildren && (

<button

onClick={(e)=>{

e.stopPropagation();

toggleExpand(node.id);

}}

>

<ChevronRightIcon

className={`
w-4 h-4 text-white/50 transition

${isExpanded?'rotate-90':''}
`}

/>

</button>

)}

<span>

{node.name}

</span>

<span className="text-xs text-white/40">

{node.type}

</span>

</div>

{hasChildren && isExpanded && (

<div>

{node.children!.map(child=>(

<TreeNode

key={child.id}

node={child}

selected={selected}

onSelect={onSelect}

expanded={expanded}

toggleExpand={toggleExpand}

level={level+1}

/>

))}

</div>

)}

</div>

);

}