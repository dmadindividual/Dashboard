import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGrid from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import './Calendar.css'
import useCalendar from '../../store/Calendar'
import { createEventId } from '../../data/data'

const Calendar = () => {
  const {currentEvents, setCurrentEvents} = useCalendar()

  const handleEvents = async (events)=>{
    await Promise.resolve(setCurrentEvents(events))

  }

  const handleDateSelect = (selectInfo)=>{
    let title = prompt("Please enter the title of the event") 
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect()

    if(title){
      calendarApi.addEvent({
        id: createEventId(),
        title: title,
        start: selectInfo.start,
        end: selectInfo.endS,
        allDay: selectInfo.allDay,
      })
    }
     
  }



 
  return (
    <div className='container'>
        <div>
        <FullCalendar 
        plugins={[dayGrid, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
            left: 'prev, next today',
            center: "title",
            right: "dayGridMonth, timeGridWeek, timeGridDay"
        }}
        allDaySlot={false}
        initialView="timeGridWeek"
        slotDuration={"01:00:00"}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        nowIndicator={true}
        initialEvents={currentEvents}
        eventsSet={handleEvents}
        select={handleDateSelect}



        
        
        
        />
        </div>



x
    </div>
  )
}

export default Calendar