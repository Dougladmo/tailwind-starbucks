import { LightButton } from "./Button"

// eslint-disable-next-line react/prop-types
export const CardContainer = ({title, text, btnText, img}) => {
  return (
    <div className='w-full text-emerald-950 bg-blue-100 grid grid-cols-2 items-center justify-center mb-12'>
        <div className='img wrapper w-full'>
            <img className='w-full' src={img} alt="card image" />
        </div>
        <div className='m-auto flex flex-col items-center justify-center gap-12'>
            <h2 className='text-3xl font-medium'>{title}</h2>
            <p className='text-2xl font-normal text-center max-w-2xl leading-10 tracking-wide'>{text}</p>
            <LightButton text={btnText}/>
        </div>
    </div>
  )
}

export default CardContainer
