import Card from './components/Card'
import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteRepos'

function App() {

  const { data, isLoading } = useFetchRepositories()
  const { favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) return <div>is loading!</div>

  return (
    <div>
      {data?.map(repository => (
        <Card key={repository.id}
          repository={repository}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </div>
  )
}

export default App
