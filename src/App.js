import './App.css';
import { useEffect, useState } from 'react';
import CheckBoxes from './CheckBoxes';
import ChechBoxMon from './ChechBoxMon';
import ChechBoxTue from './CheckBoxTue';
import ChechBoxWed from './ChechBoxWed';
import ChechBoxThu from './ChechBoxThu';
import ChechBoxFri from './ChechBoxFri';

function App() {
  const date = new Date()
  


  
  const [finalShowData, setFinalShowData] = useState('')
  const [showDate, setShowDate] = useState('')

  const [theDate, setTheDate] = useState(date.getDate())
  const [theMonth, setTheMonth] = useState(date.getMonth()+1)
  const [theYear, setTheYear] = useState(date.getFullYear())

  const [thePrev, setThePrev] = useState(0)
  const [theNext, setTheNext] = useState(0)

  const [theDay, setTheDay] = useState(date.toString().slice(0,3))

  const [theTimezone, setTheTimezone] = useState('Asia/Kolkata')

  // States for days in the body



  const [monBack, setMonBack] = useState('#44444410')
  const [tueBack, setTueBack] = useState('#44444410')
  const [wedBack, setWedBack] = useState('#44444410')
  const [thuBack, setThuBack] = useState('#44444410')
  const [friBack, setFriBack] = useState('#44444410')

  const [monBody, setMonBody] = useState(0)
  const [tueBody, setTueBody] = useState(0)
  const [wedBody, setWedBody] = useState(0)
  const [thuBody, setThuBody] = useState(0)
  const [friBody, setFriBody] = useState(0)

  const [paraData, setParaData] = useState('')

  const [monPara, setMonPara] = useState('')
  const [tuePara, setTuePara] = useState('')
  const [wedPara, setWedPara] = useState('')
  const [thuPara, setThuPara] = useState('')
  const [friPara, setFriPara] = useState('')

  const [monMonthNo, setMonMonthNo] = useState('0')
  const [tueMonthNo, setTueMonthNo] = useState('0')
  const [wedMonthNo, setWedMonthNo] = useState('0')
  const [thuMonthNo, setThuMonthNo] = useState('0')
  const [friMonthNo, setFriMonthNo] = useState('0')

  // --------- XXXXXXX ------


  

  useEffect(()=>{
    console.log(theDay)
    console.log('test the time : ', date.getDay('en-US', { timeZone: 'Europe/London' }))
    
    const test = new Date(date.getFullYear(), date.getMonth(), theDate, date.getHours(), date.getMinutes(), date.getSeconds()).toLocaleString('en-US', { timeZone: theTimezone})


    const letDate = new Date(test)
    setParaData(letDate.toDateString())
    console.log('letDate:', letDate.toDateString().slice(0,3))
    setFinalShowData(letDate.toDateString() + ' , ' + letDate.toTimeString().slice(0, 8))


    

  }, [])

  

  useEffect(()=>{
    // ----- Conditions for body -----

    if(finalShowData.slice(0,3) === 'Mon'){
      setMonBack('#44444490')
      setTueBack('#44444410')
      setWedBack('#44444410')
      setThuBack('#44444410')
      setFriBack('#44444410')
      setMonBody(1)
      setTueBody(1)
      setWedBody(1)
      setThuBody(1)
      setFriBody(1)
    }
    else if(finalShowData.slice(0,3) === 'Tue'){
      setMonBack('#44444410')
      setTueBack('#44444490')
      setWedBack('#44444410')
      setThuBack('#44444410')
      setFriBack('#44444410')
      setMonBody(0)
      setTueBody(1)
      setWedBody(1)
      setThuBody(1)
      setFriBody(1)
    }
    else if(finalShowData.slice(0,3) === 'Wed'){
      setMonBack('#44444410')
      setTueBack('#44444410')
      setWedBack('#44444490')
      setThuBack('#44444410')
      setFriBack('#44444410')
      setMonBody(0)
      setTueBody(0)
      setWedBody(1)
      setThuBody(1)
      setFriBody(1)
    }
    else if(finalShowData.slice(0,3) === 'Thu'){
      setMonBack('#44444410')
      setTueBack('#44444410')
      setWedBack('#44444410')
      setThuBack('#44444490')
      setFriBack('#44444410')
      setMonBody(0)
      setTueBody(0)
      setWedBody(0)
      setThuBody(1)
      setFriBody(1)
    }
    else if(finalShowData.slice(0,3) === 'Fri'){
      setMonBack('#44444410')
      setTueBack('#44444410')
      setWedBack('#44444410')
      setThuBack('#44444410')
      setFriBack('#44444490')
      setMonBody(0)
      setTueBody(0)
      setWedBody(0)
      setThuBody(0)
      setFriBody(1)
    }
    else{
      setMonBack('#44444410')
      setTueBack('#44444410')
      setWedBack('#44444410')
      setThuBack('#44444410')
      setFriBack('#44444410')
      setMonBody(0)
      setTueBody(0)
      setWedBody(0)
      setThuBody(0)
      setFriBody(0)
    }

    // ------- XXXXX ------
  }, [finalShowData])

  useEffect(()=>{
    const test = new Date(date.getFullYear(), date.getMonth(), theDate, date.getHours(), date.getMinutes(), date.getSeconds()).toLocaleString('en-US', { timeZone: theTimezone})


    const letDate = new Date(test)
    setParaData(letDate.toDateString())
    console.log('letDate:', letDate)
    setFinalShowData(letDate.toDateString() + ' , ' + letDate.toTimeString().slice(0, 8))

  }, [theTimezone])

  useEffect(()=> {
    const test = new Date(date.getFullYear(), date.getMonth(), theDate, date.getHours(), date.getMinutes(), date.getSeconds()).toLocaleString('en-US', { timeZone: theTimezone})


    const letDate = new Date(test)
    setParaData(letDate.toDateString())
    console.log('letDate:', letDate)
    setFinalShowData(letDate.toDateString() + ' , ' + letDate.toTimeString().slice(0, 8))
  }, [thePrev])


  useEffect(()=> {
    const test = new Date(date.getFullYear(), date.getMonth(), theDate, date.getHours(), date.getMinutes(), date.getSeconds()).toLocaleString('en-US', { timeZone: theTimezone})


    const letDate = new Date(test)
    setParaData(letDate.toDateString())
    console.log('letDate:', letDate)
    setFinalShowData(letDate.toDateString() + ' , ' + letDate.toTimeString().slice(0, 8))
  }, [theNext])


  useEffect(()=>{

    if(finalShowData.slice(4,7) === 'Jan'){
      setMonMonthNo()
    }

    let testDate = new Date(paraData)
    let kal = new Date()
    let parso = new Date()
    let tarso = new Date()
    let sarso = new Date()
    let narso = new Date()

    let pichlaKal = new Date()
    let pichlaParso = new Date()
    let pichlaTarso = new Date()
    let pichlaSarso = new Date()

    var getKal =  kal.setDate(testDate.getDate()+1)
    var getParso =  parso.setDate(testDate.getDate()+2)
    var getTarso =  tarso.setDate(testDate.getDate()+3)
    var getSarso =  sarso.setDate(testDate.getDate()+4)
    var getNarso =  narso.setDate(testDate.getDate()+5)

    var getPichlaKal = pichlaKal.setDate(testDate.getDate()-1)
    var getPichlaParso = pichlaParso.setDate(testDate.getDate()-2)
    var getPichlaTarso = pichlaTarso.setDate(testDate.getDate()-3)
    var getPichlaSarso = pichlaSarso.setDate(testDate.getDate()-4)


    var forKalFour = pichlaSarso.getDate()
    var forKalThree = pichlaTarso.getDate()
    var forKalTwo = pichlaParso.getDate()
    var forKalOne = pichlaKal.getDate()
    var forMonOne = testDate.getDate()
    var forTueOne = kal.getDate()
    var forWedOne = parso.getDate()
    var forThuOne = tarso.getDate()
    var forFriOne = sarso.getDate()

    if(paraData.slice(0,3)=== 'Mon'){
      setMonPara(forMonOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setTuePara(forTueOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setWedPara(forWedOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setThuPara(forThuOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setFriPara(forFriOne.toLocaleString('en-US', { timeZone: theTimezone}))
    }
   else if(paraData.slice(0,3)=== 'Tue'){
      setMonPara(forKalOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setTuePara(forMonOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setWedPara(forTueOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setThuPara(forWedOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setFriPara(forThuOne.toLocaleString('en-US', { timeZone: theTimezone}))
    }
   else if(paraData.slice(0,3)=== 'Wed'){
      setMonPara(forKalTwo.toLocaleString('en-US', { timeZone: theTimezone}))
      setTuePara(forKalOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setWedPara(forMonOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setThuPara(forTueOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setFriPara(forWedOne.toLocaleString('en-US', { timeZone: theTimezone}))
    }
   else if(paraData.slice(0,3)=== 'Thu'){
      setMonPara(forKalThree.toLocaleString('en-US', { timeZone: theTimezone}))
      setTuePara(forKalTwo.toLocaleString('en-US', { timeZone: theTimezone}))
      setWedPara(forKalOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setThuPara(forMonOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setFriPara(forTueOne.toLocaleString('en-US', { timeZone: theTimezone}))
    }
   else if(paraData.slice(0,3)=== 'Fri'){
      setMonPara(forKalFour.toLocaleString('en-US', { timeZone: theTimezone}))
      setTuePara(forKalThree.toLocaleString('en-US', { timeZone: theTimezone}))
      setWedPara(forKalTwo.toLocaleString('en-US', { timeZone: theTimezone}))
      setThuPara(forKalOne.toLocaleString('en-US', { timeZone: theTimezone}))
      setFriPara(forMonOne.toLocaleString('en-US', { timeZone: theTimezone}))
    }

    

  }, [paraData])

  return (
    <>
    <div className="App">
      <button onClick={()=> {
        setThePrev(thePrev-1)
        setTheDate(theDate-7)
        // setShowDate(`${theDate} : ${theMonth} : ${theYear}`)
      }}>Previous Week</button>

      <h2>{finalShowData}</h2>


      <button onClick={()=> {
        setTheNext(theNext-1)
        setTheDate(theDate+7)
        // setShowDate(`${theDate} : ${theMonth} : ${theYear}`)
      }}>Next Week</button>
    </div>


      <div className='timeZoneContainer'>


        
      <label for="cars">Timezone:</label>

        <select name="cars" id="cars" onChange={(e)=>{setTheTimezone(e.target.value)}}>
          <option value="Asia/Kolkata">Indian Standard Time (IST) </option>
          <option value="Europe/London">Greenwich Mean Time (GMT) </option>
        </select>
      </div>



      <div className='bodyContainer'>

          <div className='dayData' style={{backgroundColor: monBack}}>
            <h3>Mon</h3>
            <p>{monPara}</p>
          </div>

          <div className='checkBoxes'>
            {
              monBody===0 
              ?
              <p>Past</p>
              :
              <ChechBoxMon/>
          }
          </div>
      </div>


      <div className='bodyContainer'>

          <div className='dayData' style={{backgroundColor: tueBack}}>
            <h3>Tue</h3>
            <p>{tuePara}</p>
          </div>

          <div className='checkBoxes'>
            {
              tueBody===0 
              ?
              <p>Past</p>
              :
              <ChechBoxTue/>
          }
          </div>
      </div>


      <div className='bodyContainer'>

          <div className='dayData' style={{backgroundColor: wedBack}}>
            <h3>Wed</h3>
            <p>{wedPara}</p>
          </div>

          <div className='checkBoxes'>
            {
              wedBody===0 
              ?
              <p>Past</p>
              :
              <ChechBoxWed/>
          }
          </div>
      </div>


      <div className='bodyContainer'>

          <div className='dayData' style={{backgroundColor: thuBack}}>
            <h3>Thu</h3>
            <p>{thuPara}</p>
          </div>

          <div className='checkBoxes'>
            {
              thuBody===0 
              ?
              <p>Past</p>
              :
              <ChechBoxThu/>
          }
          </div>
      </div>

      <div className='bodyContainer'>

          <div className='dayData' style={{backgroundColor: friBack}}>
            <h3>Fri</h3>
            <p>{friPara}</p>
          </div>

          <div className='checkBoxes'>
            {
              friBody===0 
              ?
              <p>Past</p>
              :
              <ChechBoxFri/>
          }
          </div>
      </div>





    </>
  );
}

export default App;
