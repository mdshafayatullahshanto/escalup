// /src/components/WorldClock.jsx
// Live World Clock widget displaying real-time hours across global hubs and Dhaka headquarters

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Globe2, CheckCircle2 } from 'lucide-react';

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
    <div className="bg-white dark:bg-[#121C2D] rounded-2xl border border-[#DBE3E0] dark:border-[#223249] p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[#DBE3E0] dark:border-[#223249] gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#2E756E]/10 dark:bg-[#162235] text-[#2E756E] dark:text-[#34A096] flex items-center justify-center">
            <Globe2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#14201D] dark:text-[#F1F5F9]">Global Time-Zone Coordination</h4>
            <p className="text-xs text-[#5A6A65] dark:text-[#94A3B8]">Real-time operational overlap with international engineering desks</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-[#2E756E] dark:text-[#34A096] bg-[#2E756E]/5 dark:bg-[#2E756E]/15 px-2.5 py-1 rounded-md border border-[#2E756E]/15 dark:border-[#2E756E]/30 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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
              className={`p-3.5 rounded-xl border transition-colors cursor-default ${
                hub.isHQ
                  ? 'bg-[#2E756E]/5 dark:bg-[#2E756E]/15 border-[#2E756E]/40 dark:border-[#2E756E]/50 ring-1 ring-[#2E756E]/20 shadow-sm'
                  : 'bg-[#F4F6F5]/60 dark:bg-[#162235] border-[#DBE3E0] dark:border-[#223249] hover:bg-white dark:hover:bg-[#1c2a3e] hover:border-[#2E756E]/30 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-[#14201D] dark:text-[#F1F5F9] flex items-center gap-1.5">
                  {hub.city}
                  {hub.isHQ && (
                    <span className="text-[10px] font-semibold bg-[#2E756E] text-white px-1.5 py-0.2 rounded">
                      HQ
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-mono text-[#5A6A65] dark:text-[#94A3B8]">{hub.offset}</span>
              </div>

              <div className="font-mono text-base font-bold text-[#14201D] dark:text-[#F1F5F9] tracking-tight mb-1">
                {formatHubTime(hub.timeZone)}
              </div>

              <div className="text-[11px] text-[#5A6A65] dark:text-[#94A3B8] flex items-center gap-1">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isWorkHours ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'
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

      <div className="mt-4 pt-3 border-t border-[#DBE3E0] dark:border-[#223249] flex flex-wrap items-center justify-between text-xs text-[#5A6A65] dark:text-[#94A3B8] gap-2">
        <span className="flex items-center gap-1.5">
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
