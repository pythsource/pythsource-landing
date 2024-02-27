import { useParams } from 'react-router'

export default function BlogPage() {
  const pageParams = useParams()

  return <>blog url {pageParams.pageName}</>
}
