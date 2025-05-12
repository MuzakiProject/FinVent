import productsData from "../data/product"
import Card from "../components/widget/card"

export default function product(){
    
    
    
    return(
        <main className="p-20">

            <h1 className="font-bold text-xl">Produk dengan penjualan tebaik</h1>   
            <div className="grid grid-cols-4 gap-4 mt-5">
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

            <h1 className="font-bold text-xl mt-10">List Produk</h1>
            <div className="grid grid-cols-4 gap-4 mt-5">
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