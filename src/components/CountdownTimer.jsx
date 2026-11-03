import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell, Share2 } from 'lucide-react';

export default function CountdownTimer() {
  // Wedding Muhurtham: May 17, 2026, 09:45:00 IST
  const targetDate = new Date('2026-05-17T09:45:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Google Calendar Link generator
  const createGoogleCalendarLink = () => {
    const title = encodeURIComponent("Abhin Rag weds Arathi | Traditional Kerala Hindu Wedding");
    const details = encodeURIComponent(
      "Auspicious Muhurtham: 09:45 AM - 10:30 AM (Chithira Nakshatram). Followed by Royal Kerala Kalyana Sadya.\n\nFamilies: Raghuraman & Mini (Kozhikode) and Dr. Somanathan & Radhika (Ernakulam).\n\nVenue: Gokulam Convention Centre, Kaloor, Kochi, Kerala."
    );
    const location = encodeURIComponent("Gokulam Convention Centre, Kaloor, Kochi, Kerala 682017");
    // ISO format YYYYMMDDTHHMMSSZ: May 17, 2026 09:45 IST is 04:15 UTC
    const dates = "20260517T041500Z/20260517T093000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Apple / Outlook .ics download
  const downloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Abhin and Arathi Wedding//Kerala Wedding//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Abhin Rag weds Arathi - Kerala Hindu Wedding
DESCRIPTION:Auspicious Muhurtham 09:45 AM - 10:30 AM followed by traditional 28-course Kerala Sadya.
LOCATION:Gokulam Convention Centre, Kaloor, Kochi, Kerala
DTSTART:20260517T041500Z
DTEND:20260517T093000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Abhin_weds_Arathi_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timeCards = [
    { label: 'Days', malayalam: 'ദിവസങ്ങൾ', value: timeLeft.days },
    { label: 'Hours', malayalam: 'മണിക്കൂറുകൾ', value: timeLeft.hours },
    { label: 'Minutes', malayalam: 'മിനിറ്റുകൾ', value: timeLeft.minutes },
    { label: 'Seconds', malayalam: 'സെക്കന്റുകൾ', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-[#FFFDF8] to-[#FAF3E0] rounded-3xl p-6 sm:p-10 border border-amber-300/70 shadow-xl text-center kasavu-border kasavu-border-bottom">
          <div className="inline-flex items-center gap-2 text-amber-800 font-serif text-xs uppercase tracking-widest mb-2 font-semibold">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Counting Down to the Muhurtham</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950 mb-2">
            The Sacred Hour Approaches
          </h2>
          <p className="text-sm font-malayalam text-amber-800 mb-8">
            മുഹൂർത്തത്തിലേക്ക് ഇനി ഏതാനും നിമിഷങ്ങൾ മാത്രം
          </p>

          {/* 3D Countdown Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8">
            {timeCards.map((item, index) => (
              <div
                key={index}
                className="relative group perspective-1000"
              >
                <div className="relative bg-gradient-to-b from-[#FFF] to-[#FDF7E7] rounded-2xl p-4 sm:p-5 border-2 border-amber-300 shadow-md group-hover:shadow-xl group-hover:border-amber-500 transition-all duration-300 transform group-hover:-translate-y-1">
                  {/* Decorative corner dots */}
                  <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />

                  <span className="block text-3xl sm:text-4xl md:text-5xl font-serif font-black text-amber-900 tracking-tight">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="block text-xs uppercase tracking-widest text-amber-800 font-semibold mt-1">
                    {item.label}
                  </span>
                  <span className="block text-[10px] text-amber-600/80 font-malayalam">
                    {item.malayalam}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={createGoogleCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-800 text-amber-50 text-xs sm:text-sm font-serif font-semibold tracking-wider hover:bg-amber-900 transition-colors shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={downloadIcs}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100/90 text-amber-900 text-xs sm:text-sm font-serif font-semibold tracking-wider hover:bg-amber-200 transition-colors border border-amber-300 shadow-sm"
            >
              <Bell className="w-4 h-4 text-amber-700" />
              <span>Download iCal (.ics)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
