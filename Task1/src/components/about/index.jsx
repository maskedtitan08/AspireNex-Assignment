import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Dedicated and passionate learner, I am a Computer Science and Engineering student at The LNM Institute of Information Technology,
            set to graduate in 2025. With strong expertise in frontend development and problem-solving, I have successfully built dynamic web
            applications using React.js, Node.js, and various APIs. My standout projects, such as Job Junction, Gym Guru, and Summari Ease,
            highlight my capability to develop innovative and user-centric solutions.In addition to my frontend skills, I am a proficient
            full-stack blockchain developer with experience in Solidity, having worked on several blockchain projects. Over the past two years,
            I have solved over 500+ DSA problems, significantly enhancing my problem-solving abilities.Beyond my technical skills,
            I have demonstrated leadership and collaboration in roles such as Volleyball Club Coordinator and member of the Event Management Team
            for Desportivos.
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=maskedtitan08&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Github Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=maskedtitan08&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Github stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=cpp,c,appwrite,css,git,github,graphql,html,solidity,ipfs,js,mongodb,mysql,postman,netlify,nextjs,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,vscode`}
            alt="Shreshtha's Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=maskedtitan08&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Github stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;