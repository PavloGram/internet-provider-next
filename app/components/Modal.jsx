"use client";
import React, { useEffect, useState } from "react";
import closeIcon from "../../public/svg/closeIcon.svg?url";
import Image from "next/image";
import { useLang, useLangPack, useModal } from "@/store";
// import SuccessMsg from "../ui/SuccessMsg";
// import ErrorMsg from "../ui/ErrorMsg";
import FormLoader from "../ui/FormLoader";
import { usaState } from "../lib/state";
import { usePathname } from "next/navigation";

function Modal() {
  const [name, setName] = useState("");
  const [stateLang, setStateLang] = useState("");
  const [stateList, setStateList] = useState(usaState);
  const [state, setState] = useState("");
  const [tariff, setTariff] = useState([]);
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [isActLoader, setIsActLoader] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const lang = useLang();
  const currentLang = lang.currentLang;
  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;

  const path = usePathname();

  useEffect(() => {
    if (currentLang === "en") {
      setStateLang("el.engName");
      return langPack.changeLangToEn();
    }
    if (currentLang === "ua") {
      setStateLang("uaName");
      return langPack.changeLangToUa();
    }
    if (currentLang === "ru") {
      setStateLang("ruName");
      return langPack.changeLangToRu();
    }
  }, [currentLangPack, currentLang]);

  const modal = useModal();

  useEffect(() => {
    if (currentLang === "en") {
      return setStateList(
        usaState.sort((a, b) => a.engName.localeCompare(b.engName))
      );
    } else {
      setStateList(usaState.sort((a, b) => a.uaName.localeCompare(b.uaName)));
    }
  }, []);

  function succesMsgToogle() {
    setSuccessMsg(false);
  }
  function errorMsgToogle() {
    setSuccessMsg(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      tel,
      message,
    };
    console.log(data);
    setIsActLoader(true);
    setName("");
    setTel("");
    setMessage("");
  };

  useEffect(() => {
    if (path === "/internet") {
      return setTariff(currentLangPack.internetPack);
    }
    if (path === "/film&tv") {
      return setTariff(currentLangPack.TvPack);
    }
    if (path === "/web") {
      return setTariff(currentLangPack.securetyPack);
    }
  }, [currentLangPack, currentLang]);

  return (
    <section>
      <div
        className={` ${
          modal.isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed z-[1000] top-0 left-0 w-full h-full bg-black/[0.5] flex justify-center items-center  md:items-start xl:items-center overflow-y-auto transition-opacity duration-300`}
        onClick={() => modal.close()}
      >
        <div
          className={`${
            modal.isOpen ? "block" : "hidden"
          } relative mt-2  py-10 px-9 bg-white pointer-events-auto min-w-[260px]  max-w-[450px] rounded-md overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-0 right-0 w-9 h-9 bg-[#079fd1]"
            onClick={() => modal.close()}
          >
            <Image src={closeIcon} alt="icon" />
          </button>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
            <input
              value={name}
              name="name"
              type="text"
              className="leading-6 py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
              placeholder={currentLangPack.formText.name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <select
              name="location"
              className=" py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
            >
              <option>{currentLangPack.formText.state}</option>
              {stateList.map((el) => {
                return (
                  <option key={el.id} value={el.engName}>
                    {currentLang === "en" ? el.engName : el.ruName}
                  </option>
                );
              })}
            </select>

            <select
              name="price"
              className="py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
            >
              <option>{currentLangPack.formText.terrif}</option>
              {tariff?.map((el) => {
                return (
                  <option key={el.id} value={el.tarrifName}>
                    {el.tarrifName}
                  </option>
                );
              })}
            </select>
            <input
              value={tel}
              type="tel"
              className="py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
              placeholder={currentLangPack.formText.telNumber}
              onChange={(e) => setTel(e.target.value)}
            ></input>
            <textarea
              value={message}
              cols={40}
              rows={6}
              className="py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
              placeholder={currentLangPack.formText.address}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className=" py-[6px] px-3 mx-auto bg-[#079fd1] rounded text-[17px] text-white"
            >
              {currentLangPack.formText.sendApp}
            </button>
          </form>
        </div>

        {isActLoader && <FormLoader />}
        {/* {successMsg && <SuccessMsg />}
        {errorMsg && <ErrorMsg />} */}
      </div>
    </section>
  );
}

export default Modal;
