const initialState = {
  only_eco: false,
  show_menu: false,
  isLogged: true,
  name: 'Анастасия Длиннофамильная',
  Companies: [
    {
      name: 'ООО «Компания»',
      factaddress: 'Покров, Ленина 45, Владимирская область, 601122'
    }
  ],


  myOrders: {
      Orders: [
        {
          title: 'Заказ №234535',
          category: 'Товары для дома от 12 мая',
          address: 'Москва, Бутырская 46, 8-й этаж',
          date: '2016-05-13',
          cost: '1720',
          vendors: '22',
          editlink: '/editlink',
          status: 'working'
        }
        ,
        {
          title: 'Заказ №234535',
          category: 'Товары для дома от 12 мая',
          address: 'Москва, Бутырская 43, 8-й этаж',
          date: '2016-02-13',
          cost: '1720',
          vendors: '22',
          editlink: '/editlink',
          status: 'active'
        },
        {
          title: 'Заказ №234535',
          category: 'Товары для дома от 12 мая',
          address: 'Москва, Бутырская 42, 8-й этаж',
          date: '2016-01-13',
          cost: '1720',
          vendors: '22',
          editlink: '/editlink',
          status: 'active'
        },
        {
          title: 'Заказ №234535',
          category: 'Товары для дома от 12 мая',
          address: 'Москва, Бутырская 42, 8-й этаж',
          date: '2016-05-13',
          cost: '1720',
          vendors: '22',
          editlink: '/editlink',
          status: 'active'
        }
      ],
      OrdersMore: [
        {
          title: 'Заказ №234535',
          category: 'Товары для дома от 12 мая',
          address: 'Москва, Бутырская 43, 8-й этаж',
          date: '2016-02-13',
          cost: '1720',
          vendors: '22',
          editlink: '/editlink',
          status: 'active'
        },
        {
          title: 'Заказ №234535',
          category: 'Товары для дома от 12 мая',
          address: 'Москва, Бутырская 46, 8-й этаж',
          date: '2014-01-13',
          cost: '1720',
          vendors: '22',
          editlink: '/editlink',
          status: 'active'
        },
        {
          title: 'Заказ №234535',
          category: 'Товары для дома от 12 мая',
          address: 'Москва, Бутырская 46, 8-й этаж',
          date: '2015-05-13',
          cost: '1720',
          vendors: '22',
          editlink: '/editlink',
          status: 'active'
        }
      ]
  },


  myItems: {


    Buyed: [
      {
          id: 9,
          date: '2016-03-21',
          category: 'Обезжиривание поверхностей',
          title: 'Еще одно средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
          eco: false,
          link: 'catalog/testsubcategory/testcategory/testitem',
          vendorcode: 'is-29381',
          image: 'images/items/item_item_example.png',
          discount: true,
          new: false,
          cost:{
            one: 2100,
            discountone: 1800,
            discountpackaging: 13000,
            packaging: 15000
          },
          description:[
            {
              title: 'Объем',
              value: '1л'
            },
            {
              title: 'Тара',
              value: '1, 10 шт'
            }
          ]
      },
      {
          id: 9,
          date: '2016-04-27',
          category: 'Обезжиривание поверхностей',
          title: 'Свойство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
          eco: false,
          link: 'catalog/testsubcategory/testcategory/testitem',
          vendorcode: 'is-29381',
          image: 'images/items/item_item_example.png',
          discount: true,
          new: false,
          cost:{
            one: 2100,
            discountone: 1800,
            discountpackaging: 13000,
            packaging: 15000
          },
          description:[
            {
              title: 'Объем',
              value: '1л'
            },
            {
              title: 'Тара',
              value: '1, 10 шт'
            }
          ]
      },
      {
          id: 9,
          date: '2016-04-21',
          category: 'Средства для мытья рук',
          title: 'Мытья посуды Manudish Lemon Super, канистра 5 литров ...',
          eco: false,
          link: 'catalog/testsubcategory/testcategory/testitem',
          vendorcode: 'is-29381',
          image: 'images/items/item_item_example.png',
          discount: true,
          new: false,
          cost:{
            one: 2100,
            discountone: 1800,
            discountpackaging: 13000,
            packaging: 15000
          },
          description:[
            {
              title: 'Объем',
              value: '1л'
            },
            {
              title: 'Тара',
              value: '1, 10 шт'
            }
          ]
      }
      ,
      {
          id: 9,
          date: '2016-09-29',
          category: 'Замачивание посуды',
          title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
          eco: false,
          link: 'catalog/testsubcategory/testcategory/testitem',
          vendorcode: 'is-29381',
          image: 'images/items/item_item_example.png',
          discount: true,
          new: false,
          cost:{
            one: 2100,
            discountone: 1800,
            discountpackaging: 13000,
            packaging: 15000
          },
          description:[
            {
              title: 'Объем',
              value: '1л'
            },
            {
              title: 'Тара',
              value: '1, 10 шт'
            }
          ]
      }
      ,
      {
          id: 9,
          date: '2016-03-21',
          category: 'Обезжиривание поверхностей',
          title: 'Еще одно средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
          eco: false,
          link: 'catalog/testsubcategory/testcategory/testitem',
          vendorcode: 'is-29381',
          image: 'images/items/item_item_example.png',
          discount: true,
          new: false,
          cost:{
            one: 2100,
            discountone: 1800,
            discountpackaging: 13000,
            packaging: 15000
          },
          description:[
            {
              title: 'Объем',
              value: '1л'
            },
            {
              title: 'Тара',
              value: '1, 10 шт'
            }
          ]
      },
      {
          id: 9,
          date: '2016-04-27',
          category: 'Обезжиривание поверхностей',
          title: 'Свойство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
          eco: false,
          link: 'catalog/testsubcategory/testcategory/testitem',
          vendorcode: 'is-29381',
          image: 'images/items/item_item_example.png',
          discount: true,
          new: false,
          cost:{
            one: 2100,
            discountone: 1800,
            discountpackaging: 13000,
            packaging: 15000
          },
          description:[
            {
              title: 'Объем',
              value: '1л'
            },
            {
              title: 'Тара',
              value: '1, 10 шт'
            }
          ]
      },
      {
          id: 9,
          date: '2016-04-21',
          category: 'Средства для мытья рук',
          title: 'Мытья посуды Manudish Lemon Super, канистра 5 литров ...',
          eco: false,
          link: 'catalog/testsubcategory/testcategory/testitem',
          vendorcode: 'is-29381',
          image: 'images/items/item_item_example.png',
          discount: true,
          new: false,
          cost:{
            one: 2100,
            discountone: 1800,
            discountpackaging: 13000,
            packaging: 15000
          },
          description:[
            {
              title: 'Объем',
              value: '1л'
            },
            {
              title: 'Тара',
              value: '1, 10 шт'
            }
          ]
      }
      ,
      {
          id: 9,
          date: '2016-09-29',
          category: 'Замачивание посуды',
          title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
          eco: false,
          link: 'catalog/testsubcategory/testcategory/testitem',
          vendorcode: 'is-29381',
          image: 'images/items/item_item_example.png',
          discount: true,
          new: false,
          cost:{
            one: 2100,
            discountone: 1800,
            discountpackaging: 13000,
            packaging: 15000
          },
          description:[
            {
              title: 'Объем',
              value: '1л'
            },
            {
              title: 'Тара',
              value: '1, 10 шт'
            }
          ]
      }
    ],

    Loved: [
      {
        id: 9,
        title: 'И Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      }
    ],
    Ready: [
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      },
      {
        id: 9,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: true,
        new: false,
        cost:{
          one: 2100,
          discountone: 1800,
          discountpackaging: 13000,
          packaging: 15000
        },
        description:[
          {
            title: 'Объем',
            value: '1л'
          },
          {
            title: 'Тара',
            value: '1, 10 шт'
          }
        ]
      }
    ]
  },



  SettingsPage: {
    addresses: [
      {
        title: 'Головной офис',
        address: 'Покров, Ленина 45, Владимирская область, 601122',
        editlink: '/hz',
        sendinvite: '/hz'
      },
      {
        title: 'Головной офис',
        address: 'Покров, Ленина 45, Владимирская область, 601122',
        editlink: '/hz',
        sendinvite: '/hz'
      }

    ],
    manager: {
      name: 'Елена Боброва',
      phone: '+7-909-672-10-10',
      email: 'e.bobrova@opti-com.ru'
    },
    telemarket: {
      name: 'Елена Боброва',
      phone: '+7-909-672-10-10',
      email: 'e.bobrova@opti-com.ru'
    },
    workers: [
      {
        job: 'Менеджер',
        name: 'Елена Боброва',
        phone: '+7-909-672-10-10',
        email: 'e.bobrova@opti-com.ru',
        address: 'Головной офис Покров, Ленина 45'
      }
    ]
    
  },

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
    case 'SET_COMPANY':
      return {...state, Companies: action.payload}
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