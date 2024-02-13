export default function Skeleton() {
  return (
    <div className='shadow rounder-[10px] p-4 max-w-sm w-full mx-auto animate-pulse h-[124px] flex flex-row'>
      <div className='h-[100px] w-[100px] bg-gray-300 rounded-xl'></div>
      <div className='flex-1 pt-1 pl-3 pr-0.5 flex flex-col'>
        <div className='h-2 bg-slate-200 rounded'></div>
        <div className='h-3 bg-slate-200 rounded mt-4'></div>
      </div>
    </div>
  );
}
