import React, { useState } from 'react'

const ProductSizeSelector = () => {
  const [selected, setSelected] = useState(null);
  const [count, setCount] = useState(1);
  const handleSelected = (index) => {
    setSelected(index);
  }
  return (
    <div className='flex w-full rounded-md border-[1px] items-center justify-between  overflow-hidden'>
      <div className='flex'>
          <button onClick={() => setSelected(1)} className={`p-3 px-5 text-sm ${selected === 1 ? 'bg-slate-400 ring-4' : 'bg-slate-200'}`}>SM</button>
          <button onClick={() => setSelected(2)} className={`p-3 px-5 text-sm ${selected === 2 ? 'bg-slate-400 ring-4' : 'bg-slate-200'}`}>L</button>
          <button onClick={() => setSelected(3)} className={`p-3 px-5 text-sm ${selected === 3 ? 'bg-slate-400 ring-4' : 'bg-slate-200'}`}>XL</button>
          <button onClick={() => setSelected(4)} className={`p-3 px-5 text-sm ${selected === 4 ? 'bg-slate-400 ring-4' : 'bg-slate-200'}`}>XXL</button>
      </div>
      <span className='text-center'>{count}</span>

      <div className='flex flex-col gap-1'>
        <button onClick={() => setCount(count + 1)} className=' bg-slate-400 px-2 active:scale-95'>+</button>
        <button onClick={() => {
          setCount(count - 1)
          if(count == 1){
            setCount(1)
          }
          }} className='bg-slate-400 px-2 active:scale-95'>-</button>
      </div>

    </div>
  )
}

export default ProductSizeSelector;