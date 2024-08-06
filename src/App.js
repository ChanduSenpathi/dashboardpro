
import Navbar from './componets/Navbar/Navbar';
import Dashboard from './componets/Dashboard/Dashboard';
import './App.css';
import SidebarProvider from './componets/Provider/SidebarProvider';



function App() {
  
  return (
    <SidebarProvider className='app_container'>
      <Navbar/>
      <Dashboard/>
    </SidebarProvider>
  );
}

export default App;
