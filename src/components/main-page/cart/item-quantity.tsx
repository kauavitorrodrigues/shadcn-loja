import { Button } from "@/components/ui/button"
import { useCartStore } from "@/stores/cart.store"
import { Cart } from "@/types/cart"
import { MinusIcon, PlusIcon } from "lucide-react"

type Props = {
    cartItem: Cart
}

export const CartItemQuantity = ( { cartItem } : Props ) => {

    const { upsertCartItem } = useCartStore( state => state )

    const handleAddButton = () => {
        upsertCartItem( cartItem.product, 1 )
    }

    const handleRemoveButton = () => {
        upsertCartItem( cartItem.product, -1 )
    }
    
    return (

        <div className="flex items-center gap-2" >

            <Button 
                variant={"outline"} 
                size={"icon"} 
                className="size-6"
                onClick={handleRemoveButton} 
                > <MinusIcon className="size-3" /> 
            </Button>

            <p className="text-sm" >{ cartItem.quantity }</p>

            <Button 
                variant={"outline"} 
                size={"icon"} 
                className="size-6"
                onClick={handleAddButton} 
                > <PlusIcon className="size-3" /> 
            </Button>

        </div>

    )

}