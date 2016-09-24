const initialState = {
  windowWidth:0,
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


  Categories: [
    {
      link: 'optiline',
      title: 'Оптилайн',
      image: 'icon_optiline.png',
      count: '19',
      childrens: [

      ]
    },
    {
      link: 'eco_goods',
      title: 'Эко-товары',
      image: 'icon_eco.png',
      count: '12',
      childrens: [

      ]
    },
    {
      link: 'boxes',
      title: 'Коробки и контейнеры',
      image: 'icon_boxes.png',
      count: '21',
      childrens: [

      ]
    },
    {
      link: 'disposable_dishes',
      title: 'Одноразовая посуда',
      image: 'icon_pos.png',
      count: '17',
      childrens: [

      ]
    },
    {
      link: 'stationery',
      title: 'Концелярские товары',
      image: 'icon_canctov.png',
      count: '21',
      childrens: [

      ]
    },
    {
      link: 'slice',
      title: 'Пленка',
      image: 'icon_plen.png',
      count: '32',
      childrens: [

      ]
    },
    {
      link: 'packets',
      title: 'Пакеты и сумки',
      image: 'icon_packet.png',
      count: '3',
      childrens: [

      ]
    },
    {
      link: 'trays',
      title: 'Лотки и подложки',
      image: 'icon_lotki.png',
      count: '16',
      childrens: [
      ]
    },
    {
      link: 'goods_for_trade',
      title: 'Товары для торговли',
      image: 'icon_torgov.png',
      count: '18',
      childrens: [
      ]
    },
    {
      link: 'serving_goods',
      title: 'Товары для сервировки',
      image: 'icon_serv.png',
      count: '45',
      childrens: [
      ]
    },
    {
      link: 'cooking_goods',
      title: 'Товары для приготовления пищи',
      image: 'icon_prig.png',
      count: '18',
      childrens: [
      ]
    },
    {
      link: 'hygiene_products',
      title: 'Гигиеническая продукция',
      image: 'icon_higien.png',
      count: '12',
      childrens: [
      ]
    },
    {
      link: 'household_chemicals',
      title: 'Бытовая Химия',
      image: 'icon_him.png',
      count: '65',
      childrens: [
      ]
    },
    {
      link: 'prof_chemistry',
      title: 'Проф. Химия',
      image: 'icon_profhim.png',
      count: '16',
      childrens: [
      ]
    },
    {
      link: 'overall',
      title: 'Спецодежда',
      image: 'icon_specwear.png',
      count: '27',
      childrens: [
      ]
    },
    {
      link: 'packaging_materials',
      title: 'Упаковочные материалы',
      image: 'icon_up.png',
      count: '17',
      childrens: [
      ]
    },
    {
      link: 'cleaning_goods',
      title: 'Товары для уборки',
      image: 'icon_clining.png',
      count: '17',
      childrens: [
      ]
    },
    {
      link: 'electrical_goods',
      title: 'Электротовары',
      image: 'icon_electro.png',
      count: '17',
      childrens: [
      ]
    },
    {
      link: 'office_equipment',
      title: 'Офисная техника и расходники',
      image: 'icon_tech.png',
      count: '17',
      childrens: [
      ]
    },
    {
      link: 'kitchenware',
      title: 'Кухонные принадлежности',
      image: 'icon_kitche.png',
      count: '17',
      childrens: [
      ]
    },
    {
      link: 'goods',
      title: 'Хозтовары',
      image: 'icon_hoztov.png',
      count: '17',
      childrens: [
      ]
    },
    {
      link: 'textile',
      title: 'Текстиль',
      image: 'icon_textil.png',
      count: '17',
      childrens: [
      ]
    },
    {
      link: 'shares',
      title: 'Акции',
      image: 'icon_scidki.png',
      count: '17',
      childrens: [
      ]
    },
    {
      link: 'new_arrivals',
      title: 'Новые поступления',
      image: 'icon_new.png',
      count: '17',
      childrens: [
      ]
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

export default function pageData(state = initialState,action) {
  switch (action.type) {
    case 'SET_WINDOWWIDTH':
      return {...state, windowWidth: action.payload}
    default:
      return state;
  }
}