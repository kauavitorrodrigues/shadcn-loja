type Props = {
    value: string
}

export const ProductEmpty = ( { value } : Props ) => {

    return (

        <div className="min-h-40 w-full text-center flex flex-col gap-4 mt-6" >

            <h1 className="text-3xl font-bold" >Ops!</h1>

            <p>A sessão { value.toLowerCase() } não tem produtos disponíveis nesse momento, tente novamente mais tarde. </p>

        </div>


    )

}