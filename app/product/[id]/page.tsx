// app/product/[id]/page.tsx
import React, { Suspense } from 'react';
import Loading from '../../components/Loading';

async function getProduct(id: string) {
  const res = await fetch(`https://digelectrical-quorum-backend.vercel.app/api/v1/product/all/${id}`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function ProductDetails({ id }: { id: string }) {
  const product = await getProduct(id);
  return (
    <div className='p-4 flex'>
      <div></div>
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
  );
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails id={id} />
    </Suspense>
  );
}



// const page = ({ params: { id } }: { params: { id: string } }) => {
//   return (
//     <div>
//       product id = {Object.keys(id)} {typeof id} <br />
//       product value = {Object.values(id)}  <br />
//       product id & value = {Object.entries(id)} <br />
//       {typeof id}
//     </div>
//   )
// }

// export default page