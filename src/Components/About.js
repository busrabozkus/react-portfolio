import React from 'react'
import { Link } from 'react-router-dom'




const About = () => {
  return (
    <div>
      <section className='about'>

        <div className='container'>
          <div className='row'>
            <div className='col-12  text-center py-2'>
              <h1>Hakkımda </h1><hr />
              

            </div>

          </div>
          <div className='container my-5'>
            <div className='row'>
              <div className='col-md-5 mx-auto'>
                <img src='/images/b.jpg' alt='Büşra' height="350px" width="350px" />

              </div>
              <div className='col-md-6 my-3'>
                <h1 className='display-5 mb-4'>Büşra Bozkuş</h1>
                <p className='lead'>
                 14 Eylül 1998 tarihinde Ankara'da doğdum. Lise dönemi dahil olmak üzere eğitimimi
                 Ankara'da tamamladım. Lisans eğitimimi Kırıkkale Üniversitesi Bilgisayar Mühendisliği'nde 
                 2022 yılında tamamladım. Şuan Javascript kütüphanesi olan React üzerinde çalışmalar yaparak kendimi
                 geliştirme yolculuğuna devam etmekteyim.
                </p>
                <link ></link>
               <br/>


          
                


                <div className="progress my-4 ">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Javascript</div>
                 
                </div>
                <div className="progress my-4">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width:"65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">Java</div>
                </div>
                <div className="progress my-4">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">C#</div>
                </div>
                <div className="progress my-4">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Css</div>
                </div>
              

              </div>






            </div>

          </div>


        </div>
      </section>
    </div>
  )
}

export default About