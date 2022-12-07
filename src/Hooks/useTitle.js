import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Pro Lang`;
    }, [title])
};
export default useTitle;