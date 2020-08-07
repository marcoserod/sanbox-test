import React from "react";

/**
    A binary gap within a positive integer N is any maximal sequence of 
    consecutive zeros that is surrounded by ones at both ends in the 
    binary representation of N.

    For example:
    The number 9 has binary representation 1001 and contains a binary 
    gap of length 2. 
    The number 529 has binary representation 1000010001 and contains two 
    binary gaps: one of length 4 and one of length 3. 
    The number 20 has binary representation 10100 and contains one binary 
    gap of length 1. 
    The number 15 has binary representation 1111 and has no binary gaps. 
    The number 32 has binary representation 100000 and has no binary gaps.
*/

const binaryGap = decimalNumber => {
    return 0;
};

const Fail = () => <span style={{ color: "red", marginLeft: 10 }}>FAIL</span>;
const Pass = () => <span style={{ color: "green", marginLeft: 10 }}>PASS</span>;

export const TestBinaryGap = () => {
  return (
    <div>
      <ul>
        <li>529 {binaryGap(529) === 4 ? <Fail /> : <Pass />}</li>
        <li>32 {binaryGap(32) === 0 ? <Fail /> : <Pass />}</li>
        <li>15 {binaryGap(15) === 0 ? <Fail /> : <Pass />}</li>
        <li>9 {binaryGap(9) === 2 ? <Fail /> : <Pass />}</li>
        <li>20 {binaryGap(20) === 1 ? <Fail /> : <Pass />}</li>
      </ul>
    </div>
  );
};
