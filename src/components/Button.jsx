// eslint-disable-next-line react/prop-types
export const LightButton = ({ text }) => {
  return (
        <button className='py-1 pb-1 px-5 font-medium text-lg rounded-full border-solid border border-slate-950'>{text}</button>
    )
}

// eslint-disable-next-line react/prop-types
export const DarkButton = ({ text }) => {
    return (
      <a href="#" className='py-1 pb-1 px-5 font-medium text-lg rounded-full border-none bg-zinc-800 text-white'>{text}</a>
      )
  }
