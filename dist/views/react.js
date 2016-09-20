(function() {
  var Add, App, Article, Comments, News, my_news, photos;

  window.ee = new EventEmitter();

  photos = ['images/cat.jpg', 'images/dog.jpg', 'images/owl.jpg'];

  my_news = [
    {
      author: 'Саша Печкин',
      text: 'В четверг, четвертого числа...',
      bigText: 'в  четыре  с четвертью часа  четыре  чёрненьких  чумазеньких чертёнка  чертили чёрными чернилами чертёж.'
    }, {
      author: 'Просто Вася',
      text: 'Считаю, что $ должен стоить 35 рублей!',
      bigText: 'А  евро  42!'
    }, {
      author: 'Гость',
      text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
      bigText: 'На самом деле  платно, просто  нужно прочитать очень длинное лицензионное соглашение'
    }
  ];

  App = React.createClass({displayName: "App",
    getInitialState: function() {
      return {
        news: my_news
      };
    },
    componentDidMount: function() {
      var self;
      self = this;
      return window.ee.addListener('News.add', function(item) {
        var nextNews;
        nextNews = item.concat(self.state.news);
        self.setState({
          news: nextNews
        });
        return console.log(item);
      });
    },
    componentWillUnmount: function() {},
    render: function() {
      console.log('render');
      return React.createElement("div", {
        "className": "app"
      }, React.createElement("h1", null, "Новости"), React.createElement(Add, null), React.createElement(News, {
        "data": this.state.news
      }));
    }
  });

  Article = React.createClass({displayName: "Article",
    propTypes: function() {
      return {
        data: function() {
          return {
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
          };
        }
      };
    },
    getInitialState: function() {
      return {
        visible: false,
        rating: 0,
        eshe_odno_svoistvo: 'qweqwe'
      };
    },
    readmoreClick: function(e) {
      e.preventDefault;
      return this.setState({
        visible: true
      }, function() {});
    },
    render: function() {
      var author, bigText, text, visible;
      author = this.props.data.author;
      text = this.props.data.text;
      bigText = this.props.data.bigText;
      visible = this.state.visible;
      return React.createElement("div", {
        "className": "article"
      }, React.createElement("p", {
        "className": "news__author"
      }, author, ":"), React.createElement("p", {
        "className": "news__text"
      }, text), React.createElement("a", {
        "href": "#",
        "onClick": this.readmoreClick,
        "className": 'news__readmore  ' + (visible ? 'none' : void 0)
      }, "  Подробнее"), React.createElement("p", {
        "className": 'news__big-text  ' + (!visible ? 'none' : void 0)
      }, bigText));
    }
  });

  News = React.createClass({displayName: "News",
    propTypes: function() {
      return {
        data: React.PropTypes.array.isRequired
      };
    },
    getInitialState: function() {
      return {
        counter: 0
      };
    },
    onTotalNewsClick: function() {
      return this.setState({
        counter: ++this.state.counter
      });
    },
    render: function() {
      var data, newsTemplate, ref;
      data = this.props.data;
      newsTemplate;
      if (data.length > 0) {
        newsTemplate = this.props.data.map(function(item, index) {
          return React.createElement("div", {
            "key": index,
            "className": "article"
          }, React.createElement(Article, {
            "data": item
          }));
        });
      } else {
        newsTemplate = React.createElement("p", null, " К  сожалению новостей  нет");
      }
      return React.createElement("div", {
        "className": "news"
      }, newsTemplate, React.createElement("strong", {
        "onClick": this.onTotalNewsClick,
        "className": 'news__count ' + ((ref = data.length > 0) != null ? ref : {
          '': 'none'
        })
      }, "Всего новостей: ", data.length));
    }
  });

  Comments = React.createClass({displayName: "Comments",
    render: function() {
      return React.createElement("div", {
        "className": "news"
      }, "Нет новостей  - \nкомментировать  нечего");
    }
  });

  Add = React.createClass({displayName: "Add",
    getInitialState: function() {
      return {
        agreeNotChecked: true,
        authorIsEmpty: true,
        textIsEmpty: true
      };
    },
    componentDidMount: function() {
      return ReactDOM.findDOMNode(this.refs.author).focus();
    },
    componentWillMount: function() {
      return console.log('componentWillMount');
    },
    componentWillReceiveProps: function() {
      return console.log('componentWillReceiveProps');
    },
    componentWillUnmount: function() {
      return window.ee.removeListener('News.add');
    },
    onFieldChange: function(fieldName, e) {
      var next;
      next = {};
      if (e.target.value.trim().length > 0) {
        next[fieldName] = false;
        return this.setState(next);
      } else {
        next[fieldName] = true;
        return this.setState(next);
      }
    },
    onClickHandler: function(e) {
      var author, item, text, textEl;
      console.log('gere');
      e.preventDefault();
      author = ReactDOM.findDOMNode(this.refs.author).value;
      textEl = ReactDOM.findDOMNode(this.refs.text);
      text = textEl.value;
      item = [
        {
          author: author,
          text: text,
          bigText: "..."
        }
      ];
      console.log(item);
      window.ee.emit('News.add', item);
      textEl.value = '';
      return this.setState({
        textIsEmpty: true
      });
    },
    onCheckRuleClick: function(e) {
      return this.setState({
        agreeNotChecked: !this.state.agreeNotChecked
      });
    },
    render: function() {
      return React.createElement("form", {
        "className": 'add  cf'
      }, React.createElement("input", {
        "placeholder": 'введите  значение',
        "ref": 'author',
        "defaultValue": '',
        "onChange": this.onFieldChange.bind(this, 'authorIsEmpty'),
        "className": 'add__author'
      }), React.createElement("textarea", {
        "className": 'add__text',
        "defaultValue": '',
        "placeholder": 'Текст  новости',
        "onChange": this.onFieldChange.bind(this, 'textIsEmpty'),
        "ref": 'text'
      }), React.createElement("label", {
        "className": 'add__checkrule'
      }, React.createElement("input", {
        "type": 'checkbox',
        "defaultChecked": false,
        "onChange": this.onCheckRuleClick,
        "ref": 'checkrule'
      }), "Я согласен  с правилами"), React.createElement("button", {
        "className": 'add__btn',
        "ref": 'alert_button',
        "disabled": this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty,
        "onClick": this.onClickHandler
      }, "Ругануться матом"));
    }
  });

  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

}).call(this);
