import {
    useState,
    useEffect
} from "react"
import http from "@/utils/http";
export function useProducts(url) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        ;
        (async () => {
            try {
                const {
                    data
                } = await http(url)
                setProducts(data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return [products, setProducts]
}