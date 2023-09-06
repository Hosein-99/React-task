import React, { useContext } from 'react';

//context
import { ProductsContext } from '../context/ProductsContextProvide';

//styles
import styles from '../styles/mystyle.module.css';

//components
import Product from './shared/Product';

const Products = () => {


	const items = useContext(ProductsContext);
	
	return (
		<div className={styles.main_box_flex}>
			{
				items.map(item => <Product key={item.id} productData={item}/>)
			}
		</div>
	);
};

export default Products;