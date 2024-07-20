import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RocketIcon, ShoppingCart, UtensilsCrossed } from "lucide-react"
import { useCartStore } from "@/stores/cart.store"
import { formatCurrency } from "@/lib/utils"
import { CartItem } from "@/components/main-page/cart/cart-item"

import { 
Sheet, SheetContent, SheetHeader, 
SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { CheckoutDialog } from "@/components/main-page/checkout/dialog"

export const CartSidebar = () => {
    
    const [ checkoutOpen, setCheckoutOpen ] = useState(false)
    const { cart } = useCartStore( state => state )

    let subTotal = 0
    
    for ( let item of cart ) {
        subTotal += item.quantity * item.product.price
    }

    return (

        <Sheet>

            <SheetTrigger asChild className="flex items-center" >

                <Button variant="outline" className="relative" > 

                    <RocketIcon className="h-[1.2rem] w-[1.2rem]"  /> 
                    <p className="ml-2 text-sm" >Carrinho</p> 

                    { cart.length > 0 && <div className="absolute bg-red-600 rounded-full size-3 -right-1 -top-0.5" ></div> }

                </Button>

            </SheetTrigger>

            <SheetContent>

                <SheetHeader>

                    <SheetTitle>Carrinho</SheetTitle>

                </SheetHeader>

                <Separator className="mt-3 mb-6"/>

                { cart.length > 0 ? 

                    <div className="flex flex-col gap-5">

                        { cart.map( item => (

                            <CartItem key={ item.product.id } item={ item } />

                        ))}

                    </div>

                    :   
                    
                    <div className="flex flex-col gap-3 w-full items-center justify-center" >
                        <ShoppingCart size={50} />
                        <p className="text-center text-sm max-w-48" > Seu carrinho está vazio, adicione um item para continuar :)</p>
                    </div>
                
                }


                <Separator className="my-6"/>

                <div className="flex justify-between items-center text-xs">

                    <p>Subtotal</p>
                    <p> { formatCurrency(subTotal) } </p>

                </div>

                <Separator className="my-6"/>

                <div className="text-center" >

                    <Button 
                        variant="outline" 
                        disabled={ cart.length <= 0 } 
                        onClick={ () => setCheckoutOpen(!checkoutOpen) }
                    >  <UtensilsCrossed className="h-[1.2rem] w-[1.2rem]"  /> 
                        <p className="ml-2 text-sm" >Finalizar Compra</p> 
                    </Button>                

                </div>

                <CheckoutDialog
                    open={checkoutOpen}
                    onOpenChange={setCheckoutOpen}
                />

            </SheetContent>

        </Sheet>

    )
}