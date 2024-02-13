import { useRef } from 'react';

interface FormSearchProps {
  buttonSubmitType?: 'default' | 'primary';
  onSubmit?: (search: string) => void;
}

const styleButtonSubmit = {
  default: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  primary: {
    backgroundImage: 'linear-gradient(98deg, #712bda, #a45deb)'
  },
};

export default function FormSearch({ buttonSubmitType = 'default', onSubmit }: FormSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const search = inputRef.current?.value;
        if (search) {
          onSubmit?.(search);
        }
      }}
      className='flex flex-col px-[30px] w-full pb-6'
    >
      <input
        ref={inputRef}
        type='text'
        placeholder='Artist / Album / Title'
        className='w-full mb-4 bg-white text-xs font-medium text-slate-500 p-3 rounded-[20px] text-center'
      />
      <button
        type='submit'
        className='w-full text-sm font-medium p-3 text-white rounded-[20px]'
        style={{...styleButtonSubmit[buttonSubmitType]}}
      >
        Search
      </button>
    </form>
  );
}

