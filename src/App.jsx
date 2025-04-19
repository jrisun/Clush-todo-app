import { RouterProvider } from 'react-router-dom';
import './styles/main.css';
import './App.css';
import root from './router/root';

function App() {
    return (
        <RouterProvider router={root}/>
    )
}

export default App;
