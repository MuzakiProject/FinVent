import productsData from "../data/product"
import Card from "../components/partials/card"

export default function product(){
    
    
    
    return(
        <main className="p-5 md:p-20">

            <h1 className="font-bold text-lg md:text-xl">Best Produk</h1>   
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
                {productsData.map((product, index) => (
                        product.category == "Best Seller" ? (
                    <Card
                        key={index}
                        name={product.name}
                        price={product.price}
                        stock={product.stock}
                        category={product.category}
                        sold={product.sold}
                        image={product.image}
                    />
                        ) : null
                ))}
            </div>

            <h1 className="font-bold text-lg md:text-xl mt-10">List Produk</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
                {productsData.map((product, index) => (
                    <Card
                        key={index}
                        name={product.name}
                        price={product.price}
                        stock={product.stock}
                        category={product.category}
                        sold={product.sold}
                        image={product.image}
                    />
                ))}
            </div>

        </main>
    )
}