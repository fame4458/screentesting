import React from 'react'

export default function Question3() {
    const findUniq = (arr) => {
        return arr.filter((value, index, array) => {
            return array.indexOf(value) === index;
        }) //this function can get uniq but not onlyone uniq
    }

    return (
        <div>
            <h3>findUniq([1, 1, 1, 2, 1, 1]) returns {findUniq([1, 1, 1, 2, 1, 1])}</h3>
            <h3>findUniq([0, 0, 0.55, 0, 0]) returns {findUniq([0, 0, 0.55, 0, 0])}</h3>
        </div>
    )
}
