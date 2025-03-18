import icon from '../assets/chat-icon.png';

const Header = () => {
  return (
    <header className='sticky top-0 bg-white p-2 border-b border-gray-400'>
        <div className='flex items-center justify-center gap-2'>
            <img className='h-10' src={icon} alt="Chat Icon" />
            <p className='font-medium'>Chat App</p>
        </div>
    </header>
  )
}

export default Header;