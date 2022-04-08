import './SearchBarStatsContainer.css';

type ContainerProps = {
    children: React.ReactNode
}

const SearchBarStatsContainer:React.FC<ContainerProps> =
(props: ContainerProps) => {
  return <nav className='nav-container'>
    <ul className='navigation'>
      {props.children}
    </ul>
  </nav>;
};

export default SearchBarStatsContainer;
