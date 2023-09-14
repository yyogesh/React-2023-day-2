import './App.scss';
import ContactUs from './components/ContactUs';

const pStyle = {color: 'red', fontSize: 20}

function App() {
  if(new Date().getDay() === 2) {
    pStyle.color = 'green'
  }
  return (
    <div className="App">
      <p style={{color: 'red', fontSize: 20}}>This is a p tag</p>
      <p style={pStyle}>This is a p tag</p>
      <p className="AppPTAG">This is a p tag</p>
      <hr/>
      <ContactUs/>
    </div>
  );
}

export default App;
