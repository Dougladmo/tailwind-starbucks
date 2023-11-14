import { LightButton } from "./Button"

const MessageContainer = () => {
  return (
    <div className='w-full h-56 mb-12 bg-blue-100 flex flex-col items-center justify-center gap-11'>
        <p className='px-1 text-2xl max-w-5xl text-center'>“A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”</p>
        <LightButton text='Saiba mais' />
    </div>
  )
}

export default MessageContainer