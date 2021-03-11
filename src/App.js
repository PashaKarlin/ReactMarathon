import './App.css';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Footer from './Components/Footer/Footer';
import bg1 from './Assets/bg2.jpg'
import bg2 from './Assets/bg3.jpg'

function App() {
  const colorBg = 'red'
  return (
    <div>
      <Header />
      <Layout urlBg={bg1} title='Custom Title' desc='Custom Description' />
      <Layout colorBg={colorBg} title='Custom Title' desc='Custom Description' />
      <Layout urlBg={bg2} title = 'Custom Title' desc = 'Custom Description'/>
      <Footer />
    </div>
  );
}

export default App;
