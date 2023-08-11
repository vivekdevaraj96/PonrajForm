import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import AttendanceData from '../Data/attendance.json'
import { Grommet,Form } from 'grommet';
import { Button,Box,Layer, DateInput,FormField,TextInput} from 'grommet';

// console.log(AttendanceData)


const eventData=(AttendanceData)=>{
  var dates=[]
  AttendanceData.attendance.map((a)=>{
    if(a.status==='Approved'){
      dates.push({
        start:a.start,
        status:a.status,
        color:'green',
        display:'background'
  })
}else if(a.status==='Applied'){
    dates.push({
      start:a.start,
      status:a.status,
      color:'yellow',
      display:'background'
})
}else if(a.status==='Leave'){
  dates.push({
    start:a.start,
    status:a.status,
    color:'red',
    display:'background'
})
}
})
return dates
}



export function Attendance() {
  const [show, setShow] = React.useState();

  const [disp,setdisp]=React.useState([]);

  

  const [value, setValue] = React.useState({date:"",reason:""});

  
  

  useEffect(()=>{
    const a=eventData(AttendanceData)
    setdisp([...a]);    
  },[])
  return (    
    <Grommet full>
      <h1>Attendance</h1>
      

      <Box>
      <Button primary label="Apply Leave" alignSelf="end" onClick={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          position="center" style={{ padding: "10px", maxHeight: "75v", overflowY: "auto",width:"50%" }}
        >

          <Form
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onReset={() => setValue({})}
                onSubmit={({ value }) => {setShow(false)}}
                style={{width: "100%" }}
              >
                
               

                  <label>Start date - End date</label>
          
        <FormField name="date">
        <DateInput
            id="dateinput-range"            
            format="mm/dd/yyyy-mm/dd/yyyy"
            name="date"
          />  
          </FormField>
          <br></br>  
          <FormField label="Reason" name="reason">
           <TextInput name="reason" placeholder="Reason" />
          </FormField>    
          
          <Button primary label="Apply Leave"  type="submit" onClick={() => console.log(value)} />
              
              </Form>
          
        </Layer>
      )}
    </Box>      
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          start:"prev,next",
          center:"title",
          end:""
        }}
        // weekends={false} 
        events={[...disp]}            
      />
    </Grommet>
  )
}
