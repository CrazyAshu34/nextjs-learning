// path- app/product/page.tsx
import React from 'react';
import Link from "next/link";

async function getData() {
  const res = await fetch('https://digelectrical-quorum-backend.vercel.app/api/v1/product/all');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
type Props = {};

const Page = async (props: Props) => {
  const mydata = await getData();

  return (
    <div>

      <div className='grid grid-cols-5 gap-4'>

        {mydata?.product.map((amit: { _id: string, title: string, image: string }) => (

          <Link key={amit._id} href={`/product/${amit._id}`}>
            <div className='flex flex-col justify-center text-white border-2 border-[white] mt-10 p-2 max-w-full max-h-full'>
              <p>{amit.title}</p>
              <img src={amit.image} alt={amit.title} className='max-w-full max-h-full object-contain m-auto' />
            </div>
          </Link>
        ))}

      </div>
    </div >
  );
};

export default Page;
