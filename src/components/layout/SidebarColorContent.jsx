/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarColorContent = ({ dropDown, dropTitle, data }) => {
  // eslint-disable-next-line no-unused-vars
  let [dropDownShow, setDropDownShow] = useState(dropDown);
  let [show, setShow] = useState(false);
  return (
    <div className="mb-10">
      {dropDownShow ? (
        <div
          onClick={() => setShow(!show)}
          className=" mb-9 cursor-pointer flex justify-between items-center "
        >
          <h3 className=" cursor-pointer font-dm text-xl font-bold text-primaryColor">
            {dropTitle}
          </h3>
          <IoMdArrowDropdown />
        </div>
      ) : (
        <h3 className="mb-9 cursor-pointer font-dm text-xl font-bold text-primaryColor">
          {dropTitle}
        </h3>
      )}

      {show && (
        <>
          {data.map((item, i) => (
            <LeftSidebarItem key={i} subDropDown={false} title={item.code
            }
            color={item.code}>
            </LeftSidebarItem>
          ))}
          </>
      )}

      {!dropDownShow && (
        <>
          {data.map((item, i) => (
            <LeftSidebarItem key={i} subDropDown={false} title={item.code}
            color={item.code}>
            
            </LeftSidebarItem>
          ))}

       
        </>
      )}
    </div>
  );
};

export default SidebarColorContent;
