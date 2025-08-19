import React from 'react'
import styled from "@emotion/styled"


export const queryToken = "{{query}}"

const StyledSearchbarContainer = styled.div`
  position: absolute;
  left: calc(100px - 2.9rem - 10px);
  right: 100px;
  top: 200px;
  height: min-content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const StyledSearchbar = styled.input`
  width: 100%;
  font-size: 30pt;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  transition: 0.3s;
  border: none;
  border-bottom: 2px solid white;
  opacity: 0.3;

  ::placeholder {
    color: white;
  }

  :hover,
  :focus {
    opacity: 1;
    outline: none;
  }
`



export default function Goog (){
    
     const engine: string =  "duckduckgo.com/"
    
    const redirectToSearch = (query: string) => {
   
    
      
     if (!engine.includes(queryToken)) {
  window.location.href = `https://${engine}?q=${encodeURIComponent(query)}`
} else {
  window.location.href = engine.replace(queryToken, encodeURIComponent(query))
}
    
  }

  return (
    
   <StyledSearchbarContainer> 
     <StyledSearchbar
        placeholder="Always stay clean!"
        type="input"
        onKeyUp={e => e.key === "Enter" && redirectToSearch(e.currentTarget.value)}
        autoFocus
      />

   </StyledSearchbarContainer>


  )
}

