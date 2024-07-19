import { formatCurrency } from "@/lib/utils"
import { Cart } from "@/types/cart"
import { CartItemQuantity } from "./item-quantity"

type Props = {
    item: Cart
}

export const CartItem = ( { item } : Props ) => {
    return (

        <div className="flex items-center gap-5" key={item.product.id} >

            <div className="w-16 overflow-hidden rounded-md" > <img src={ item.product.image } className="w-full h-auto object-cover" /> </div>

            <div className="flex-1">

                <p> { item.product.name } </p>
                <p className="text-foreground/50 text-sm" > { formatCurrency(item.product.price) } </p>

            </div>

            <div> <CartItemQuantity cartItem={ item } /> </div>
 
        </div>

    )
}