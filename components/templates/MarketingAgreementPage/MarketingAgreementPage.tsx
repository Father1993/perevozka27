'use client'

const MarketingAgreementPage = () => (
  <main>
    <section className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10'>
        <div className='px-6 py-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-6'>
            Согласие на получение рекламной рассылки
          </h1>

          <div className='space-y-6 text-gray-700'>
            <p>
              Настоящее согласие определяет условия получения пользователем
              сайта perevozka27.ru (далее — «Сайт») рекламно-информационных
              материалов.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              1. Общие положения
            </h2>
            <p>
              1.1. Компания ООО "Перевозка27" (далее — «Компания») с уважением
              относится к праву пользователей Сайта на получение только тех
              рекламно-информационных материалов, на которые они дали явное
              согласие.
            </p>
            <p>
              1.2. Нажимая соответствующую кнопку или устанавливая отметку в
              соответствующем поле формы при оформлении заявки на Сайте,
              Пользователь дает согласие на получение информационных и рекламных
              сообщений от Компании.
            </p>
            <p>
              1.3. Согласие дается на получение рекламно-информационных
              материалов следующими способами:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>SMS-сообщения на указанный пользователем номер телефона;</li>
              <li>
                Электронные письма на указанный пользователем адрес электронной
                почты;
              </li>
              <li>Сообщения в мессенджеры (WhatsApp, Telegram).</li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              2. Содержание рассылки
            </h2>
            <p>
              2.1. Рекламно-информационные материалы могут содержать следующую
              информацию:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Информация о новых услугах Компании;</li>
              <li>Специальные предложения и акции;</li>
              <li>Информация о скидках и бонусах;</li>
              <li>Поздравления с праздниками;</li>
              <li>Новости компании;</li>
              <li>Приглашения на мероприятия;</li>
              <li>
                Информация о статусе заказа (не является рекламной рассылкой).
              </li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              3. Периодичность рассылки
            </h2>
            <p>
              3.1. Компания обязуется не отправлять рекламно-информационные
              материалы чаще двух раз в неделю, за исключением экстренных
              случаев (например, информирование о критических изменениях в
              работе сервиса).
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              4. Отказ от рассылки
            </h2>
            <p>
              4.1. Пользователь вправе в любой момент отказаться от получения
              рекламно-информационных материалов одним из следующих способов:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                Перейдя по соответствующей ссылке в письме с
                рекламно-информационными материалами;
              </li>
              <li>
                Направив запрос на электронную почту perevozka27@gmail.com;
              </li>
              <li>Позвонив по телефону +7 (962) 228-52-19 в рабочее время;</li>
              <li>
                Отправив сообщение в мессенджер с текстом "Отписаться от
                рассылки".
              </li>
            </ul>
            <p>
              4.2. Компания обязуется прекратить рассылку
              рекламно-информационных материалов в течение 3 (трех) рабочих дней
              с момента получения отказа.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              5. Заключительные положения
            </h2>
            <p>
              5.1. Компания оставляет за собой право вносить изменения в
              настоящее Согласие. При внесении изменений в актуальной редакции
              указывается дата последнего обновления.
            </p>
            <p>
              5.2. Новая редакция Согласия вступает в силу с момента ее
              размещения на Сайте, если иное не предусмотрено новой редакцией
              Согласия.
            </p>
            <p>
              5.3. Действующая редакция Согласия находится на странице по
              адресу: perevozka27.ru/marketing-agreement
            </p>
            <p className='mt-8 text-sm text-gray-500'>
              Последнее обновление: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default MarketingAgreementPage
