import React from 'react';
import TopNav from '../general-components/TopNav';
import SideNavigation from '../general-components/SideNavigation';
import BottomNavigation from '../general-components/BottomNavigation';
import ClassroomCard from './ClassroomCard';

function Classroom() {
  return (
    <main className="flex flex-col md:flex-row">
      <TopNav title="CLASSROOMS" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
        {/* MID SECTION FOR DESKTOP */}
        <section>
          <div>Hello</div>
        </section>
      </div>

      {/* MID SECTION FOR MOBILE */}
      <section className="font-['poppins'] flex justify-center items-center md:hidden ">
        <div className="flex flex-col justify-center p-6 my-8 bg-[#0079BC]  rounded-[20px] w-[80%] gap-8">
          <button type="button" className="bg-[#FFC100] px-4 py-6 rounded-[20px] text-[18px] border-[1px] border-black flex justify-center items-center mt-4 w-full ">NEW CLASSROOM +</button>
          <div className="flex flex-col justify-center gap-2 ">
            <div className="  rounded-[20px] text-[16px] text-[#fff] ">CURRENT CLASSROOMS</div>
            <div className="max-h-[50%] overflow-hidden flex flex-col gap-2">
              <ClassroomCard subject="DBMS" days="MON-FRI" time="9AM" />
              <ClassroomCard subject="DATA MINING" days="WED-SAT" time="12PM" />
              <ClassroomCard subject="SOFT COMPUTING" days="FRI" time="2PM" />
            </div>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
}

export default Classroom;