async function fetchData(){
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  if(!response.ok) throw new Error('something went wrong')

    return response.json()
}

const useDataFetch = () => {
  const 
  return <div>useDataFetch</div>;
};

export default useDataFetch;
