import { useRouter } from 'next/router'

const DetailsPage = () => {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <div>
      <h1>Details Page</h1>
      <p>Course ID: {id}</p>
    </div>
  )
}

export default DetailsPage

