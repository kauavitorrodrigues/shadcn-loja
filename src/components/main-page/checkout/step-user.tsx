import { useCheckoutStore } from "@/stores/checkout-store";
import { CheckoutSteps } from "@/types/checkout"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
    setStep: Dispatch < SetStateAction < CheckoutSteps > >
}

const formSchema = z.object({
  name: 
    z.string()
    .min(2, "Nome deve conter no mínimo dois caracteres")
    .max(50, "Nome deve conter no máximo cinquenta caracteres"),
})

export const StepUser = ( { setStep } : Props ) => {

    const { name, setName } = useCheckoutStore()

    const form = useForm < z.infer < typeof formSchema > > ({
        resolver: zodResolver(formSchema),
        defaultValues: { name }
    })

    const onSubmit = ( values: z.infer < typeof formSchema > ) => {
        console.log(setStep)
        setName(values.name)
        setStep("address")
    }

    return (

        <Form { ...form } >

            <form onSubmit={ form.handleSubmit(onSubmit) } className="flex flex-col gap-4">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>

                            <FormLabel>Nome</FormLabel>

                            <FormControl>
                                <Input autoFocus placeholder="Qual seu nome?" {...field} />
                            </FormControl>

                            <FormMessage />

                        </FormItem>
                    )}
                />

                <Button type="submit" variant={"outline"} >Submit</Button>

            </form>

        </Form>

    )
}