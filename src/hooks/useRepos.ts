import { useQuery } from "@tanstack/react-query"
import api from "../api/github"
import { Repository } from "./types"

const fetchRepos = async () => {
    const { data } = await api.get<Repository[]>('/users/ivaniuss/repos')
    return data
}

export const useFetchRepositories = () => {
    return useQuery(['repositories'], fetchRepos)
}
