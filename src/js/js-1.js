import React from "react";
/**
  Examples:
  1 => -1   Any box can't be completed
  3 =>  1   one box of tree items can be completed
  5 =>  1   one box of five items can be  completed
  11 => 1   a box of five items and a two boxes of three can be completed 
   (1 * 5 + 2 * 3 = 11)

 */

const canBeGroup = (qty) => {
  return;
};

const Fail = () => <span style={{ color: "red", marginLeft: 10 }}>FAIL</span>;
const Pass = () => <span style={{ color: "green", marginLeft: 10 }}>PASS</span>;

export const Test = () => {
  return (
    <div>
      <ul>
        <li>
          1{" "}
          {canBeGroup(1) === 1 || canBeGroup(1) === undefined ? (
            <Fail />
          ) : (
            <Pass />
          )}
        </li>
        <li>
          3{" "}
          {canBeGroup(3) === -1 || canBeGroup(3) === undefined ? (
            <Fail />
          ) : (
            <Pass />
          )}
        </li>
        <li>
          5{" "}
          {canBeGroup(5) === -1 || canBeGroup(5) === undefined ? (
            <Fail />
          ) : (
            <Pass />
          )}
        </li>
        <li>
          7{" "}
          {canBeGroup(7) === 1 || canBeGroup(7) === undefined ? (
            <Fail />
          ) : (
            <Pass />
          )}
        </li>
        <li>
          11{" "}
          {canBeGroup(11) === -1 || canBeGroup(11) === undefined ? (
            <Fail />
          ) : (
            <Pass />
          )}
        </li>
        <li>
          17{" "}
          {canBeGroup(17) === -1 || canBeGroup(17) === undefined ? (
            <Fail />
          ) : (
            <Pass />
          )}
        </li>
      </ul>
    </div>
  );
};
