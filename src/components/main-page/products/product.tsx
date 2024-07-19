"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { formatCurrency } from "@/lib/utils"
import { useCartStore } from "@/stores/cart.store"
import { Product } from "@/types/product"

type Props = {
    item: Product
    key: number
}

export const ProductItem = ( { item } : Props ) => {

    const { toast } = useToast()

    const { cart, upsertCartItem } = useCartStore( state => state )

    const handleAddButton = () => {

        upsertCartItem(item, 1)

        toast({
            title: "Adicionado ao carrinho",
            description: item.name,
            action: <ToastAction altText="fechar" >Fechar</ToastAction>
        })

        console.log(cart)

    }

    return (

        <div className="flex flex-col gap-2" >

            <img src={ item.image } alt={ item.name } className="w-full h-32 rounded-xl object-cover border-2" />

            <div className="flex flex-col">

                <p className=""> { item.name } </p>
                <p className="text-sm mb-2 text-foreground/50" > { formatCurrency(item.price) } </p>
                <Button 
                    variant={"outline"} 
                    onClick={ handleAddButton }
                    >Adicionar
                </Button>

            </div>

        </div>

    )

}