/* eslint-disable max-len */
'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileContract,
  faUserShield,
  faHandshake,
  faChartLine,
  faBullhorn,
  faRobot,
  faCookieBite,
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const LegalCard = ({
  title,
  description,
  link,
  icon,
}: {
  title: string
  description: string
  link: string
  icon: IconDefinition
}) => (
  <div className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full'>
    <div className='flex items-center mb-4'>
      <div className='bg-blue-100 p-3 rounded-full mr-4'>
        <FontAwesomeIcon icon={icon} className='text-blue-600 text-xl' />
      </div>
      <h3 className='text-xl font-bold text-gray-800'>{title}</h3>
    </div>
    <p className='text-gray-600 mb-4 flex-grow'>{description}</p>
    <Link
      href={link}
      className='inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-center'
    >
      Ознакомиться
    </Link>
  </div>
)

const LegalInfoPage = () => {
  const legalDocs = [
    {
      title: 'Политика обработки персональных данных',
      description:
        'Информация о том, как мы собираем, обрабатываем и защищаем ваши персональные данные в соответствии с ФЗ-152.',
      link: '/personal-data-policy',
      icon: faUserShield,
    },
    {
      title: 'Согласие на обработку персональных данных',
      description:
        'Документ, регулирующий условия предоставления согласия на обработку ваших персональных данных.',
      link: '/data-processing-agreement',
      icon: faFileContract,
    },
    {
      title: 'Пользовательское соглашение',
      description:
        'Правила и условия использования нашего сайта, права и обязанности пользователей.',
      link: '/user-agreement',
      icon: faHandshake,
    },
    {
      title: 'Политика использования файлов cookie',
      description:
        'Информация о файлах cookie, которые используются на нашем сайте, и о том, как они обрабатываются.',
      link: '/privacy-policy',
      icon: faCookieBite,
    },
    {
      title: 'Согласие на обработку данных метрическими программами',
      description:
        'Информация о сборе и обработке данных аналитическими сервисами для улучшения работы сайта.',
      link: '/metrics-agreement',
      icon: faChartLine,
    },
    {
      title: 'Согласие на получение рекламной рассылки',
      description:
        'Документ, регулирующий порядок получения рекламно-информационных материалов.',
      link: '/marketing-agreement',
      icon: faBullhorn,
    },
    {
      title: 'Информация о рекомендательных технологиях',
      description:
        'Сведения об использовании рекомендательных алгоритмов на нашем сайте.',
      link: '/recommendation-tech',
      icon: faRobot,
    },
  ]

  return (
    <main className='py-12'>
      <section className='container mx-auto px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-4'>
          Юридическая информация
        </h1>
        <p className='text-gray-600 text-center mb-12 max-w-3xl mx-auto'>
          На этой странице собраны все юридические документы компании ООО
          &quot;Перевозка27&quot;, регулирующие использование сайта и обработку
          данных пользователей в соответствии с законодательством Российской
          Федерации.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {legalDocs.map((doc) => (
            <LegalCard
              key={doc.title}
              title={doc.title}
              description={doc.description}
              link={doc.link}
              icon={doc.icon}
            />
          ))}
        </div>
        <div className='mt-12 p-6 bg-blue-50 rounded-lg'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            О компании
          </h2>
          <p className='text-gray-700'>
            ООО &quot;Перевозка27&quot; - надежный партнер для грузоперевозок по
            Хабаровскому краю и Дальнему Востоку.
          </p>
        </div>
      </section>
    </main>
  )
}

export default LegalInfoPage
