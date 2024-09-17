import { useState } from "react"
import Button from "./Button"
import Modal from "./Modal"
import toast, { Toaster } from "react-hot-toast"


function Card({item, countries, setCountries}){
    const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [capital, setCapital] = useState(item.capital);
  const [population, setPopulation] = useState(item.population);
  const [flag, setFlag] = useState(item.flag);

    function handleDeleteBtnClick(){
        setIsOpenModal(true)
    }
    function handleDelete(){
        const updatedCountries = countries.filter(country => country.id !== item.id);
        setCountries(updatedCountries);
        setIsOpenModal(false);
        toast.success('Deleted!')
    }
    function handleUpdateBtnClick(){
        setIsEditModalOpen(true)
    }
    function handleEditCountry(e) {
        e.preventDefault();
    
        const updatedCountry = {
          ...item,
          name,
          capital,
          population,
          flag,
        };
    
        const updatedCountries = countries.map((country) =>
          country.id === item.id ? updatedCountry : country
        );
        setCountries(updatedCountries);
        setIsEditModalOpen(false);
        toast.success("Updated successfully!");
      }

      function handleCancelBtnClick(){
        setIsOpenModal(false)
    }


    return(
        <>
        <Toaster position="top-center" reverseOrder={false}/>
        <li className="rounded-lg bg-white shadow-sm pb-[40px]">
            <div className="w-[264px] h-[160px] mb-[24px]">
                <img className="rounded-t-lg" src={item.flag} alt="Flag" width={264} height={160}/>
            </div>
            <h3 className="font-extrabold text-[18px] leading-[26px] mb-[16px] ml-[24px]">{item.name}</h3>
            <p className="text-[14px] leading-[16px] ml-[24px] mb-[8px]"><strong>Population:</strong> {item.population}</p>
            <p className="text-[14px] leading-[16px] ml-[24px] mb-[8px]"><strong>Region:</strong> {item.name}</p>
            <p className="text-[14px] leading-[16px] ml-[24px]"><strong>Capital:</strong> {item.capital}</p>
            <div className="flex items-center justify-between w-[160px] mx-auto mt-5">
                <Button onClick={handleUpdateBtnClick} title={"Edit"} extraStyle={"w-[45%] bg-blue-600 text-white"}/>
                <Button onClick={handleDeleteBtnClick} type={"button"} extraStyle={"w-[45%] bg-red-600 text-white"} title={"Delete"}/>
            </div>
        </li>
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
            <p className="text-center font-bold p-2 text-[24px]">Are you sure you want to delete this country?</p>
            <div className="flex justify-between">
                <Button onClick={() => setIsOpenModal(false)} type={"button"} title={"Cancel"} extraStyle={"w-[49%] mt-6 bg-green-700 text-white"} />
                <Button onClick={handleDelete} type={"submit"} title={"Delete"} extraStyle={"w-[49%] mt-6 bg-red-700 text-white"} />
            </div>
        </Modal>
        <Modal  isOpenModal={isEditModalOpen} setIsOpenModal={setIsEditModalOpen} >
            <form onSubmit={handleEditCountry} autoComplete="off">
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
export default Card