export default function ProductDetail({product}:any){
    return <>
    <h2>{product?.title}</h2>
    <p>{product?.description}</p>
    <img src={product?.image} alt="" />
    <p>{product?.discount}%</p>
    

    
    
    </>
   
}