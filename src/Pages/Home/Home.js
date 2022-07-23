import React,{useEffect, useState} from 'react'
import "./Home.css"
import {headerItems,products} from"../../utils/ProductsData"
import Banner1 from "../../BannerImages/Banner1.jpg"
import Banner2 from "../../BannerImages/Banner2.jpg"
import Banner3 from "../../BannerImages/Banner3.jpg"
import Banner4 from "../../BannerImages/Banner4.jpg"
import Banner5 from "../../BannerImages/Banner5.jpg"
import Banner6 from "../../BannerImages/Banner6.jpg"
import Slider from '../../Component/Slider/Slider'
import Product from '../../Component/Product/Product'
import ScrollToTop from '../../Component/ScrollToTop/ScrollToTop'
import "../../Component/Header/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../../redux/actions";
import Logo from "../../logo.svg";
import Header from '../../Component/Header/Header'


const Home = () => {
     const [searchfor, setsearchfor] = useState('')
     const getset=(searchfor)=>{
      setsearchfor(searchfor)
     }
     const search = () => {
          setproductscopy(products.filter((product) => product.title.toUpperCase().includes(searchfor.toUpperCase())))
        }; 
     const BannerImages=[Banner1,Banner2,Banner3,Banner4,Banner5,Banner6]
     const [filterby, setfilterby] = useState('All')
     const [productss, setproductscopy] = useState(products)

     useEffect(() => {
      setfilterby(filterby)
           if (filterby != 'All') {
                setproductscopy(products.filter((product) => product.type == filterby))
           } else {
                setproductscopy(products)
      }
    }, [filterby])
     const { basket,favourite, user } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const handleAuthentication = () => {
    if (user) {
      dispatch(logoutInitiate());
    }
  };
    return (
          <div>
               <Header onSearch={search} onSetsearchfor={getset}></Header>
               <div className='item-container'>
                   {headerItems && headerItems.map((item,index)=><button key={item}
              onClick={() => {
                setfilterby(item)
              }}
            >
              {' '}
              {item}{' '}
            </button>)}        
               </div>
               <div className='home'>
                    <div className='home-container'>
                        <Slider images={BannerImages}/>
                         <div className='home-row'>
                              {productss.slice(0,2).map((item)=> (
                                   <Product
                                   key={item.id}
                                   id={item.id}
                                   title={item.title}
                                   price={item.price}
                                   rating={item.rating}
                                   image={item.image}
                                   specification={item.specification}
                                   detail={item.detail}
                                   />
                              ))}

                         </div>
                         <div className='home-row'>
                              {productss.slice(2,5).map((item)=> (
                                   <Product
                                   key={item.id}
                                   id={item.id}
                                   title={item.title}
                                   price={item.price}
                                   rating={item.rating}
                                   image={item.image}
                                   specification={item.specification}
                                   detail={item.detail}
                                   />
                              ))}

                         </div>
                         <div className='home-row'>
                              {productss.slice(5,6).map((item)=> (
                                   <Product
                                   key={item.id}
                                   id={item.id}
                                   title={item.title}
                                   price={item.price}
                                   rating={item.rating}
                                   image={item.image}
                                   specification={item.specification}
                                   detail={item.detail}
                                   />
                              ))}

                         </div>
                         <div style={{ margintop: '40px' }}>
            <ScrollToTop />
          </div>
          
                    </div>

               </div>
               
          </div>
     )
}

export default Home
