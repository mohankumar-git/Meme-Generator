import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 80%;
    max-width: 1020px;
  }
`

export const AppHeading = styled.h1`
  color: #35469c;
  font-size: 22px;
  font-family: 'Open Sans';
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 44px;
    text-align: start;
    align-self: flex-start;
  }
`

export const MemeGeneratorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 14px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 45%;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 18px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 16px;
  font-family: 'Open Sans';
  font-weight: 600;
  margin-bottom: 8px;
`
export const Input = styled.input`
  width: 100%;
  padding: 8px 10px 8px 10px;
  color: #5a7184;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Open Sans';
  border-radius: 5px;
  border: 1px solid #7e858e;
`
export const Select = styled.select`
  width: 100%;
  padding: 8px 10px 8px 10px;
  color: #5a7184;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Open Sans';
  border-radius: 5px;
  border: 1px solid #7e858e;
`
export const Button = styled.button`
  background-color: #0b69ff;
  padding: 12px 16px 12px 16px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Open Sans';
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const MemeContainer = styled.div`
  background-image: url('${props => props.url}');
  background-size: cover;
  width: 100%;
  max-width: 390px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
    height: 300px;
    order: 1;
  }
`
export const MemeContent = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const MemeTopText = styled.h1`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
  font-family: 'Open Sans';
  text-align: center;
`

export const MemeBottomText = styled.h1`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
  font-family: 'Open Sans';
  text-align: center;
`
