import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api/api'
import './List.css'
const List = ({titles,param}) => {
  const [list,setList]=useState([]);
  useEffect(()=>{
    fetchData(param).then( res => setList(res.data.results))
  },[]);
  console.log(list)
  return (
    <div>
      <div className='list'>
        <div  classname="row">
             <h2  classname="text-white tilte">{titles}</h2>
             <div  classname="col">
                   <div  classname="row__posters">
                    {
                      list.map(item => <img className='row__poster row__posterLarge' 
                      src= {`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      alt={item.titles}
                      />)
                    }
        
                        

                        
                        



                    </div>

             </div>

      

        </div>

      </div>

    </div>
  )
}

export default List
