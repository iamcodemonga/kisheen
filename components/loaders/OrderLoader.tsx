import BarLoader from "react-spinners/BarLoader";

const OrderLoader = ({ pending }: { pending: boolean}) => {
    return (
        <section className='h-screen w-full fixed top-0 left-0 bg-slate-950/95 flex justify-center items-center'>
            <div>
                <h3 className='text-center text-white text-3xl md:text-5xl mb-5 font-black'>Processing order...</h3>
                <p className='text-center text-gray-400 mb-5'>Don't cancel! This might take a few minutes.</p>
                <div className="w-full flex justify-center">
                    <BarLoader color="#F75C02" loading={pending} aria-label="Loading Spinner" data-testid="loader" />
                </div>
            </div>
        </section>
    )
}

export default OrderLoader