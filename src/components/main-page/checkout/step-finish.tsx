import { Button } from "@/components/ui/button"
import { generateMessage } from "@/lib/utils"
import { useCheckoutStore } from "@/stores/checkout-store"
import Link from "next/link"

export const StepFinish = () => {

    const { name } = useCheckoutStore()

    const message = generateMessage()
    const linkWhatsApp = `https://wa.me//${process.env.NEXT_PUBLIC_WHATSAPP}?text=${encodeURI(message)}`

    return (
        <div className="flex flex-col gap-5 text-center" >

            <h1 className="text-xl" > Perfeito <strong>{ name }</strong>!</h1>
            <p>Agora envie o pedido ao nosso WhatsApp para concluir. Te guiaremos com o processo do pedido</p>
            <Button>
                <Link target="_blank" href={linkWhatsApp} > Enviar para o WhatsApp </Link>
            </Button>

        </div>
    )
}