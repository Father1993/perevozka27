/* eslint-disable react/no-unescaped-entities */
'use client'

const MetricsAgreementPage = () => (
  <main>
    <section className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10'>
        <div className='px-6 py-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-6'>
            Согласие на обработку данных метрическими программами
          </h1>

          <div className='space-y-6 text-gray-700'>
            <p>
              Настоящее согласие определяет порядок обработки и защиты
              информации о пользователях сайта perevozka27.ru (далее — «Сайт»),
              которая собирается с помощью метрических программ при посещении
              пользователем сайта.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              1. Общие положения
            </h2>
            <p>
              1.1. На Сайте используются метрические программы Яндекс.Метрика,
              которые помогают анализировать поведение пользователей на Сайте и
              улучшать его работу.
            </p>
            <p>
              1.2. Метрические программы собирают и обрабатывают обезличенные
              данные о посещениях сайта с целью улучшения его работы и повышения
              удобства использования.
            </p>
            <p>
              1.3. Используя Сайт, Пользователь дает свое согласие на сбор,
              анализ и обработку данных о посещении Сайта метрическими
              программами в целях, указанных в настоящем Согласии.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              2. Данные, собираемые метрическими программами
            </h2>
            <p>2.1. Метрические программы собирают следующую информацию:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                Техническая информация: тип устройства, операционная система,
                тип браузера, разрешение экрана;
              </li>
              <li>
                Поведенческая информация: страницы, которые посетил
                пользователь, время, проведенное на странице, действия на сайте
                (клики, прокрутка и т.д.);
              </li>
              <li>
                Информация о местоположении: страна, регион, город (определяется
                по IP-адресу, который сам по себе не сохраняется);
              </li>
              <li>
                Источник перехода на сайт: поисковая система, реклама,
                социальные сети и т.д.
              </li>
            </ul>
            <p>
              2.2. Метрические программы не собирают и не хранят персональные
              данные пользователей (имя, номер телефона, email и т.д.), которые
              могут быть введены при использовании форм на Сайте.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              3. Цели сбора и обработки данных
            </h2>
            <p>
              3.1. Данные, собираемые метрическими программами, обрабатываются в
              следующих целях:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                Анализ использования сайта для его улучшения и оптимизации;
              </li>
              <li>Оценка эффективности рекламных кампаний;</li>
              <li>Выявление технических проблем в работе сайта;</li>
              <li>Улучшение пользовательского опыта;</li>
              <li>Составление статистики посещаемости сайта.</li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              4. Отказ от использования метрических программ
            </h2>
            <p>
              4.1. Пользователь может отказаться от сбора данных метрическими
              программами следующими способами:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                Использовать режим "инкогнито" или "приватный просмотр" в
                браузере;
              </li>
              <li>
                Отключить JavaScript в настройках браузера (может повлиять на
                функциональность сайта);
              </li>
              <li>
                Использовать специальные расширения для блокировки аналитических
                сервисов;
              </li>
              <li>
                Отключить сбор данных в настройках Яндекс.Метрики:{' '}
                <a
                  href='https://yandex.ru/support/metrica/general/opt-out.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  https://yandex.ru/support/metrica/general/opt-out.html
                </a>
              </li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              5. Заключительные положения
            </h2>
            <p>
              5.1. Администрация Сайта вправе вносить изменения в настоящее
              Согласие. При внесении изменений в актуальной редакции указывается
              дата последнего обновления.
            </p>
            <p>
              5.2. Новая редакция Согласия вступает в силу с момента ее
              размещения на Сайте, если иное не предусмотрено новой редакцией
              Согласия.
            </p>
            <p>
              5.3. Действующая редакция Согласия находится на странице по
              адресу: perevozka27.ru/metrics-agreement
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

export default MetricsAgreementPage
