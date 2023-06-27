import React, {useState,useEffect} from 'react';
import axios from 'axios';
import '../src/Product.css';
import { useNavigate, useParams } from 'react-router';

function Productpage() {
      const [products,setProducts] = useState([]);
      var navigate = useNavigate();
      const id = useParams();

     useEffect(()=>{
       axios.get(`http://localhost:4500/products`).then((res) =>
            setProducts([...res.data])
        )
     },[])
     console.log(products);

  return (
    <div className='d-flex flex-wrap-reverse justify-content-around'>
        {
          products.map((p)=>{
             return(
              <div className="card bg-light" style={{width:'15rem', margin: '2rem', boxShadow: '3px black'}}>
                <img src={p.image} alt="LOADING.."  width={'200px'} height={'200px'} className="ms-auto pt-2"/>
                  <div className="card-body">
                    <h6 className="card-title"><a href="/products/:id" onClick={()=>{navigate(`/products/${id}`)}} className="text-decoration-none text-dark">{p.title}</a></h6>
                      <b className="text-success">Rating - {p.rating}({p.reviews})&nbsp;
                      <i className="fa fa-star" style={{fontSize :'13px', color:'yellow'}}></i>
                      <i className="fa fa-star" style={{fontSize :'13px', color:'yellow'}}></i>
                      <i className="fa fa-star" style={{fontSize :'13px', color:'yellow'}}></i>
                      <i className="fa fa-star-half" style={{fontSize :'13px', color:'yellow'}}></i></b>
                  </div>
              </div>
             )
          })
        }
    </div>
  )
}

export default Productpage;