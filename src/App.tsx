import { useState, useEffect } from 'react'
import './App.css'
import { URL } from './configs'
import { Article } from './components/Article/Article'

function App() {
  const [result, setResult] = useState<Array<InewsItemProps>>([])
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        setResult(response.articles)
      })
  }, [result])

  return (
    <>
      {result ? (
        <div className='App'>
          {result.map((article: InewsItemProps, index: number) => {
            return <Article key={index} {...article} />
          })}
        </div>
      ) : (
        <div>We dont have news..</div>
      )}
    </>
  )
}

export default App
