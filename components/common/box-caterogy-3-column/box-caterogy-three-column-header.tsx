import React from 'react'
interface BoxCaterogyThreeColumnHeaderProps{
    item:{title:string}[];
    className?:string ;
}

const BoxCaterogyThreeColumnHeader:React.FC<BoxCaterogyThreeColumnHeaderProps> = ({className='',item}) => {
  return (
    <div className={`clstabcolumnheader  ${className}`}>
        <ul className='clstabcolumnheader-content'>
            {item?.map((item)=> <li className='clstabcolumnheader-item' key={item.title}> {item.title}</li>) }
        </ul>
    </div>
  )
}

export default BoxCaterogyThreeColumnHeader