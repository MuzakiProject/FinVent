

export default function Card({ name, price, stock,sold, image }: { name: string; price: number; stock: number; category: string; sold: number; image: string }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col  gap-2 w-50">
            
            <img src={image} alt={name} className=" object-cover h-40 w-40" />

            <h2 className="text-sm text-[#444444] mt-2">{name}</h2>
            
            <div className="flex justify-between items-center">
                <div className="flex gap-1 items-end">
                    <p className="text-black font-bold text-2xl">{stock}</p>
                    <p className="text-gray-600 text-sm">stock</p>
                </div>
                <div className="flex flex-col items-end">
                     <p className="text-gray-600 text-xs">Price</p>
                    <p className="text-black text-sm">Rp {price.toLocaleString()}</p>
                </div>
            </div>
            <div className="flex justify-between mt-2 items-center">
                <p className="text-gray-600 text-sm">Sold</p>
                <p className="bg-[#FDECEC] px-4 py-1 text-sm font-bold text-[#A62626] rounded-xl">- {sold}</p>
            </div>
        </div>
    );
}