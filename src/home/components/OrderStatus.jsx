import { useState } from "react"

export default function OrderStatus({ statusInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return <div className="bg-red-600 z-[1] w-64 shadow-md rounded-md cursor-pointer select-none">
    <div className="text-white p-3" onClick={() => setIsExpanded((state) => !state)}>{statusInfo.name}</div>
    { isExpanded &&
      <div className="bg-white rounded-b-md p-4 italic text-sm">
        <div>{ statusInfo.timeStamp }</div> 
        <div>{ statusInfo.user }</div> 
      </div>
    }
  </div>
}
