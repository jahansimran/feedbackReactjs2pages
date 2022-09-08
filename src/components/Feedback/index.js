import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmogi = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderQuestionedScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="question-container">
        <h1 className="feedback-question-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emogi-list">
          {emojis.map(emogi => (
            <li key={emogi.id}>
              <button
                type="button"
                className="emogi-btn"
                onClick={this.onClickEmogi}
              >
                <img src={emogi.imageUrl} className="emogi" alt={emogi.name} />
                <br />
                <span className="emogi-name">{emogi.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emogi" />
        <h1 className="thankyou-text">Thank You!</h1>
        <p className="thankyou-description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="app-container">
        <div className="white-container">
          {isFeedbackSelected
            ? this.renderThankyouScreen()
            : this.renderQuestionedScreen()}
        </div>
      </div>
    )
  }
}
export default Feedback
