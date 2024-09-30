/* eslint-disable max-len */
const Services = () => (
  <>
    <h2 className='text-2xl font-semibold text-white mb-4 text-center'>
      Наши услуги
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h3 className='font-bold text-xl text-blue-600 mb-2'>
          Грузовик с водителем
        </h3>
        <p className='text-gray-700'>
          Цена: <strong>1 200₽/час</strong>
        </p>
        <p className='text-gray-700 mt-4'>
          Наш грузовик с водителем предоставляет надежные и комфортные услуги по
          перевозке грузов. Мы гарантируем своевременную доставку и безопасность
          груза.
        </p>
      </div>
      <div className='bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h3 className='font-bold text-xl text-blue-600 mb-2'>Грузчик</h3>
        <p className='text-gray-700'>
          Цена: <strong>700₽/час</strong>
        </p>
        <p className='text-gray-700 mt-4'>
          Наши грузчики профессионально и быстро выполнят
          погрузочно-разгрузочные работы. Мы ценим ваше время и гарантируем
          качественное обслуживание.
        </p>
      </div>
    </div>
  </>
)

export default Services
