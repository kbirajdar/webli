
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
  
  
  
