import Link from 'next/link'

const Form = () => (
  <div className='bg-gray-100 p-6 rounded-lg shadow-md mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
    <div>
      <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Контакты</h2>
      <p className='text-gray-600 mb-2'>
        <Link href='tel:+79622285219'>
          Телефон: <strong>+7 962 228 52 19</strong>
        </Link>
      </p>
      <p className='text-gray-600 mb-2'>
        <Link href='mailto:perevozka27@gmail.com'>
          E-mail: <strong>perevozka27@gmail.com</strong>
        </Link>
      </p>

      <p className='text-gray-600 mb-2'>
        Адрес: <strong>г. Хабаровск</strong>
      </p>
      <p className='text-gray-600'>
        Работаем с <strong>8:00 - 20:00</strong>
      </p>
    </div>
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>
        Оставить заявку
      </h2>
      <form>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='name'>
            ФИО
          </label>
          <input
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            type='text'
            id='name'
            placeholder='Введите ваше ФИО'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='phone'>
            Телефон
          </label>
          <input
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            type='tel'
            id='phone'
            placeholder='Введите номер телефона'
            required
          />
        </div>
        <button
          className='w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300'
          type='submit'
        >
          Отправить заявку
        </button>
      </form>
    </div>
  </div>
)

export default Form
