import React from 'react';

//styles
import styles from '../../styles/mystyle.module.css';

//resources
import profile from '../../assets/profile.jpg';
import Postimage from '../../assets/postImage.jpg';

const Products = ({productData}) => {


    const date = new Date(productData.timestamp);
        const options1 = {          
          year: "numeric",
          month: "numeric",
          day: "numeric"                           
        };
        const options2 = {          
            hour: "numeric",
            minute: "numeric",
            second: "numeric"                            
          };
        const formattedDate = date.toLocaleString('fa-IR', options1) + " - " +date.toLocaleString('fa-IR', options2);

        const deletePost = ()=>{
            fetch(`http://localhost:3000/posts/${productData.id}` , {
                method : 'DELETE',
            });
            const postID = productData.id;
            const ref = document.getElementById(`${postID}`);
            ref.remove();
        }

    return (
        <div className={styles.single_boxes} id={productData.id}>
            <div className={styles.first_sec}>
                <img src={profile} />
                <p>{productData.name} {productData.username}</p>
                <p>{productData.username}</p>
            </div>
            <div className={styles.second_sec}>
                <img src={Postimage} />
                <p>{formattedDate}</p>
            </div>
            <div className={styles.third_sec}>
                <button onClick={deletePost}>حذف پست</button>
            </div>
        </div>
    );
};

export default Products;