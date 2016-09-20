ROOT = React.createClass
  render: ()->
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>


App = React.createClass
  render:->
    <div>ok</div>


ReactDOM.render <ROOT/>, document.getElementById('root')


###
window.ee = new EventEmitter()

photos  = ['images/cat.jpg','images/dog.jpg','images/owl.jpg']

my_news = [
  {
    author: 'Саша Печкин'
    text: 'В четверг, четвертого числа...'
    bigText:  'в  четыре  с четвертью часа  четыре  чёрненьких  чумазеньких чертёнка  чертили
  чёрными чернилами чертёж.'
  }
  {
    author: 'Просто Вася'
    text: 'Считаю, что $ должен стоить 35 рублей!'
    bigText:  'А  евро  42!'
  }
  {
    author: 'Гость'
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    bigText:  'На самом деле  платно, просто  нужно прочитать очень длинное лицензионное  
соглашение'
  }
]

App = React.createClass

  getInitialState: ()->
    return {
      news: my_news
    }

  componentDidMount: ->
    self = this

    window.ee.addListener 'News.add',(item)-> 
      nextNews  = item.concat(self.state.news)
      self.setState {news:  nextNews}
      console.log item


  componentWillUnmount: ()->

  render: ->
    console.log('render');
    return (
      <div  className="app">
        <h1>Новости</h1>
        <Add /> 
        <News data={this.state.news}/>
      </div>
    )





Article = React.createClass
  propTypes: -> 
    data: ->
      author: React.PropTypes.string.isRequired
      text: React.PropTypes.string.isRequired
      bigText:  React.PropTypes.string.isRequired
  getInitialState:->
    return {
      visible: false
      rating: 0
      eshe_odno_svoistvo: 'qweqwe'
    }
  readmoreClick: (e)->
    e.preventDefault
    this.setState({visible: true}, ()->
    )

  render: -> 

    author  = this.props.data.author
    text  = this.props.data.text
    bigText = this.props.data.bigText
    visible = this.state.visible;

    return (
      <div  className="article">
        <p  className="news__author">{author}:</p>
        <p  className="news__text">{text}</p>
        <a  href="#" 
          onClick={this.readmoreClick}  
          className={'news__readmore  ' + (if visible then 'none')}
        >  Подробнее</a>
        <p  className={'news__big-text  ' + (if !visible then 'none') }>{bigText}</p>
      </div>
    )

News = React.createClass

  propTypes:-> {
    data: React.PropTypes.array.isRequired
  }
  getInitialState: ->
    return (
      counter:  0
    )
  onTotalNewsClick: ()->
    this.setState {counter: ++this.state.counter}
  
  render: ->
    data = @props.data

    newsTemplate
    if data.length > 0

      newsTemplate = @props.data.map (item,  index)->
        return(
          <div key={index} className="article">
            <Article  data={item} />

          </div>)

    else
      newsTemplate  = <p> К  сожалению новостей  нет</p>

    return  (
        <div  className="news">
            {newsTemplate}
            <strong onClick={this.onTotalNewsClick} className={'news__count ' + (data.length  > 0 ? '':'none')  }>Всего новостей: {data.length}</strong>
        </div>
    )

Comments = React.createClass
  render: ->
    return(
      <div  className="news">
        Нет новостей  - 
        комментировать  нечего
      </div>
    )




# Тестовый инпут 
Add = React.createClass

  getInitialState: ->
    return  {
      agreeNotChecked:  true,
      authorIsEmpty:  true,
      textIsEmpty:  true
    }

  componentDidMount: ->
    ReactDOM.findDOMNode(this.refs.author).focus()

  componentWillMount: ->
    console.log 'componentWillMount'


  componentWillReceiveProps: ->
    console.log 'componentWillReceiveProps'

  componentWillUnmount: ()->
    window.ee.removeListener 'News.add'

  onFieldChange: (fieldName, e)->
    next  = {}
    if (e.target.value.trim().length > 0)
      next[fieldName] = false
      this.setState(next)
    else 
      next[fieldName] = true
      this.setState(next)

  onClickHandler: (e)->
    console.log 'gere'

    e.preventDefault()

    author  = ReactDOM.findDOMNode(this.refs.author).value
    textEl  = ReactDOM.findDOMNode(this.refs.text)
    text  = textEl.value

    item = [{
      author: author
      text: text
      bigText: "..."
    }]


    console.log item

    window.ee.emit 'News.add',  item

    textEl.value  = ''

    this.setState {textIsEmpty: true}

  onCheckRuleClick: (e)->
    this.setState {agreeNotChecked: !this.state.agreeNotChecked}

  render:->
    return (
      <form className='add  cf'>
        <input         
          placeholder='введите  значение'
          ref='author'
          defaultValue = ''
          onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
          className='add__author'
        />
        <textarea
          className='add__text'
          defaultValue=''
          placeholder='Текст  новости'
          onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
          ref='text'
        ></textarea>
        <label  className='add__checkrule'>
          <input  
            type='checkbox' 
            defaultChecked={false} 
            onChange={this.onCheckRuleClick} 
            ref='checkrule' />Я согласен  с правилами
        </label>

        <button
          className='add__btn' 
          ref='alert_button'
          disabled={this.state.agreeNotChecked  ||  this.state.authorIsEmpty || this.state.textIsEmpty}
          onClick = {this.onClickHandler}
        >Ругануться матом</button>
      </form>
    )

ReactDOM.render <App/>, document.getElementById('root')


###