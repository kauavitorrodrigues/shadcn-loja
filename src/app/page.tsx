import { Footer } from "@/components/main-page/footer"
import { Header } from "@/components/main-page/header"
import { TabsSkeleton } from "@/components/main-page/products/skeleton"
import { ProductsTab } from "@/components/main-page/products/tab"
import { Suspense } from "react"

const Page = () => {

  return (

    <div className="w-full max-w-4xl mx-auto flex flex-col px-4 gap-4 mb-4" >
      
      <Header/>

      <div className="flex flex-col gap-4" >
        
        <Suspense fallback={ <TabsSkeleton/> } >

            <ProductsTab/>

        </Suspense>

      </div>

      <Footer/>

    </div>

  )

}

export default Page