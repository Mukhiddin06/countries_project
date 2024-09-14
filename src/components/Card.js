

function Card({item}){
    return(
        <li className="rounded-lg bg-white shadow-sm pb-[45px]">
            <div className="w-[264px] h-[160px] mb-[24px]">
                <img className="rounded-t-lg" src={item.flag} alt="Flag" width={264} height={160}/>
            </div>
            <h3 className="font-extrabold text-[18px] leading-[26px] mb-[16px] ml-[24px]">{item.name}</h3>
            <p className="text-[14px] leading-[16px] ml-[24px] mb-[8px]"><strong>Population:</strong> {item.population}</p>
            <p className="text-[14px] leading-[16px] ml-[24px] mb-[8px]"><strong>Region:</strong> {item.name}</p>
            <p className="text-[14px] leading-[16px] ml-[24px]"><strong>Capital:</strong> {item.capital}</p>
        </li>
    )
}
export default Card