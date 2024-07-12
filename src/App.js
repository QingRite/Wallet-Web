import './App.css';
import Sidebar from './components/navsidebar';
import Homepage from './components/homepage/homepage';

function App() {
  const bodyStyle = {
    backgroundColor: '#d9d9d9',
    display: 'flex'
  }

  return (
    <html>
        <body style={bodyStyle}>
          <Sidebar/>
          <Homepage/>
        </body>
    </html>
  );
}

export default App;
