import Header from './appComponents/Header';
import BlogPost from './appComponents/BlogPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Blog Post Writer"/>
      </header>
      <hr></hr>
      <h3>Write your post here</h3>
      <p>Must be at least 100 characters!</p>
      <BlogPost />
    </div>
  );
}

export default App;
