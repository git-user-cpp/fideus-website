import { graphics } from "../assets";
import styles, { layout } from "../style";
import GetStarted from "./GetStarted";
/*
Copyright 2023 Andrew Kushyk

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

const JoinTeam = () => (
  <section className={`${layout.section} cursor-default`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Join the development <br className="sm:block hidden" /> team in a few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Become part of a highly motivated team of a free and open source project. Modern technology stack, interesting development process and useful experience are waiting for you!
      </p>
      <div className="mt-10">
        <GetStarted  />
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={graphics} alt="team graphics" className="w-[35rem] rounded-[2rem]" />
    </div>
  </section>
);

export default JoinTeam;