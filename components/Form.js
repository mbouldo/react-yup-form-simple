import React from "react";
import { useState,useEffect } from "react";
import Select from "./Select";
import Input from "./Input";

//default form schema that will be rendered.
import defaultFormObject from '../helpers/formSchema';

export default function Form() {

    //Init state Hook for the form element across all of the inputs:
    const [currentFormData,setFormData] = useState(defaultFormObject);

    function handleInputChange(field,incomingInputValue,targetFieldKey){

        setFormData(currentFormData => ({
            ...currentFormData,
            fields:{
                ...currentFormData.fields,
                [field]:{
                    ...currentFormData.fields[field],
                    [targetFieldKey]:incomingInputValue
                }
            }
        }));

        var selectedField = currentFormData.fields[field];

        //First "touch" state defined. When a user clicks off a field for the first time a) validate it w/ current field's value, b) mark is as touched.
        if(targetFieldKey=='focused' && incomingInputValue==false && currentFormData.fields[field].touched==false){
            handleInputChange(field,true,'touched'); // set touch state to be true, allowing for future validation. Validate onBlur. 
            try {
                selectedField.validation.validateSync(currentFormData.fields[field].value,{abortEarly: false})
                selectedField.currentErrors  = [];
            } catch (err) {
                selectedField.currentErrors = err.errors;
            }
        }
        
        //First onClick will NOT validate, only onblur will validate, and any future attempts will validate.
        if(targetFieldKey=='value' && currentFormData.fields[field].touched==true){
            try {
                selectedField.validation.validateSync(incomingInputValue,{abortEarly: false})
                selectedField.currentErrors  = [];
            } catch (err) {
                console.log(err.errors);
                selectedField.currentErrors = err.errors;
            }
        }

    }

    useEffect(() => {
        console.log('form has been updated')
    }, [currentFormData]);
  
    var optionsObject ={
        pizza:{
            displayValue: 'Pizza',
            storeValue: 'food_pizza',
        },
        taco:{
            displayValue:'Taco',
            storeValue:'food_taco',
        }
    }

  return (
    <div className="py-16 text-highContrastWhite">
      <div className="flex flex-row  flex-wrap">
       
          {
              Object.keys(defaultFormObject.fields).map(function(fieldName) {
                  var defaultFieldData = defaultFormObject.fields[fieldName];

                  var inputStateClasses = "ring-mediumContrastGray ring-1";
                  const selectedField = currentFormData.fields[fieldName];
                  if(!selectedField.currentErrors.length && selectedField.touched){
                    inputStateClasses = 'ring-success ring-1';
                  }else if(selectedField.touched && selectedField.currentErrors.length!=0){
                    inputStateClasses = 'ring-danger ring-1';
                  }

                    return (
                       <Input 
                        defaultFieldData={defaultFieldData}
                        currentFormData={currentFormData}
                        handleInputChange={handleInputChange}
                        fieldName={fieldName}
                        inputStateClasses={inputStateClasses}
                       />
                    )
              })
          }
        <div className="flex flex-col w-1/3">
            <label className="pb-2 font-medium ml-1">Select Picker:</label>
            <Select options={optionsObject}/>
        </div>
        <div className="flex flex-col w-1/3">
            <label className="pb-2 font-medium ml-1">Checkbox:</label>
            <div className="flex items-center ml-1">
                <input type="checkbox" id="checkbox-1" className=" transition duration-75
                rounded-md mr-3
                h-4 w-4 border-slate-500 border-2
                bg-lowContrastGray p-2 cursor-pointer 
                checked:border-brand  checked:bg-highContrast
                focus:ring-0 checked:ring-0 ring-0 focus:border-slate-500 focus:ring-offset-0 checked:bg-slate-500 text-brand
                " />
                <label className="cursor-pointer" for="checkbox-1">Hello World</label>
            </div>
            <div className="flex items-center ml-1 mt-2">
                <input type="checkbox" id="checkbox-2" className=" transition duration-75
                rounded-md mr-3
                h-4 w-4 border-slate-500 border-2
                bg-lowContrastGray p-2 cursor-pointer 
                checked:border-brand  checked:bg-highContrast
                focus:ring-0 checked:ring-0 ring-0 focus:border-slate-500 focus:ring-offset-0 checked:bg-slate-500 text-brand
                " />
                <label className="cursor-pointer" for="checkbox-2">Goodbye Sky</label>
            </div>

        </div>

      </div>


      <div className="mt-36 font-jetbrains">
        <div>Output:</div>
        <pre className="bg-gray-600 rounded-sm px-5 py-3 mt-3">
        {JSON.stringify(currentFormData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
