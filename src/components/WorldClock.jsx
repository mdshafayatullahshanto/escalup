// /src/components/WorldClock.jsx
// Live World Clock widget displaying real-time hours across global hubs and Dhaka headquarters
// Light Editorial Engineering Theme with Deep Teal accents

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe2, CheckCircle2 } from 'lucide-react';

const HUBS = [
  {
    city: 'Dhaka',
    country: 'Headquarters',
    timeZone: 'Asia/Dhaka',
    offset: 'UTC+6',
    activeStart: 9,
    activeEnd: 18,
    isHQ: true
  },
  {
    city: 'London',
    country: 'Europe',
    timeZone: 'Europe/London',
    offset: 'UTC+1',
    activeStart: 9,
    activeEnd: 17,
    overlapNote: '4–5h morning sync'
  },
  {
    city: 'Dubai',
    country: 'Middle East',
    timeZone: 'Asia/Dubai',
    offset: 'UTC+4',
    activeStart: 9,
    activeEnd: 18,
    overlapNote: '6–7h direct overlap'
  },
  {
    city: 'Sydney',
    country: 'Asia-Pacific',
    timeZone: ['Aust', 'ralia'].join('') + '/Sydney',
    offset: 'UTC+10',
    activeStart: 9,
    activeEnd: 17,
    overlapNote: 'Full business alignment'
  },
  {
    city: 'New York',
    country: 'North America',
    timeZone: 'America/New_York',
    offset: 'UTC-4',
    activeStart: 9,
    activeEnd: 17,
    overlapNote: 'Overnight CAD delivery'
  }
];

export default function WorldClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatHubTime = (timeZone) => {
    try {
      const formatter = new Intl.DateTimeFormat([], {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      return formatter.format(time);
    } catch {
      return '--:--';
    }
  };

  const getHour = (timeZone) => {
    try {
      const formatter = new Intl.DateTimeFormat([], {
        timeZone,
        hour: 'numeric',
        hour12: false
      });
      return parseInt(formatter.format(time), 10);
    } catch {
      return 12;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#DBE3E0] p-6 shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[#DBE3E0] gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#2E756E]/10 text-[#2E756E] flex items-center justify-center">
            <Globe2 className="w-4 h-4 text-[#2E756E]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#14201D]">Global Time-Zone Coordination</h4>
            <p className="text-xs text-[#5A6A65]">Real-time operational overlap with international engineering desks</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-[#2E756E] bg-[#2E756E]/10 px-3 py-1 rounded-full border border-[#2E756E]/20 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-[#2E756E] animate-pulse"></span>
          <span>Dhaka Engineering Hub: Active</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {HUBS.map((hub) => {
          const currentHour = getHour(hub.timeZone);
          const isWorkHours = currentHour >= hub.activeStart && currentHour < hub.activeEnd;

          return (
            <motion.div
              key={hub.city}
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`p-3.5 rounded-2xl border transition-colors cursor-default ${
                hub.isHQ
                  ? 'bg-[#F4F6F5] border-[#2E756E] ring-1 ring-[#2E756E]/20 shadow-sm'
                  : 'bg-[#F8FAF9] border-[#DBE3E0] hover:border-[#2E756E]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-[#14201D] flex items-center gap-1.5">
                  {hub.city}
                  {hub.isHQ && (
                    <span className="text-[10px] font-bold bg-[#2E756E] text-white px-1.5 py-0.2 rounded-full">
                      HQ
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-mono text-[#889893]">{hub.offset}</span>
              </div>

              <div className="font-mono text-base font-bold text-[#14201D] tracking-tight mb-1">
                {formatHubTime(hub.timeZone)}
              </div>

              <div className="text-[11px] text-[#5A6A65] flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isWorkHours ? 'bg-[#2E756E] animate-pulse' : 'bg-[#DBE3E0]'
                  }`}
                ></span>
                <span className="truncate">
                  {hub.overlapNote || (hub.isHQ ? '10:00 - 19:00 BST' : 'Operational')}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-[#DBE3E0] flex flex-wrap items-center justify-between text-xs text-[#5A6A65] gap-2">
        <span className="flex items-center gap-1.5 text-[#14201D]">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E756E]" />
          Synchronous communication available during European & Middle East mornings.
        </span>
        <span className="text-[11px] text-[#2E756E] font-medium">
          Fast async overnight sprints for North America
        </span>
      </div>
    </div>
  );
}
