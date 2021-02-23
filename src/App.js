import './App.css';
function App() {
  // name and sotre variables before return statement
  const post = {
    title: 'Dinosaurs are awesome',
    author: 'Stealthy Stegosaurus',
    body: 'Check out this body property!',
    comments: "First!"
  };

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>by{post.author}</p>
      <p>{post.body}</p>
      <h2>Comments:</h2>
      <p>{post.comments}</p>
    </div>
  );
}

export default App;