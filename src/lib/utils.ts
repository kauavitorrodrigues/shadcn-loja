import { useCartStore } from "@/stores/cart.store"
import { useCheckoutStore } from "@/stores/checkout-store"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = ( number : number ) => {
  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

export const generateMessage = () => {

  const { name, address } = useCheckoutStore( state => state )
  const { cart } = useCartStore( state => state )

  let orderProducts = []

  for ( let item of cart ) {
    orderProducts.push(`${item.quantity}x - ${item.product.name}`)
  }

  return `*Dados do cliente*
Nome: ${name}
Endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
------
*Pedido*
${orderProducts.join("\n")}
`
}