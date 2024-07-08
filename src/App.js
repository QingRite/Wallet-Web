import './App.css';
import Sidebar from './components/navsidebar';

function App() {
  const bodyStyle = {
    backgroundColor: '#d9d9d9'
  }

  return (
    <html>
        <body style={bodyStyle}>
          <Sidebar></Sidebar>
        </body>
    </html>
  );
}

export default App;
