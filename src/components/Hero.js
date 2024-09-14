import { useState } from "react"
import Search from "../assets/images/search.svg"
import Card from "./Card"
import Loading from "../assets/images/Loading.png"

function Hero ({allCounters, countries, setCountries, setIsLoading, isLoading}){



      function handleSearchCounty(e){
        setIsLoading(true)
        setTimeout(() => {
            const searchValue = allCounters.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setCountries(searchValue)
            setIsLoading(false)
        }, 1000)
      }

      function handleChangeSelect(e){
        const selectedCountry = allCounters.filter(item => item.id == e.target.value)
        setIsLoading(true)
        if (e.target.value == 0){
            setCountries(allCounters)
            setIsLoading(false)
        }
        else{
            setTimeout(() => {
                setCountries(selectedCountry)
                setIsLoading(false)
            }, 600)
        }
      }
    
    return(
        <main>
            <section className="bg-[#FAFAFA] pb-[45px]  min-h-[90vh] max-h-[150vh]">
                <div className="w-[1440px] mx-auto flex items-center justify-between py-[48px] px-[80px]">
                    <label className="relative bg-white w-[480px] shadow-sm rounded-lg">
                        <img src={Search} alt="Search Icon" className="absolute top-5 left-[32px]" width={18} height={18}/>
                        <input onChange={handleSearchCounty} type="text" placeholder="Search for a country…" className="ml-[74px] w-[80%] py-[18px] pl-[10px] pr-[10px] font-normal text-[14px] leading-[20px] rounded-lg outline-none" autoComplete="off"/>
                    </label>
                    <select onChange={handleChangeSelect} className="w-[200px] pl-[24px] py-[18px] font-normal text-[14px] leading-[20px] shadow-sm rounded-lg outline-none">
                        <option value="0">All Country</option>
                        {allCounters.map(item => <option key={item.id} value={item.id}>{item.capital}</option>)}
                    </select>
                </div>
                <ul className="flex flex-wrap justify-between gap-y-[75px] w-[1440px] mx-auto px-[80px]">
                    {isLoading ? <img src={Loading} className="mx-auto mt-[100px]" width={200} /> : 
                        countries.map(item => <Card key={item.id} item={item}/>)
                    }
                </ul>
            </section>
        </main>
    )
}
export default Hero