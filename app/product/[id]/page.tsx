// path- app/product/[id]/page.tsx
import React from 'react'
// api
async function getProduct(id: any) {

  const res = await fetch(`https://digelectrical-quorum-backend.vercel.app/api/v1/product/all/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const responseIntoJson = res.json();
  return responseIntoJson;

}

type Props = {}

export default async function Page({ params: { id }, }: { params: { id: any } }) {
  //console.log('dog' , params) // (dog--- { id: '12345' })

  const product = await getProduct(id)
  console.log('cool', product)
  return (
    <div className='p-4 flex'>
      <div>
        <img src={product?.product?.image} alt={product?.product?.title} className='w-52 h-52 object-contain my-4' />
        <h1 className='text-xl font-bold'>Title :{product?.product?.title}</h1>
      </div>
      <div className=''>
        <p className='text-gray-500'>SKU: {product?.product?.sku}</p>
        <p className='text-gray-500'>Shop Code: {product?.product?.shopCode}</p>
        <p className='text-gray-500'>Body Type: {product?.product?.bodyType}</p>
        <p className='text-gray-500'>Reflector Type: {product?.product?.reflectorType}</p>
        <p className='text-gray-500'>Chip Color: {product?.product?.chipColor}</p>
        <p className='text-gray-500'>Amount: {product?.product?.amount}</p>
      </div>
    </div>
  )
}

