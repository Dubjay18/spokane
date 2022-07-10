import React, { useState } from 'react'
import { SiFlutter } from "react-icons/si";
import { BsCreditCardFill } from "react-icons/bs"

const NInput = ({handleCardchange, tel, txt, name, place}) => {
    return (
        <div className="text-gray-600 float-left">
                    <label htmlFor={name}>{txt}</label><br />
                    <input 
                    onChange={handleCardchange} 
                    type="tel" value={tel} name={name} 
                    id={name} placeholder={place} />
                </div>
    )
}

const PaymentType = () => {
    const [tel, setTel] = useState()
    const [expr, setExpr] = useState("")
    const [cvv, setCvv] = useState(0)


    const formatTel = (val) => {
        val = val.replace(/[^\d]/g, '')
        let len = val.length
        if (len > 1) {
            val = `${val.slice(0, 3)} ${val.slice(3, 6)} ${val.slice(6, 9)} ${val.slice(9, 12)}`
        }
        return val
    }
    const handleCardchange = (e) => {
        setTel(formatTel(e.target.value))
    }
  return (
    <div className="bg-yellow-100 bg-opacity-80 shadow-md shadow-gray-300 rounded-md w-4/6">
        <div className="bg-white px-8 flex flex-row items-center py-auto shadow-sm shadow-secondary h-1/5 w-full">
            <SiFlutter size={40} className='bg-gray-700 text-yellow-500 p-2 rounded-full mr-3' />
            <div className="text-gray-700 uppercase">Flutterwave<br />gateway</div>
        </div>
        <div className="bg-gray-100 w-5/6 h-1/3 mt-5 mx-auto border border-gray-200 grid gap-0.5 grid-rows-2 grid-cols-2 rounded-md">
            <div className="col-span-2 bg-white rounded-md p-2">
                <NInput 
                    handleCardchange={handleCardchange} 
                    tel={tel} txt="Card Number" name="tel" 
                    place="000 000 000 000"
                />
                <BsCreditCardFill size={36} className='float-right' />
            </div>
            <div className="bg-white rounded-bl-md p-2">
            <NInput 
                    handleCardchange={(e)=>setExpr(e.target.value)} 
                    tel={expr} txt="Expires" name="expiry" 
                    place="YY/MM"
                />
            </div>
            <div className="bg-white rounded-br-md p-2">
            <NInput 
                    handleCardchange={(e)=>setCvv(e.target.value)} 
                    tel={cvv} txt="CCV" name="cvv" 
                    place="000"
                />
            </div>
        </div>
    </div>
  )
}

export default PaymentType