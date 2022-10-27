import DataSearch from './Components/w5t3/fetchAndSearch/DataSearch';
import Layout from './Components/w5t3/Layout/Layout'
function App() {
  //Layout umfasst die componenten, die das layout halten soll. die componenten sind die {children} in der Layout componente
  return (
    <Layout>
      <DataSearch />
    </Layout>

  );
}

export default App;
