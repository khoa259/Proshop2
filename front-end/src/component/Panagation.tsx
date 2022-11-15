import { useNavigate } from "react-router-dom"
import React from 'react'

export const Pagination = ({totalPages, page}) => {
    const newArr = [...Array(totalPages)].map((_, index) => index + 1)
    const navigate = useNavigate()
    const isActive = (index:any) => {
        if(index === page) return "active"
        return ""
    }

    const prev = () => {
    const newPage = Math.max(page - 1, 1)
    navigate(`?page=${newPage}`)
    }

    const next = () => {
    const newPage = Math.min(page + 1, totalPages)
    navigate(`?page=${newPage}`)
    }

    const jump = (num:any) => {
        navigate(`?&page=${num}`)
    }
    return (
        <div>
            <button className="round pre" onClick={prev}></button>

            {newArr.map(num => (
                <>
                {console.log(num)}
                    <a key={num} className={`${isActive(num)}`}
                    onClick={() => jump(num)}>{num}</a>
                </>
            ))}

            <button  className="round next" onClick={next}></button>
        </div>
    )
}
