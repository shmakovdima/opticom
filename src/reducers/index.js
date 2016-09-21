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
  ]
};

export default function userstate(state = initialState) {
  return state;
}