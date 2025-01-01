import React, { useRef } from 'react';
import { IoBackspaceOutline } from 'react-icons/io5';
import { FiPercent } from 'react-icons/fi';
import { LuDivide } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { CgMathMinus, CgMathPlus, CgMathEqual } from 'react-icons/cg';

const commonStyle =
  ' active:scale-95 transition rounded-xl shadow-md flex justify-center items-center text-2xl opacity-90 w-40 h-28 md:h-20 ';
const styleFnbtn =
  commonStyle + ' bg-white text-red-400 dark:bg-gray-700 dark:text-red-300';
const styleFnbtn2 = commonStyle + ' bg-red-400 text-white ';
const styleNumber =
  commonStyle + ' bg-white text-black dark:bg-gray-700 dark:text-white ';

const Button = ({ name, style, label, handleClick }) => {
  return (
    <button onClick={handleClick} name={name} className={style}>
      {label}
    </button>
  );
};

const Hero = () => {
  const calcRef = useRef([]);
  const resultRef = useRef('');

  const handleClick = (e) => {
    const input = e.target.name;
    console.log(e.target);
    if (input === 'AC') {
      calcRef.current = [];
      resultRef.current = '';
    } else if (input === '<') {
      calcRef.current.pop();
    } else if (input === '=') {
      try {
        resultRef.current = eval(calcRef.current.join(''));
      } catch {
        resultRef.current = 'Error';
      }
    } else {
      console.log(input);
      calcRef.current.push(input);
    }

    console.log(calcRef.current, resultRef.current);

    // Manually trigger
  };

  return (
    <section className="h-dvh bg-gray-200 dark:bg-gray-800 p-5">
      <div className=" dark:text-white mb-10 h-full flex flex-col justify-between w-full md:w-96 md:m-auto ">
        <div
          id="result_container"
          className="flex-1 flex flex-col gap-2 justify-end items-end"
        >
          <p className="text-md opacity-60">
            {/* {number1}*{number2} = {number1 * number2} */}
          </p>
          <div className=" text-right">
            <p className="text-2xl opacity-70">{/* {number1}*{number2} */}</p>
            {/* <p className="text-4xl">{number1 * number2}</p> */}
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3">
          <div className="flex gap-4 mb-1 justify-between">
            <Button
              name={'AC'}
              style={styleFnbtn}
              label={'AC'}
              handleClick={handleClick}
            />
            <Button
              name={'<'}
              style={styleFnbtn}
              label={
                <IoBackspaceOutline
                  size={35}
                  className="opacity-90 pointer-events-none"
                />
              }
              handleClick={handleClick}
            />
            <Button
              name={'%'}
              style={styleFnbtn}
              label={<FiPercent className=" pointer-events-none" />}
              handleClick={handleClick}
            />
            <Button
              name={'/'}
              style={styleFnbtn}
              label={<LuDivide className=" pointer-events-none" />}
              handleClick={handleClick}
            />
          </div>
          <div className="flex gap-4 mb-1 justify-between">
            <Button
              name={'1'}
              style={styleNumber}
              label={1}
              handleClick={handleClick}
            />
            <Button
              name={'2'}
              style={styleNumber}
              label={2}
              handleClick={handleClick}
            />
            <Button
              name={'3'}
              style={styleNumber}
              label={3}
              handleClick={handleClick}
            />
            <Button
              name={'*'}
              style={styleFnbtn}
              label={<RxCross2 className=" pointer-events-none" />}
              handleClick={handleClick}
            />
          </div>
          <div className="flex gap-4 mb-1 justify-between">
            <Button
              name={'3'}
              style={styleNumber}
              label={3}
              handleClick={handleClick}
            />
            <Button
              name={'4'}
              style={styleNumber}
              label={4}
              handleClick={handleClick}
            />
            <Button
              name={'5'}
              style={styleNumber}
              label={5}
              handleClick={handleClick}
            />
            <Button
              name={'-'}
              style={styleFnbtn}
              label={<CgMathMinus className=" pointer-events-none" />}
              handleClick={handleClick}
            />
          </div>
          <div className="flex gap-4 mb-1 justify-between">
            <Button
              name={'7'}
              style={styleNumber}
              label={7}
              handleClick={handleClick}
            />
            <Button
              name={'8'}
              style={styleNumber}
              label={8}
              handleClick={handleClick}
            />
            <Button
              name={'9'}
              style={styleNumber}
              label={9}
              handleClick={handleClick}
            />
            <Button
              name={'+'}
              style={styleFnbtn}
              label={<CgMathPlus className=" pointer-events-none" />}
              handleClick={handleClick}
            />
          </div>
          <div className="flex gap-4 mb-1 justify-between">
            <Button
              name={'00'}
              style={styleNumber}
              label={'00'}
              handleClick={handleClick}
            />
            <Button
              name={'0'}
              style={styleNumber}
              label={'0'}
              handleClick={handleClick}
            />
            <Button
              name={'.'}
              style={styleNumber}
              label={'.'}
              handleClick={handleClick}
            />
            <Button
              name={'='}
              style={styleFnbtn2}
              label={<CgMathEqual className=" pointer-events-none" />}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
