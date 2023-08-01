import styles from "../style";
import GetStarted from './GetStarted'

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

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow cursor-default`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's try our product now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Download and try our product right now! Join our development team and work with the latest tools!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <GetStarted />
    </div>
  </section>
);

export default CTA;