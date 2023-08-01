import { businessman } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

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

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={businessman} alt="business" className="w-[35rem]" />
      
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo} cursor-default`}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> money
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      FiDeus: Simplify Money Control! With FiDeus program, effortlessly manage your finances. Track expenses, set budgets, and analyze spending patterns. Achieve financial goals with ease. Take charge of your money, stay organized, and secure your future!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button />
      </div>
    </div>
  </section>
);

export default Billing;