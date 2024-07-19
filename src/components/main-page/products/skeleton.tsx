import { Skeleton } from "@/components/ui/skeleton"

export const TabsSkeleton = () => {

    return (

        <div className="flex flex-col gap-3" >

            <Skeleton className="w-full h-10 rounded-md" />

            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4" >

                { Array.from( { length: 6 }, ( item, index ) => (

                    <div key={ index } className="flex flex-col gap-2" >

                        <Skeleton className="w-full h-32 rounded-xl" />
                        <Skeleton className="w-full h-7 rounded-xl" />
                        <Skeleton className="w-16 h-5 rounded-xl" />
                        <Skeleton className="w-full h-9 rounded-xl" />

                    </div>

                ))}

            </div>

        </div>

    )

}