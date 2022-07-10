import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import request from '../async/request'
import { useDispatch, useSelector } from 'react-redux'
import { setApartment } from '../redux/actions/apartmentActions'
import UserProfileLayout from '../layouts/UserProfileLayout'
import { IoMdArrowDropleft } from "react-icons/io";
import CardType from '../components/CardType'
import PaymentType from '../components/PaymentType'

const Transaction = () => {
    const dispatch = useDispatch()
    const par = useParams()
    async function fresh(){
		request.get('/apartment/'+par.id)
		.then(res=>{
			dispatch(setApartment(res.data))
		})
		.catch(err=>console.log(err))
	}

    const apartment = useSelector((state)=>state.apartment["apartment details"])
	useEffect(()=>{
		fresh()
	}, [])
  return (
    <>
        <UserProfileLayout>
        <main className='px-3 md:px-8'>
            <div className="flex flex-row justify-between pb-3">
                <div className="text-secondary">Buy Apartment</div>
                <div className="text-pur text-sm cursor-pointer border flex flex-row justify-around w-28 align-middle border-pur rounded-lg">
                    <div className="inline-block self-center"><IoMdArrowDropleft /></div>
                    <div className="inline-block">Back</div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
                <CardType {...apartment} image_url='' />
                <PaymentType />
            </div>
        </main>
        </UserProfileLayout>
    </>
  )
}

export default Transaction