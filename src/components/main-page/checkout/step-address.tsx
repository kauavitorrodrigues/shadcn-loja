import { useCheckoutStore } from "@/stores/checkout-store";
import { CheckoutSteps } from "@/types/checkout"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
    setStep: Dispatch < SetStateAction < CheckoutSteps > >
}

const formSchema = z.object({
    street: z.string()
      .min(5, { message: "Preencha a rua" })
      .max(100, { message: "Rua deve ter apenas 100 caracteres" }),
    number: z.string()
      .min(2, { message: "Preencha o campo número" }),
    complement: z.string()
      .max(50, { message: "Complemento deve ter apenas 50 caracteres" })
      .optional(),
    district: z.string()
      .min(3, { message: "Preencha o bairro" })
      .max(50, { message: "Bairro deve ter apenas 50 caracteres" }),
    city: z.string()
      .min(2, { message: "Preencha o campo cidade" })
      .max(50, { message: "Cidade deve ter apenas 50 caracteres" }),
    state: z.string()
      .min(2, { message: "Preencha o estado" })
})

export const StepAddress = ( { setStep } : Props ) => {

    const { address, setAddress } = useCheckoutStore()

    const form = useForm < z.infer < typeof formSchema > > ({
        resolver: zodResolver(formSchema),
        defaultValues: { ...address }
    })

    const onSubmit = ( values: z.infer < typeof formSchema > ) => {
        setAddress(values)
        setStep("finish")
    }

    return (

        <Form { ...form } >

            <form onSubmit={ form.handleSubmit(onSubmit) } className="flex flex-col gap-4">

                <div className="grid grid-cols-2 gap-4">

                    <FormField
                        control={form.control}
                        name="street"
                        render={({ field }) => (
                            <FormItem>

                                <FormLabel>Rua</FormLabel>

                                <FormControl>
                                    <Input placeholder="Rua" {...field} />
                                </FormControl>

                                <FormMessage />

                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Número</FormLabel>
                                <FormControl>
                                    <Input placeholder="Número" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="complement"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Complemento</FormLabel>
                                <FormControl>
                                    <Input placeholder="Complemento" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="district"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input placeholder="Bairro" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                    <Input placeholder="Cidade" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>

                                    <Select defaultValue={field.value} onValueChange={field.onChange} >

                                        <SelectTrigger>
                                            <SelectValue placeholder="Estado"/>
                                        </SelectTrigger>

                                        <SelectContent>

                                            <SelectItem value="sp" >São Paulo</SelectItem>
                                            <SelectItem value="ac">Acre</SelectItem>
                                            <SelectItem value="al">Alagoas</SelectItem>
                                            <SelectItem value="ap">Amapá</SelectItem>
                                            <SelectItem value="am">Amazonas</SelectItem>
                                            <SelectItem value="ba">Bahia</SelectItem>
                                            <SelectItem value="ce">Ceará</SelectItem>
                                            <SelectItem value="df">Distrito Federal</SelectItem>
                                            <SelectItem value="es">Espírito Santo</SelectItem>
                                            <SelectItem value="go">Goiás</SelectItem>
                                            <SelectItem value="ma">Maranhão</SelectItem>
                                            <SelectItem value="mt">Mato Grosso</SelectItem>
                                            <SelectItem value="ms">Mato Grosso do Sul</SelectItem>
                                            <SelectItem value="mg">Minas Gerais</SelectItem>
                                            <SelectItem value="pa">Pará</SelectItem>
                                            <SelectItem value="pb">Paraíba</SelectItem>
                                            <SelectItem value="pr">Paraná</SelectItem>
                                            <SelectItem value="pe">Pernambuco</SelectItem>
                                            <SelectItem value="pi">Piauí</SelectItem>
                                            <SelectItem value="rj">Rio de Janeiro</SelectItem>
                                            <SelectItem value="rn">Rio Grande do Norte</SelectItem>
                                            <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                                            <SelectItem value="ro">Rondônia</SelectItem>
                                            <SelectItem value="rr">Roraima</SelectItem>
                                            <SelectItem value="sc">Santa Catarina</SelectItem>
                                            <SelectItem value="sp">São Paulo</SelectItem>
                                            <SelectItem value="se">Sergipe</SelectItem>
                                            <SelectItem value="to">Tocantins</SelectItem>

                                        </SelectContent>

                                    </Select>

                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>

                <div className="flex justify-between mt-4">

                    <Button 
                        variant={"link"} 
                        onClick={() => setStep("user")} 
                        >Voltar
                    </Button>

                    <Button type="submit">Concluir</Button>

                </div>

            </form>

        </Form>

    )
}