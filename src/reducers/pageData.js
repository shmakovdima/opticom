const initialState = {
  FooterLinks: [
    {
      title: 'Компания',
      href: 'company'
    },
    {
      title: 'Сотрудничество',
      href: 'cooperation'
    },
    {
      title: 'Производство',
      href: 'manufacturing'
    },
    {
      title: 'Пресс-центр',
      href:  'press-room'
    }
    ,{
      title: 'Блог',
      href: 'blog'
    },{
      title: 'Отвественность',
      href: 'responsibility'
    },{
      title: 'Экология',
      href: 'ecology'
    }
  ],
  HeaderLinks: [
    {
      title: 'Каталог',
      href: 'catalog'
    },
    {
      title: 'Настоящее',
      href: 'today'
    },
    {
      title: 'Будушее',
      href: 'future'
    }

  ],
  Allisready:[
    {
      title: '',
      count: '',
      link: 'readyset/forhotel',
      image: '',
      hoverimage: ''
    },
    {
      title: '',
      count: '',
      link: 'readyset/forhotel',
      image: '',
      hoverimage: ''
    },
    {
      title: '',
      count: '',
      link: 'readyset/forhotel',
      image: '',
      hoverimage: ''
    },
    {
      title: '',
      count: '',
      link: 'readyset/forhotel',
      image: '',
      hoverimage: ''
    },
    {
      title: '',
      count: '',
      link: 'readyset/forhotel',
      image: '',
      hoverimage: ''
    },
    {
      title: '',
      count: '',
      link: 'readyset/forclining',
      image: '',
      hoverimage: ''
    }
  ]
};

export default function pageData(state = initialState) {
  return state
}