function Repos(props){
    const repos = props.repos;
    return(
        <>
            <table>
                <thead>
                    <tr>
                    <th>Name Repo</th>
                    <th>stars</th>
                    <th>Visit Link</th>
                    </tr>
                </thead>
                {props.repos.message !== 'Not Found' ? <tbody>
                    {repos.map(rep => {
                        return (
                            <tr key={rep.id}>
                                <td>{rep.name}</td>
                                <td>{rep.stargazers_count}</td>
                                <td><a href={rep.html_url} target="_blank">Visit</a></td>
                            </tr>
                        )
                    })}
                </tbody>: <p>there is no github with this name</p>}
            </table>
        </>
    )
}

export default Repos;