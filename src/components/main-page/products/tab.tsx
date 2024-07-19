import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "@/services/product"
import { Product } from "@/types/product"
import { ProductEmpty } from "./empty"
import { ProductItem } from "./product"

type Tab = {

    tittle: string,
    value: string,
    products: Product[]

}

export const ProductsTab =  async () => {

    const products = await getAllProducts()

    const tabs : Tab[] = [
        {
            tittle:'Sushi',
            value:'sushi',
            products: products.filter( item => item.category === 'sushi' )
        },
        {
            tittle:'Temaki',
            value:'temaki',
            products: products.filter( item => item.category === 'temaki' )
        },
        {
            tittle:'Combinados',
            value:'pack',
            products: products.filter( item => item.category === 'pack' )
        },
        {
            tittle:'Bebidas',
            value:'beverage',
            products: products.filter( item => item.category === 'beverage' )
        },
    ]

    return (

        <Tabs defaultValue={ tabs[0].value } > 

            <TabsList className="flex mb-4" >

                { tabs.map( tab => (
                    <TabsTrigger value={ tab.value } key={tab.value} className="flex-1" > 
                        { tab.tittle } 
                    </TabsTrigger>
                ))}

            </TabsList>

            { tabs.map( tab => (

                <TabsContent key={ tab.value } value={ tab.value } className="flex-1" >

                    { tab.products.length > 0 &&

                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4" >

                            { tab.products.map( product => ( <ProductItem key={ product.id } item={ product } /> ))} 

                        </div>
                    
                    }

                    { tab.products.length === 0 && <ProductEmpty value={ tab.tittle } /> }

                </TabsContent>

            ))}

        </Tabs>

    )
}