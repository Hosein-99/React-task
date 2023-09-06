import './App.css';


//components
import Products from './components/Products';

//context
import ProductsContextProvider from './context/ProductsContextProvide';


function App() {
	return (

		<ProductsContextProvider>
			<Products />
		</ProductsContextProvider>
	);
  }

export default App;
