import React from 'react'

export default function Input({defaultFieldData,currentFormData,handleInputChange,fieldName,inputStateClasses}) {
  return (
    <div className="flex flex-col w-1/3">
        <label className="pb-2 font-medium ml-1">{defaultFieldData.label}:</label>
        <input
            type="text"
            placeholder={defaultFieldData.label}
            className={`input-field mr-10 ${inputStateClasses}`}
            onChange={(event) => handleInputChange(fieldName,event.target.value,'value')}
            onFocus={() => handleInputChange(fieldName,true,'focused')}
            onBlur={() => handleInputChange(fieldName,false,'focused')}
        />
        <p className=
            {`text-danger mt-2 tex-sm h-12 italic`}>{currentFormData.fields[fieldName].currentErrors.map((error)=>{
                return (
                    <div className="relative overflow-hidden">{error}</div>
                )
            })}
        </p>
    </div>
  )
}
