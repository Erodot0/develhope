import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {
    const { data, loading, error } = useGithubUser(username)

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>there was an error!</h1>}
            {data && <div className="fetchContent">
                {data.avatar_url && <a href={data.html_url}><img src={data.avatar_url} alt="userpfp" /></a>}
                <h1>{data.name}</h1>
            </div>
            }
        </div>
    )
}