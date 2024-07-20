
import React from 'react'


// api
async function getProduct(a:any) {

  const res = await fetch(`https://digelectrical-quorum-backend.vercel.app/api/v1/product/all/${a}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const responseIntoJson = res.json();
  return responseIntoJson;
  
}

type Props = {}

export default async function Page({ params: { id },}: {params: { id: any }}) {

  const product = await getProduct(id)


  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold'>{product?.product?.title}</h1>
      <img src={product?.product?.image} alt={product?.product?.title} className='w-full h-auto object-contain my-4' />
      <p className='text-gray-500'>SKU: {product?.product?.sku}</p>
      <p className='text-gray-500'>Shop Code: {product?.product?.shopCode}</p>
      <p className='text-gray-500'>Body Type: {product?.product?.bodyType}</p>
      <p className='text-gray-500'>Reflector Type: {product?.product?.reflectorType}</p>
      <p className='text-gray-500'>Chip Color: {product?.product?.chipColor}</p>
      <p className='text-gray-500'>Amount: {product?.product?.amount}</p>
    </div>
  )
}

