import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { RocketIcon } from "lucide-react"

export const CartSidebar = () => {
    return (

        <Sheet>

            <SheetTrigger asChild className="flex items-center" >

                <Button variant="outline"> 
                    <RocketIcon className="h-[1.2rem] w-[1.2rem]"  /> 
                    <p className="ml-2 text-sm" >Carrinho</p> 
                </Button>

            </SheetTrigger>

            <SheetContent>

                <SheetHeader>

                    <SheetTitle>Carrinho</SheetTitle>

                </SheetHeader>

                ...

            </SheetContent>

        </Sheet>

    )
}