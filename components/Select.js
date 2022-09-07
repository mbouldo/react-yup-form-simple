import React from 'react'

export default function Select({options}) {
  return (
    <div class="inline-block relative w-full pr-10">
            <select class=" duration-75 cursor-pointer py-2 h-10 transition ease-in-out block appearance-none w-full   outline-0 caret-white focus:border-gray-500 input-field leading-tight focus:outline-none focus:shadow-outline">
            {
                Object.keys(options).map(function(keyName, keyIndex) {
                    return (
                        <option>{options[keyName].displayValue}</option>
                    )
                })
            }
            </select>

    </div>
  )
}
