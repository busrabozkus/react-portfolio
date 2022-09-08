import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import About from "./About"
import Contact from './Contact'
import Service from './Service'



const Home = () => {
    return (
        <div>
            <section className='container my-5 py-3 mb-3'>
                <div className='row '>
                    <div className='col-md-5'>
                        <h1 className='display-5 mb-4 '>Bilgisayar Mühendisi<br /> Büşra Bozkuş</h1>

                        <p className='lead mb-4'>
                            Lisans eğitimimi başarıyla tamamlamış , eğitim sürecinde
                            almış olduğum teorik ve uygulamalı derslere ek olarak
                            yapmış olduğum staj ve katıldığım kurslar ile tecrübeler
                            edinerek kariyer yolculuğuma hazırlanmış
                            bulunmaktayım. Şuan Javascript dili üzerinde
                            çalışmaktayım. JavaScript kütüphanesi React.js ile web
                            uygulamaları için hızlı ve interaktif kullanıcı ara yüzleri
                            oluşturmada kendimi geliştirmekteyim.
                        </p>



                        <NavLink to="/contact" className="btn btn-outline-danger me-4" type='button'>Bana Ulaşın</NavLink>
                        <NavLink to="/about" className="btn btn-danger" type='button'>Daha Fazlası</NavLink>
                    </div>

                    <div className='col-md-7 d-flex justify-content-center  align-items-center'>
                        <img src='/images/4.PNG' alt='Büşra' height="300px" width="300px"/>
                    </div>
                  

          
                </div>
             

            </section>
            <About/>
            <Service/>
            <Contact/>



        </div>
    )
}

export default Home