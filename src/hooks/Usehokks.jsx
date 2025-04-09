// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query"
import UseAxiosPublic from "./UseAxiosPublic"

const useMenu=()=>{
const axiosPublic=UseAxiosPublic()
  const {data:menu =[],isPending:loading,refetch } = useQuery({
    queryKey: ['menu'],
    queryFn:async () =>{
      const res= await axiosPublic.get('/menu')
      return res.data;
    }
 
     
  })
  return [menu,loading,refetch]







  // const [menu, setMenu] = useState([]);
  // const [loading,setloading]=useState(true)
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //      setMenu(data)
  //      setloading(false)
  //     });
  // }, []);
  // return [menu,loading]
}
export default useMenu