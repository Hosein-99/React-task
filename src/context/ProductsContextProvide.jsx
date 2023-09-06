import React ,{useState , useEffect , createContext} from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

const [products , setProducts] = useState([]);

const url = "http://localhost:3000/posts";

const fetchInfo = () => {
    return fetch(url)
    .then((res) => res.json())
    .then((data) => setProducts(data))      
  }

useEffect(()=>{

    fetchInfo();

} , [])




    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;