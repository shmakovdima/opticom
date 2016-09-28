const initialState = {
  only_eco: false,
  show_menu: false,
  isLogged: true,
  name: 'Анастасия Длиннофамильная',
  SetsPage: {
    popularSets: [
      {
        title: 'Для вашей гостиницы или отеля',
        cost: '35720',
        count: '13',
        link: '/readyset/forhotel',
        image: 'images/ready_item/catalog_allready_hotel.png',
        hoverimage: 'images/ready_item/catalog_allready_hotel.png',
        textleft: '+ 24'
      },
      {
        title: 'В зеленый офис ежемесячно',
        count: '23',
        cost: '35720',
        link: '/readyset/greenoffice',
        image: 'images/ready_item/catalog_allready_greenoffice.png',
        hoverimage: 'images/ready_item/catalog_allready_greenoffice.png'
      }
      ,
      {
        title: 'В зеленый офис ежемесячно',
        count: '23',
        cost: '35720',
        link: '/readyset/greenoffice',
        image: 'images/ready_item/catalog_allready_greenoffice.png',
        hoverimage: 'images/ready_item/catalog_allready_greenoffice.png'
      }
    ],
    mySets:[
      {
        title: 'В зеленый офис ежемесячно',
        count: '23',
        cost: '35720',
        link: '/readyset/greenoffice',
        editlink: '/readyset/greenoffice',
        image: 'images/ready_item/catalog_allready_greenoffice.png',
        hoverimage: 'images/ready_item/catalog_allready_greenoffice.png'
      }
      ,
      {
        title: 'В зеленый офис ежемесячно',
        count: '23',
        cost: '35720',
        editlink: '/readyset/greenoffice',
        link: '/readyset/greenoffice',
        image: 'images/ready_item/catalog_allready_greenoffice.png',
        hoverimage: 'images/ready_item/catalog_allready_greenoffice.png'
      }
    ]
  }
}









export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_ECO':
      return {...state, only_eco: action.payload}
    case 'SET_LOGGED':
      return {...state, isLogged: action.payload}
    case 'SHOW_MENU':
      return {...state, show_menu: action.payload}
    default:
      return state;
  }
}