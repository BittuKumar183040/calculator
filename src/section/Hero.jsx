import React, { useEffect, useRef, useState } from 'react';
import { IoBackspaceOutline } from 'react-icons/io5';
import { FiPercent } from 'react-icons/fi';
import { LuDivide } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { CgMathMinus, CgMathPlus, CgMathEqual } from 'react-icons/cg';

const commonStyle =
  ' active:scale-95 transition rounded-xl shadow-md flex justify-center items-center text-2xl opacity-90 w-40 h-28 md:h-20 ';
const styleFnbtn =
  commonStyle +
  ' relative bg-white text-red-400 dark:bg-gray-700 dark:text-red-300';
const styleFnbtn2 = commonStyle + ' bg-red-400 text-white ';
const styleNumber =
  commonStyle + ' bg-white text-black dark:bg-gray-700 dark:text-white ';

const Button = ({ name, style, label, desc = '', handleClick }) => {
  return (
    <button onClick={handleClick} name={name} className={style}>
      {label}
      <p className=" absolute left-0 top-0 text-xs p-1 px-2 opacity-75 pointer-events-none">
        {desc}
      </p>
    </button>
  );
};

const Hero = () => {
  const [calc, setCalc] = useState([]);
  const [result, setResult] = useState('');
  const history = useRef('');
  const calcRef = useRef([]);
  const resultRef = useRef('');

  const addHistory = (text, result) => {
    let element = history.current;
    let p = document.createElement('p');
    p.innerText = text + ' = ';
    let span = document.createElement('span');
    span.innerText = result;
    p.appendChild(span);
    element.appendChild(p);
  };

  const replaceWithValue = (array, from, to) => {
    const modifiedArray = array.map((num) => (num === from ? to : num));
    return modifiedArray;
  };

  const handleClick = (e) => {
    handleCalculation(e.target.name)
  }

  const handleCalculation = (input) => {
    if (resultRef.current === '') {
      setResult('');
    }
    if (input === 'Delete') {
      calcRef.current = [];
      resultRef.current = '';
    } else if (input === 'Backspace') {
      calcRef.current.pop();
    } else if (input === 'Enter') {
      try {
        if (calcRef.current.length === 0) {
          return;
        }

        const operations = replaceWithValue(calcRef.current, '%', '*1/100');

        resultRef.current = eval(operations.join(''));

        setResult(resultRef.current);
        addHistory(calcRef.current.join(''), resultRef.current);
        resultRef.current = '';
      } catch (e) {
        setResult('#ERROR#');
        console.log('error : ', e);
        resultRef.current = 'Error';
      }
    } else {
      if (
        calcRef.current[calcRef.current.length - 1] === '%' &&
        !isNaN(input)
      ) {
        calcRef.current.push('*', input);
      } else {
        calcRef.current.push(input);
      }
    }
    setCalc([...calcRef.current]);
  };

  useEffect(() => {
    const listener = document.addEventListener('keydown', (e) => {
      e.preventDefault()
      const allowedKeys = /^[0-9=+\-.\%\/\*]$/;

      if (e.key === "Backspace" || e.key === "Delete" || e.key === "Enter" || allowedKeys.test(e.key)) {
        handleCalculation(e.key)

      } else {
        console.log('Disallowed key:', e.key);
      }
    });
    return () => document.removeEventListener("keydown", listener);
  }, [])

  return (
    <section className="h-dvh bg-gray-200 dark:bg-gray-800 p-5">
      <div className=" dark:text-white mb-10 h-full flex flex-col justify-between w-full md:w-96 md:m-auto ">
        <div
          id="result_container"
          className="flex-1 flex flex-col gap-2 justify-end items-end w-full"
        >
          <div
            ref={history}
            className="text-sm opacity-60 w-96 leading-5 tracking-wide dark:border-[#fff3] text-right
              flex items-end flex-col absolute mb-28 pb-3 border-b-2 border-[#0003] 
              md:bottom-0 md:right-10 md:border-none"
          ></div>
          <div className=" relative flex flex-col justify-end items-end w-full">
            <input
              type="text"
              value={result}
              className="text-5xl w-full outline-none bg-transparent text-right"
              disabled
            />
            <div className="opacity-70 flex items-center justify-end ">
              <p className="text-2xl mr-1">{calc.join('')}</p>
            </div>
            <div className="h-7 w-0.5 absolute bottom-0.5 right-0.5 overflow-hidden rounded-md">
              <div className=" h-full bg-black dark:bg-white animate-ping"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3">
          <div className="flex gap-4 mb-1 justify-between">
            <Button
              name={'Delete'}
              style={styleFnbtn}
              label={'AC'}
              desc="clear"
              handleClick={handleClick}
            />
            <Button
              name={'Backspace'}
              style={styleFnbtn}
              label={
                <IoBackspaceOutline
                  size={35}
                  className="opacity-90 pointer-events-none"
                />
              }
              desc="backspace"
              handleClick={handleClick}
            />
            <Button
              name={'%'}
              style={styleFnbtn}
              label={<FiPercent className=" pointer-events-none" />}
              desc="percentage"
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
              name={'Enter'}
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
