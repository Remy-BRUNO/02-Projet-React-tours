import { useEffect, useState } from "react"
import Tours from "./Tours"
import Loading from "./Loading"
const url = "https://course-api.com/react-tours-project"

function App() {
  const [visites, setVisites] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        setIsLoading(false)
        setIsError(true)
        return
      }
      const data = await response.json()
      setVisites(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <h2>Une erreur s&apos;est produite...</h2>
  }
  return (
    <main>
      <Tours visites={visites} />
    </main>
  )
}

export default App
