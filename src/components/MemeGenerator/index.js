import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  AppHeading,
  MemeGeneratorContainer,
  Form,
  InputContainer,
  Label,
  Input,
  Select,
  Button,
  MemeContainer,
  MemeContent,
  MemeTopText,
  MemeBottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// const initialUrl = 'https://assets.ccbp.in/frontend/react-js/nature-img.png'

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    showMeme: false,
  }

  onSubmitGenerateMeme = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  renderFormContainer = () => {
    const {imageUrl, topText, bottomText, fontSize, showMeme} = this.state

    return (
      <Form onSubmit={this.onSubmitGenerateMeme}>
        <InputContainer>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            value={imageUrl}
            onChange={this.onChangeImageUrl}
            placeholder="Enter the Image URL"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="topText">Top Text</Label>
          <Input
            id="topText"
            value={topText}
            onChange={this.onChangeTopText}
            placeholder="Enter the Top Text"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="bottomText">Bottom Text</Label>
          <Input
            id="bottomText"
            value={bottomText}
            onChange={this.onChangeBottomText}
            placeholder="Enter the Bottom Text"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="fontSize">Font Size</Label>
          <Select
            id="fontSize"
            value={fontSize}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </Select>
        </InputContainer>
        {!showMeme && <Button type="submit">Generate</Button>}
      </Form>
    )
  }

  renderMeme = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <MemeContainer testid="meme" url={imageUrl}>
        <MemeContent>
          <MemeTopText fontSize={fontSize}>{topText}</MemeTopText>
          <MemeBottomText fontSize={fontSize}>{bottomText}</MemeBottomText>
        </MemeContent>
      </MemeContainer>
    )
  }

  render() {
    const {showMeme} = this.state

    return (
      <AppContainer>
        <ResponsiveContainer>
          <AppHeading>Meme Generator</AppHeading>
          <MemeGeneratorContainer>
            {showMeme ? this.renderMeme() : null}
            {this.renderFormContainer()}
          </MemeGeneratorContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
