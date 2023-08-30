import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDemo() {
  return (
    <div className="flex flex-col items-center  w-[80rem] justify-center space-y-24">

        <div className="flex space-x-24 mt-12">

    <div className=" items-center space-x-4 ">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[180px] bg-black" />
      <Skeleton className="h-12 w-12 rounded-full bg-black"  />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[250px] bg-black" />
        <Skeleton className="h-4 w-[250px] bg-black" />
        {/* <Skeleton className="h-4 w-[200px] bg-black" /> */}
      </div>
    </div>

    <div className="flex items-center space-x-4 ">
      <div className="space-y-2">
      <Skeleton className="h-4 w-[180px] bg-black" />
      <Skeleton className="h-12 w-12 rounded-full bg-black"  />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[250px] bg-black" />
        <Skeleton className="h-4 w-[250px] bg-black" />
      </div>
    </div>
        </div>

<div className="flex space-x-24 mb-12">

    <div className="flex items-center space-x-4 ">
      <div className="space-y-2">
      <Skeleton className="h-4 w-[180px] bg-black" />
      <Skeleton className="h-12 w-12 rounded-full bg-black"  />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[250px] bg-black" />
        <Skeleton className="h-4 w-[250px] bg-black" />
      </div>
    </div>

    <div className="flex items-center space-x-4 ">
      <div className="space-y-2">
      <Skeleton className="h-4 w-[180px] bg-black" />
      <Skeleton className="h-12 w-12 rounded-full bg-black"  />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[200px] bg-black" />
        <Skeleton className="h-4 w-[250px] bg-black" />
        <Skeleton className="h-4 w-[250px] bg-black" />
      </div>
    </div>
    </div>
</div>
  )
}
