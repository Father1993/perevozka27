/* eslint-disable max-len */
import {
  faMapMarkedAlt,
  faHistory,
  faTruckFast,
  faAward,
  faTruck,
  faBoxOpen,
  faClock,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

export const reasons = [
  {
    icon: faMapMarkedAlt,
    title: 'Хабаровск + ДФО',
    description:
      'Осуществляем грузоперевозки по городу Хабаровск и ближайшим регионам на грузовике Isuzu Elf. Грузоподъемность: 3 тонны. Объем: 16м².',
    bgImage: '/img/2.jpg',
  },
  {
    icon: faHistory,
    title: 'Большой опыт работы',
    description:
      'Более 15 лет опыта. Доставляем грузы по всему краю с 2008 года.',
    bgImage: '/img/1.jpg',
  },
  {
    icon: faTruckFast,
    title: 'Качественная доставка',
    description:
      'Наш водитель - профессионал своего дела. Всегда вовремя заберёт груз и доставит точно в срок.',
    bgImage: '/img/dostavka.jpg',
  },
  {
    icon: faAward,
    title: 'Преимущества',
    description:
      'Лучшая цена грузоперевозок в регионе! Перевозки по Хабаровску и ближайшим районам края.',
    bgImage: '/img/preimushestvo.jpg',
  },
]

export const officialServices = [
  'Заключаем договоры с физическими и юридическими лицами',
  'Выдаем чеки для отчетности',
  'Гарантируем прозрачность и легальность всех операций',
]

export const services = [
  {
    icon: faTruck,
    title: 'Грузовик с водителем',
    price: '1 200₽/час',
    description:
      'Наш грузовик с водителем предоставляет надежные и комфортные услуги по перевозке грузов. Мы гарантируем своевременную доставку и безопасность груза.',
    bgImage: '/img/elf.jpg',
  },
  {
    icon: faTruckFast,
    title: 'Грузчик',
    price: '700₽/час',
    description:
      'Наши грузчики профессионально и быстро выполнят погрузочно-разгрузочные работы. Мы ценим ваше время и гарантируем качественное обслуживание.',
    bgImage: '/img/gruz.jpg',
  },
]

export const roadRoutes = [
  { route: 'Хабаровск - Владивосток', price: '55 000₽' },
  { route: 'Хабаровск - Комсомольск-на-Амуре', price: '40 000₽' },
  { route: 'Хабаровск - Благовещенск', price: '55 000₽' },
  { route: 'Хабаровск - Биробиджан', price: '20 000₽' },
]

export const mainServices = [
  {
    icon: faTruck,
    title: 'Надежный транспорт',
    description: 'Грузовик Isuzu Elf',
  },
  {
    icon: faBoxOpen,
    title: 'Вместимость',
    description: 'До 3 тонны, 16м²',
  },
  {
    icon: faClock,
    title: 'Точность доставки',
    description: 'Всегда вовремя',
  },
  {
    icon: faMapMarkedAlt,
    description: 'Хабаровск край и ДФО',
  },
]

export const contactInfo = [
  { icon: faPhone, text: '+7 962 228 52 19', href: 'tel:+79622285219' },
  {
    icon: faEnvelope,
    text: 'perevozka27@gmail.com',
    href: 'mailto:perevozka27@gmail.com',
  },
  { icon: faMapMarkerAlt, text: 'г. Хабаровск', href: '#' },
  { icon: faClock, text: 'Работаем с 8:00 - 20:00, Без выходных', href: '#' },
]
