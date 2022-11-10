
const First=()=>{
    return(
        <div className="FirstContaner">
            <div className="NavBar">
                <div className="Logo">
                    <h1><span className="DESIGN">DESIGN</span> <span className="Agency">AGENCY</span></h1>
                    
                </div>
                
                <div className="llist">
                    <p>Specialize in</p>
                    <p>Case Study</p>
                    <p>Process</p>
                    <p>Industries</p>
                </div>
                
                <div className="Buttons">
                    <button className="box">Schedule A Call</button>
                    <button className="box1">We are Hiring</button>

                </div>
            </div>
            <div className="Section">
                <img className="LogoImage" src={logo}/>
                <div className="logoTag">
                    <h5>INNOVATION DIGITAL TECHNOLOGY</h5>
                </div>
                <div className="logosmallTag">
                    <h5>everything we do is the consumer, imagination and you.</h5>
                </div>
            </div>
           
            


        </div>
    )
}

export default First;




============================================================First CSs=========================
  
  
  
  .FirstContaner{
  width: 1920px;
  height: 1224px;
  background-color: #00FF00;
  position: absolute;
}
.NavBar{
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  margin-left: 140px;
  margin-top: 54px;
}
.Logo{

  width: 201px;
  height: 76px;
}
.DESIGN{
  font-size: 40px;
  font-style: Gilroy;
  font-weight:900;

}
.Agency{
  font-size: 30px;
  font-style: Gilroy;
  font-weight:500;

}
.llist{
  width: 449px;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
p{
  font-size: 18px;
  font-family: Gilroy;
  font-weight: 600;
}
.Buttons{
  height: 76px;
  display: flex;
  justify-content: space-evenly;
}
.box{
  width: 219px;
  height: 49px;
  border-radius: 23px;
  background-color: black;
  color:#ffff ;
  font-size: 18px;
  font-family: Gilroy;
  font-weight: 600;
 


}
.box1{
  width: 219px;
  height: 49px;
  border-radius: 23px;
  background-color: #ffff;
  color:black ;
  font-size: 18px;
  font-family: Gilroy;
  font-weight: 600;
  border: none;

 


}
.LogoImage{
  position: relative;
  margin-top: 241px;
  margin-left: 140px;
  width: 1144px;
  height: 891px;
  position: absolute;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;

}
.logoTag{
  margin-top: 470px;
  margin-left: 341px;
  width: 1238px;
  height: 270px;
  position: absolute;
  text-align: left;
  font: normal normal 900 120px/120px Gilroy;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 1;
}
.Section{
  position: relative;
}
.logosmallTag{
  margin-top: 790px;
  margin-left: 341px;
  width: 1160px;
  height: 49px;
  position: absolute;
  /* UI Properties */
  text-align: left;
  font: normal normal bold 40px/80px Gilroy;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

===============================Second and Third ================================
    
  
  import React from 'react'
import dia from './images/icon-group-two/Group 146891 (1).svg';
import sample from './images/icon-group-one/Group 146822.svg'

function Home() {
    return (
        <>
            <div className="main">
                <div className="first">
                    
                </div>


                <div className="second">
                    <div className="heading2">
                        <div>MEASUREMENT </div>
                        <div>TO OUR SUCCESS</div>
                    </div>
                    <div className='subHeading2'>Our process-driven approach keeps us going</div>

                    <div className="iconMain">
                        <div className="iconSubGroupMain">
                            <img src={sample} alt="" srcset="" />
                            <span className="iconNameMain">MEDIA & ENTERTAINMENT</span> 
                        </div>
                        <div className="iconSubGroupMain">
                            <img src={sample} alt="" srcset="" />
                            <span className="iconNameMain">HEALTH CARE & WELLNESS</span>
                        </div>
                        <div className="iconSubGroupMain">
                            <img src={sample} alt="" srcset="" />
                            <span className="iconNameMain">HOSPITALITY & REAL ESTATE</span>
                        </div>
                        <div className="iconSubGroupMain">
                            <img src={sample} alt="" srcset="" />
                            <span className="iconNameMain">RETAIL & E COMMERCE</span>
                        </div>
                        <div className="iconSubGroupMain">
                            <img src={sample} alt="" srcset="" />
                            <span className="iconNameMain">EDUCATION &LEARNING</span>
                        </div>
                        <div className="iconSubGroupMain">
                            <img src={sample} alt="" srcset="" />
                            <span className="iconNameMain">TRAVEL & TRANSPORT</span>
                        </div>
                        <div className="iconSubGroupMain">
                            <img src={sample} alt="" srcset="" />
                            <span className="iconNameMain">MOBILE & TELECOM</span>
                        </div>
                        <div className="iconSubGroupMain">
                            <img src={sample} alt="" srcset="" />
                            <span className="iconNameMain">IT & ITES</span>
                        </div>
                        
                    </div>
                 
                </div>



                <div className="third">
                    <div className="heading3">
                        <div>WE ARE WORKING</div> <div>WITH THESE INDUSTRIES</div>

                    </div>

                    <div className="iconGroup">
                        <div className="iconSubGroup">
                            <img src={dia} alt="" srcset="" />
                            <span className="iconName">MEDIA & ENTERTAINMENT</span> 
                        </div>
                        <div className="iconSubGroup">
                            <img src={dia} alt="" srcset="" />
                            <span className="iconName">HEALTH CARE & WELLNESS</span>
                        </div>
                        <div className="iconSubGroup">
                            <img src={dia} alt="" srcset="" />
                            <span className="iconName">HOSPITALITY & REAL ESTATE</span>
                        </div>
                        <div className="iconSubGroup">
                            <img src={dia} alt="" srcset="" />
                            <span className="iconName">RETAIL & E COMMERCE</span>
                        </div>
                        <div className="iconSubGroup">
                            <img src={dia} alt="" srcset="" />
                            <span className="iconName">EDUCATION &LEARNING</span>
                        </div>
                        <div className="iconSubGroup">
                            <img src={dia} alt="" srcset="" />
                            <span className="iconName">TRAVEL & TRANSPORT</span>
                        </div>
                        <div className="iconSubGroup">
                            <img src={dia} alt="" srcset="" />
                            <span className="iconName">MOBILE & TELECOM</span>
                        </div>
                        <div className="iconSubGroup">
                            <img src={dia} alt="" srcset="" />
                            <span className="iconName">IT & ITES</span>
                        </div>
                        <div className="iconSubGroup">
                            <img src={dia} alt="" srcset="" />
                            <span className="iconName">AGRITECH</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;

=========================================Second and third CSS ============================
    
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.first {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1078px;

    background: #00FF00 0% 0% no-repeat padding-box;
    border-radius: 0px 0px 0px 531px;
    opacity: 1;
}

.second {
    width: 100%;
    height: 50rem;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
}

.heading2 {
    text-align: center;
    font: normal normal 900 60px/60px Gilroy;
    letter-spacing: 0px;
    color: #00FF00;
    text-transform: uppercase;
    opacity: 1;
    position: absolute;
    top: 2rem;
}

.iconMain {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 90%;
    position: absolute;
    top: 12rem;

}

.iconSubGroupMain {
    display: flex;
    width: 30%;
    align-items: center;

}

.iconNameMain {
    text-align: left;
    font: normal normal 600 24px/30px Gilroy ☞;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
}

.subHeading2 {
    text-align: center;
    font: normal normal medium 16px/55px Gilroy;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    position: absolute;
    top: 8.9rem;
}

.third {
    width: 100%;
    height: 60rem;
    background-color: #EDEDED;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.heading3 {
    text-align: center;
    font: normal normal 900 60px/60px Gilroy;
    letter-spacing: 0px;
    color: #09090A;
    text-transform: uppercase;
    opacity: 1;
    margin-bottom: 2.5rem;
}

.iconGroup {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
}

.iconSubGroup {
    width: 30%;
    display: flex;
    align-items: center;
    margin: 0.5rem;
}

.iconName {
    text-align: left;
    font: normal normal 600 24px/30px Gilroy;
    letter-spacing: 0px;
    color: #000000;
    text-transform: uppercase;
    opacity: 1;
    padding-left: 0.5rem;
}
  
