import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (initialValue) => {
    const [darkStatus, setDarkStatus] = useLocalStorage("darkmode", initialValue);
    const updateDarkMode = (value) => {
        setDarkStatus(value);
    }
    useEffect(() => {
        if (darkStatus){
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    },[darkStatus])
    return [darkStatus, updateDarkMode];
}