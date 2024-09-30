const MenuButton = ({
  onClick,
  isOpen,
}: {
  onClick: () => void
  isOpen: boolean
}) => (
  <button
    onClick={onClick}
    className='text-white bg-blue-600 p-2 rounded-lg focus:outline-none'
  >
    {isOpen ? 'Закрыть меню' : 'Открыть меню'}
  </button>
)

export default MenuButton
