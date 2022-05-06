import React from 'react'
import styled from 'styled-components'
import CardList from './Cards'

const Cards = () => {
  return (
      <CardContainer>
        {
          CardList.map(({id, title, unit, number, unit2, number2}) => {
            return (
              <Card key={id}>
                <CardTitle>{title}</CardTitle>
                <CardProperties>
                  <CardProperty>
                    <CardUnit>{unit}:</CardUnit> 
                    <CardNumber>{number}</CardNumber>
                  </CardProperty>
                  <CardProperty>
                    <CardUnit>{unit2}</CardUnit> 
                    <CardNumber>{number2}</CardNumber>
                  </CardProperty>
                </CardProperties>
            </Card>
            )
          })
        }
      </CardContainer>
  )
}

export default Cards

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`
const Card = styled.div`
  background: var(--white);
  padding: 18px;
  border-radius: 8px;
  min-width: 240px;
`
const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--silver);
`
const CardProperties = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const CardProperty = styled.div`
  display: flex;
  gap: 20px;
`
const CardUnit = styled.h4`
  font-weight: bold;
  font-size: 18px;
`
const CardNumber = styled.h3`
  font-size: 18px;
`