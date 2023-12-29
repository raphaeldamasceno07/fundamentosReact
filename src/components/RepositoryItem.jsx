export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Default"}</strong>
      <p>{props.repository.description ?? "descrição Default"}</p>
      <a href={props.repository.link} >Acessar link</a>
    </li>
  );
}

// {repositoryNames.map((repo, index) => (
//   <li key={index}>
//     <strong>{repo}</strong>
//     <p>Forms in ReactJs</p>
//     <a href={`https://github.com/${repo}`}>Acessar repositório</a>
//   </li>
// ))}
