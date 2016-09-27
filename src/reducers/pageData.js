const initialState = {
  windowWidth:0,

  lovedItems: new Array(),

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
        {
          title: 'Канцелярские товары',
          link: 'catalog/subcategory',
          childrens: [
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }
            ,
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }
            ,
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }
            ,
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }   
          ]
        } 
        ,
        {
          title: 'Канцелярские товары',
          link: 'catalog/subcategory',
          childrens: [
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }
            ,
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }
            ,
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }
            ,
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }   
          ]
        }
        ,
        {
          title: 'Канцелярские товары',
          link: 'catalog/subcategory',
          childrens: [
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }
            ,
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }
            ,
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }
            ,
            {
              title: 'Канцелярские товары',
              link: 'catalog/subcatalog/category'
            }   
          ]
        }     

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

  specialOffer:[
    {
      id: 1,
      title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
      eco: false,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: false,
      cost:{
        one: 2100,
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
      id: 2,
      title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
      eco: true,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: false,
      cost:{
        one: 2100,
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
      id: 3,
      title: 'Средство для мытья посуды.',
      eco: false,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: true,
      cost:{
        one: 2100,
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
      id: 4,
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

  curItem: {
    id: 1,
    eco: true,
    boxdescription: 'В коробке 20 штук. В палете 4 коробки.',
    discount: true,
    new: true,
    vendorcode: 'is-29381',
    description: 'Экономичное средство. Удаляет жир, способствует быстрому высыханию посуды.',
    cost:{
        one: 2100,
        discountone: 1800,
        discountpackaging: 13000,
        packaging: 15000
    },
    image: 'images/itempage/item.png',

    fulldescriptionlink: '/fulldescriptionlink',
    title: 'Пики декоративные «Булава» «Пласт-Лидер», пластик, 8,5 см, 400 шт. в упаковке, 35 упаковок в коробке',
    breadcrumbs: [
      {
        title: 'Каталог',
        link: 'catalog'
      }
      , 
      {
        title: 'Профессиональная химия',
        link: 'subcatalog'
      }
      ,
      {
        title: 'Кухня',
        link: 'subcatalog'
      }
    ],

    accordings: [
      {
        title: 'Средство для мытья посуды Manudish Lemon',
        href: 'catalog/subcatalog/category',
        image: 'images/itempage/needed.png'
      },
      {
        title: 'Средство для мытья посуды Manudish Lemon',
        href: 'catalog/subcatalog/category',
        image: 'images/itempage/needed.png'
      },
      {
        title: 'Средство для мытья посуды Manudish Lemon',
        href: 'catalog/subcatalog/category',
        image: 'images/itempage/needed.png'
      }
      ,     
      {
        title: 'Средство для мытья посуды Manudish Lemon',
        href: 'catalog/subcatalog/category',
        image: 'images/itempage/needed.png'
      }


    ],

    allSetReady:[
      {
        title: 'Не для вашей гостиницы или отеля',
        count: '13',
        link: 'readyset/forhotel',
        image: 'images/ready_item/catalog_allready_hotel.png',
        hoverimage: 'images/ready_item/catalog_allready_hotel.png',
        textleft: '+ 24'
      },
      {
        title: 'В зеленый офис ежемесячно',
        count: '23',
        link: 'readyset/greenoffice',
        image: 'images/ready_item/catalog_allready_greenoffice.png',
        hoverimage: 'images/ready_item/catalog_allready_greenoffice.png'
      },
      {
        title: 'Экологичный бизнес-центр',
        count: '18',
        link: 'readyset/ecocenter',
        image: 'images/ready_item/catalog_allready_ecobisness.png',
        hoverimage: 'images/ready_item/catalog_allready_ecobisness_hover.png',
        left: '-64',
        textleft: '+ 104'
      },

      {
        title: 'Ассортимент для небольшого магазина',
        count: '46',
        link: 'readyset/forsmallshop',
        image: 'images/ready_item/catalog_allready_smallshop.png',
        hoverimage: 'images/ready_item/catalog_allready_smallshop.png'
        
      },
      {
        title: 'Полный комплект для уборки квартиры',
        count: '32',
        link: 'readyset/forcomplect',
        image: 'images/ready_item/catalog_allready_fullcomplect.png',
        hoverimage: 'images/ready_item/catalog_allready_fullcomplect.png',
        left: '-64',
        textleft: '+ 100'
      },
      {
        title: 'Для клининговых сервисов',
        count: '47',
        link: 'readyset/forclining',
        image: 'images/ready_item/catalog_allready_clining.png',
        hoverimage: 'images/ready_item/catalog_allready_clining.png',
        textleft: '+ 40'
      }
    ],
    BuyToo: [
      {
        id: 7,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: false,
        new: false,
        cost:{
          one: 2100,
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
        id: 6,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
        eco: true,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: false,
        new: false,
        cost:{
          one: 2100,
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
        id: 8,
        title: 'Средство для мытья посуды.',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: false,
        new: true,
        cost:{
          one: 2100,
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
      ,
      {
        id: 5,
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
        id: 7,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: false,
        new: false,
        cost:{
          one: 2100,
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
        id: 6,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
        eco: true,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: false,
        new: false,
        cost:{
          one: 2100,
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
        id: 8,
        title: 'Средство для мытья посуды.',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: false,
        new: true,
        cost:{
          one: 2100,
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
      ,
      {
        id: 5,
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

  }
  ,
  categoryData: {
    title: 'Кухня'
    ,
    breadcrumbs: [
      {
        title: 'Каталог',
        link: 'catalog'
      }
      , 
      {
        title: 'Подкаталог',
        link: 'subcatalog'
      }
    ],
    items: [
      {
        title: 'Ручная мойка посуды',
        items: [
          {
            id: 7,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 6,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
            eco: true,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 8,
            title: 'Средство для мытья посуды.',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: true,
            cost:{
              one: 2100,
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
          ,
          {
            id: 5,
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
            id: 7,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 6,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
            eco: true,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 8,
            title: 'Средство для мытья посуды.',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: true,
            cost:{
              one: 2100,
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
          ,
          {
            id: 5,
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
      }
,
      {
        title: 'Ручная мойка посуды',
        items: [
          {
            id: 7,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 6,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
            eco: true,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 8,
            title: 'Средство для мытья посуды.',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: true,
            cost:{
              one: 2100,
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
          ,
          {
            id: 5,
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
            id: 7,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 6,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
            eco: true,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 8,
            title: 'Средство для мытья посуды.',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: true,
            cost:{
              one: 2100,
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
          ,
          {
            id: 5,
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
      }
,
      {
        title: 'Ручная мойка посуды',
        items: [
          {
            id: 7,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 6,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
            eco: true,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 8,
            title: 'Средство для мытья посуды.',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: true,
            cost:{
              one: 2100,
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
          ,
          {
            id: 5,
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
            id: 7,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 6,
            title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
            eco: true,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: false,
            cost:{
              one: 2100,
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
            id: 8,
            title: 'Средство для мытья посуды.',
            eco: false,
            link: 'catalog/testsubcategory/testcategory/testitem',
            vendorcode: 'is-29381',
            image: 'images/items/item_item_example.png',
            discount: false,
            new: true,
            cost:{
              one: 2100,
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
          ,
          {
            id: 5,
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
      }


    ]


  }
  ,

  InteresedCategory:[
    {
      id: 7,
      title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
      eco: false,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: false,
      cost:{
        one: 2100,
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
      id: 6,
      title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
      eco: true,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: false,
      cost:{
        one: 2100,
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
      id: 8,
      title: 'Средство для мытья посуды.',
      eco: false,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: true,
      cost:{
        one: 2100,
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
    ,
    {
      id: 5,
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
      id: 7,
      title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
      eco: false,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: false,
      cost:{
        one: 2100,
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
      id: 6,
      title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
      eco: true,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: false,
      cost:{
        one: 2100,
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
      id: 8,
      title: 'Средство для мытья посуды.',
      eco: false,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: true,
      cost:{
        one: 2100,
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
    ,
    {
      id: 5,
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
  ,
  Interesed:[
    {
      id: 7,
      title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
      eco: false,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: false,
      cost:{
        one: 2100,
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
      id: 6,
      title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
      eco: true,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: false,
      cost:{
        one: 2100,
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
      id: 8,
      title: 'Средство для мытья посуды.',
      eco: false,
      link: 'catalog/testsubcategory/testcategory/testitem',
      vendorcode: 'is-29381',
      image: 'images/items/item_item_example.png',
      discount: false,
      new: true,
      cost:{
        one: 2100,
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
    ,
    {
      id: 5,
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


  LoadMore: {
    final: true,
    Interesed:[
      {
        id: 10,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров ...',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: false,
        new: false,
        cost:{
          one: 2100,
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
        id: 11,
        title: 'Средство для мытья посуды Manudish Lemon Super, канистра 5 литров dsgfsdf dsfadsf sdfdafsfsd',
        eco: true,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: false,
        new: false,
        cost:{
          one: 2100,
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
        id: 12,
        title: 'Средство для мытья посуды.',
        eco: false,
        link: 'catalog/testsubcategory/testcategory/testitem',
        vendorcode: 'is-29381',
        image: 'images/items/item_item_example.png',
        discount: false,
        new: true,
        cost:{
          one: 2100,
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
        id: 13,
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
        id: 14,
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
  }
  ,

  AllIsReady:[
    {
      title: 'Для вашей гостиницы или отеля',
      count: '13',
      link: 'readyset/forhotel',
      image: 'images/ready_item/catalog_allready_hotel.png',
      hoverimage: 'images/ready_item/catalog_allready_hotel.png',
      textleft: '+ 24'
    },
    {
      title: 'В зеленый офис ежемесячно',
      count: '23',
      link: 'readyset/greenoffice',
      image: 'images/ready_item/catalog_allready_greenoffice.png',
      hoverimage: 'images/ready_item/catalog_allready_greenoffice.png'
    },
    {
      title: 'Экологичный бизнес-центр',
      count: '18',
      link: 'readyset/ecocenter',
      image: 'images/ready_item/catalog_allready_ecobisness.png',
      hoverimage: 'images/ready_item/catalog_allready_ecobisness_hover.png',
      left: '-64',
      textleft: '+ 104'
    },

    {
      title: 'Ассортимент для небольшого магазина',
      count: '46',
      link: 'readyset/forsmallshop',
      image: 'images/ready_item/catalog_allready_smallshop.png',
      hoverimage: 'images/ready_item/catalog_allready_smallshop.png'
      
    },
    {
      title: 'Полный комплект для уборки квартиры',
      count: '32',
      link: 'readyset/forcomplect',
      image: 'images/ready_item/catalog_allready_fullcomplect.png',
      hoverimage: 'images/ready_item/catalog_allready_fullcomplect.png',
      left: '-64',
      textleft: '+ 100'
    },
    {
      title: 'Для клининговых сервисов',
      count: '47',
      link: 'readyset/forclining',
      image: 'images/ready_item/catalog_allready_clining.png',
      hoverimage: 'images/ready_item/catalog_allready_clining.png',
      textleft: '+ 40'
    }
  ]
};

export default function pageData(state = initialState,action) {
  switch (action.type) {
    case 'SET_LOVE':
      return {...state, lovedItems: action.payload}
    case 'SET_WINDOWWIDTH':
      return {...state, windowWidth: action.payload}
    default:
      return state;
  }
}