// /src/components/WorldClock.jsx
// Live World Clock widget displaying real-time hours across global hubs and Dhaka headquarters

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
    timeZone: 'Australia/Sydney',
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
  const [time, setTime] = useState(new Date());

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
    <div className="bg-[#001517] rounded-3xl border border-white/[0.08] p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#14F3C1]/10 text-[#14F3C1] flex items-center justify-center">
            <Globe2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Global Time-Zone Coordination</h4>
            <p className="text-xs text-white/60">Real-time operational overlap with international engineering desks</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-[#14F3C1] bg-[#14F3C1]/10 px-3 py-1 rounded-full border border-[#14F3C1]/20 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-[#14F3C1] animate-pulse"></span>
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
                  ? 'bg-[#012B30] border-[#14F3C1]/40 ring-1 ring-[#14F3C1]/20 shadow-md'
                  : 'bg-[#000D0E]/80 border-white/10 hover:border-[#14F3C1]/30 hover:bg-[#000D0E]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  {hub.city}
                  {hub.isHQ && (
                    <span className="text-[10px] font-bold bg-[#14F3C1] text-[#000D0E] px-1.5 py-0.2 rounded-full">
                      HQ
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-mono text-white/50">{hub.offset}</span>
              </div>

              <div className="font-mono text-base font-bold text-white tracking-tight mb-1">
                {formatHubTime(hub.timeZone)}
              </div>

              <div className="text-[11px] text-white/60 flex items-center gap-1">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isWorkHours ? 'bg-[#14F3C1] animate-pulse' : 'bg-white/30'
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

      <div className="mt-4 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-xs text-white/60 gap-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#14F3C1]" />
          Synchronous communication available during European & Middle East mornings.
        </span>
        <span className="text-[11px] text-[#14F3C1] font-medium">
          Fast async overnight sprints for North America
        </span>
      </div>
    </div>
  );
}
