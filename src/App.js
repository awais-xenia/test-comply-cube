import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';




function App() {

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    console.log('fetchData called');
    setLoading(true);
  
    try {
      const result = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}`);

      console.log('result', JSON.stringify(result));

      const data = await result.json();
      console.log(JSON.stringify(data));


    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);}
    }

  return (
    <div className="App">
        <form onSubmit={fetchData}>
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
          <button type="submit">Search</button>
</form>
    </div>
  );
}

export default App;
