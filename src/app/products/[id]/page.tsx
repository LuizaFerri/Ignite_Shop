interface ProductIDProps {
    params:{
        id: string;
    }
}

export default function ProductID ({params}: ProductIDProps){
    return (
        <div>
            <h1>Product ID : {params.id}</h1>
        </div>
    )
}