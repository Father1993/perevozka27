/* eslint-disable max-len */
const WhyUs = () => (
  <div className='p-6 rounded-lg shadow-md mb-6'>
    <h2 className='text-2xl font-semibold text-white mb-4'>
      Почему выбирают нас?
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h3 className='font-bold text-xl text-blue-600 mb-2'>
          Хабаровск + Край
        </h3>
        <p className='text-gray-700'>
          Осуществляем грузоперевозки по городу Хабаровск и ближайшим регионам.
          Доставку груза осуществляем на грузовике Isuzu Elf. Грузоподъемность:{' '}
          <strong>3 тонны</strong>. Объем: <strong>16м²</strong>.
        </p>
      </div>
      <div className='bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h3 className='font-bold text-xl text-blue-600 mb-2'>
          Большой опыт работы
        </h3>
        <p className='text-gray-700'>
          Более 15 лет опыта. Доставляем грузы по всему краю с 2008 года.
        </p>
      </div>
      <div className='bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h3 className='font-bold text-xl text-blue-600 mb-2'>
          Качественная доставка
        </h3>
        <p className='text-gray-700'>
          Наш водитель профессионал в своем деле. Всегда вовремя заберёт груз и
          доставит ровно в срок.
        </p>
      </div>
      <div className='bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h3 className='font-bold text-xl text-blue-600 mb-2'>Преимущества</h3>
        <p className='text-gray-700'>
          Самая лучшая цена грузоперевозок в регионе!
          <br />
          Перевозки по городу Хабаровску. Грузоперевозки в ближайшие районы
          Хабаровского края.
        </p>
      </div>
    </div>
  </div>
)

export default WhyUs
