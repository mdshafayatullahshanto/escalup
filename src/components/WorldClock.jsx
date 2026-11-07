// /src/components/WorldClock.jsx
// Live World Clock widget displaying real-time hours across global hubs and Dhaka headquarters
// Unified design system: Clean Inter sans font, indigo accents, zero green, zero monospace.

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
      return '--:--:--';
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
    <div className="bg-white dark:bg-[#11161F] rounded-3xl p-6 sm:p-8 border border-[#E2E6EE] dark:border-white/10 shadow-card font-sans">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2E6EE] dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#5846F6]/10 text-[#5846F6] flex items-center justify-center">
            <Globe2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#111827] dark:text-white">Global Time-Zone Coordination</h4>
            <p className="text-xs text-[#5A6679] dark:text-[#9BA8BA]">Real-time operational overlap with international engineering desks</p>
          </div>
        </div>
        <div className="text-xs font-medium text-[#5846F6] dark:text-[#A5B4FC] bg-[#5846F6]/10 px-3 py-1 rounded-full">
          Dhaka Engineering Hub: Active
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {HUBS.map((hub) => {
          const currentHour = getHour(hub.timeZone);
          const isWorkHours = currentHour >= hub.activeStart && currentHour < hub.activeEnd;

          return (
            <motion.div
              key={hub.city}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`p-3.5 rounded-2xl border transition-colors cursor-default ${
                hub.isHQ
                  ? 'bg-[#F6F7FC] dark:bg-[#151D26] border-[#5846F6]/30 shadow-xs'
                  : 'bg-white dark:bg-[#11161F] border-[#E2E6EE] dark:border-white/10 hover:border-[#5846F6]/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#111827] dark:text-white flex items-center gap-1.5">
                  {hub.city}
                  {hub.isHQ && (
                    <span className="text-[10px] font-bold bg-[#5846F6] text-white px-1.5 py-0.2 rounded-full">
                      HQ
                    </span>
                  )}
                </span>
                <span className="text-[10px] text-[#8E9BAE]">{hub.offset}</span>
              </div>

              <div className="text-base font-semibold text-[#111827] dark:text-white tracking-tight mb-1">
                {formatHubTime(hub.timeZone)}
              </div>

              <div className="text-[11px] text-[#5A6679] dark:text-[#9BA8BA] flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isWorkHours ? 'bg-[#5846F6]' : 'bg-[#D8DFEB]'
                  }`}
                />
                <span className="truncate">
                  {hub.overlapNote || (hub.isHQ ? '10:00 - 19:00 BST' : 'Operational')}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-[#E2E6EE] dark:border-white/10 flex flex-wrap items-center justify-between text-xs text-[#5A6679] dark:text-[#9BA8BA] gap-2">
        <span className="flex items-center gap-1.5 text-[#111827] dark:text-white">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#5846F6]" />
          Synchronous communication available during European & Middle East mornings.
        </span>
        <span className="text-[11px] text-[#5846F6] font-medium">
          Fast async overnight sprints for North America
        </span>
      </div>
    </div>
  );
}
