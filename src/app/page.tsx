import { Footer } from "@/components/main-page/footer"
import { Header } from "@/components/main-page/header"

const Page = () => {

  return (

    <div className="w-full max-w-4xl mx-auto flex flex-col px-4" >
      
      <Header/>

      <div className="flex flex-col gap-4" >
        ...
      </div>

      <Footer/>

    </div>

  )

}

export default Page