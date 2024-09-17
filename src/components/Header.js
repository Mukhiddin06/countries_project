import { useState } from "react"
import Moon from "../assets/images/Moon.svg"
import Modal from "./Modal"
import Button from "./Button"
import Empty from "../assets/images/Empty.png"
import toast, { Toaster } from "react-hot-toast"

function Header({countries, setCountries, setIsLoading}){
    const [isOpenModal, setIsOpenModal] = useState(false)

    const [flag , setFlag] = useState(Empty)

    const [name, setName] = useState("")
    const [capital, setCapital] = useState("")
    const [population, setPopulation] = useState("")


    function handleCancelBtnClick(){
        setIsOpenModal(false)
        setFlag(Empty)
        setName("")
        setCapital("")
        setPopulation("")
    }
    function handleSubmitCountry(e){
        e.preventDefault()
        const data = {
            id: countries.length ? countries[countries.length - 1].id + 1 : 1,
            name, capital, population, flag,
            isLiked: false,
            isBasket: false
        }
        setIsLoading(true)
        setIsOpenModal(false)
        setTimeout(() => {
            setIsLoading(false)
            toast.success('Successfully added!')
            setCountries([data, ...countries])
        }, 1000)
        setName("")
        setCapital("")
        setPopulation("")
        setFlag(Empty)
    }

    return (
        <>
        <Toaster position="top-center" reverseOrder={false}/>
        <header className="shadow-lg">
            <div className="w-[1440px] py-[23px] px-[80px] flex items-center justify-between mx-auto">
                <a href="/" className="font-extrabold text-[24px] leading-[32.74px]">Where in the world?</a>
                <div className="flex items-center justify-between space-x-10">
                    <button className="relative font-medium text-[16px] leading-[21.82px] pl-[30px]"><img src={Moon} alt="Moon" width={20} height={20} className="absolute left-0"/> Dark Mode</button>
                    <button onClick={() => setIsOpenModal(true)} className="relative font-medium text-[16px] leading-[21.82px] py-1 px-2 rounded-lg border-[1px] border-black hover:bg-[#9ab2c9]">Add Country</button>
                </div>
            </div>
        </header>
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} >
            <form onSubmit={handleSubmitCountry} autoComplete="off">
                <div className="flex justify-between items-center">
                    <label  className="w-[49%] ">
                        <input onChange={(e) => setFlag(URL.createObjectURL(e.target.files[0]))} type="file" className="hidden"/>
                        <img src={flag} alt="Empty Country" className="w-[100%] object-cover rounded-lg"/>
                    </label>
                    <div className="w-[49%] space-y-5">
                        <input onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-400" placeholder="Enter country name" name="name" required value={name}/>
                        <input onChange={(e) => setCapital(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-400" placeholder="Enter country capital" name="capital"  value={capital}/>
                        <input onChange={(e) => setPopulation(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-400" placeholder="Enter country population" name="population" required value={population}/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button onClick={handleCancelBtnClick} type={"button"} title={"Cancel"} extraStyle={"w-[49%] mt-6 bg-red-700 text-white"} />
                    <Button type={"submit"} title={"Submit"} extraStyle={"w-[49%] mt-6 bg-green-700 text-white"} />
                </div>
            </form>
        </Modal>
        </>
    )
}
export default Header