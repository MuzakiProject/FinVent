

export default function Card({ name, price, stock,sold, image }: { name: string; price: number; stock: number; category: string; sold: number; image: string }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col  gap-2 w-40 md:w-50">
            
            <img src={image} alt={name} className=" object-cover w-30 h-30 md:h-40 md:w-40" />

            <h2 className="text-sm md:text-sm  text-[#444444] mt-2">{name}</h2>
            
            <div className="flex flex-col md:flex-row md:justify-between ">
                <div className="flex gap-1 items-end">
                    <p className="text-black font-bold text-2xl">{stock}</p>
                    <p className="text-gray-600 text-sm">stock</p>
                </div>
                <div className="flex justify-between md:flex-col md:items-end">
                    <p className="text-gray-600 text-xs">Price</p>
                    <p className="text-black text-xs md:text-sm">Rp {price.toLocaleString()}</p>
                </div>
            </div>
            <div className="flex justify-between mt-2 items-center">
                <p className="text-gray-600 text-xs md:text-sm">Sold</p>
                <p className="bg-[#FDECEC] md:px-4 px-3 py-1 text-xs md:text-sm font-bold text-[#A62626] rounded-xl">- {sold}</p>
            </div>
        </div>
    );
}