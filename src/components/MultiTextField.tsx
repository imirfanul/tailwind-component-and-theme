
import React, { useEffect, useState } from "react"
import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { generateRandomString } from "@/lib/helpers"
import CustomTextField, { CustomTextFieldProps } from "./CustomTextField"

export interface MultipleTextFieldProps extends Omit<CustomTextFieldProps, 'name'> {
  name: string
  fieldDataList: any[]
  setFieldDataList: (arg: any[]) => void
  placeholder?: string
  isError?: boolean
}

const MultiTextField: React.FC<MultipleTextFieldProps> = ({
  name,
  fieldDataList,
  setFieldDataList,
  placeholder = "",
  isError,
  handleChange,
  ...rest
}) => {
  const [textFields, setTextFields] = useState<any[]>([])

  useEffect(() => {
    const mapArray: any[] = []
    if (!!fieldDataList && fieldDataList.length > 0) {
      fieldDataList.map((item) =>
        mapArray.push({ [name]: item, id: generateRandomString(10) })
      )
      setTextFields(mapArray)
    } else {
      setTextFields([{ [name]: "", id: generateRandomString(10) }])
    }
  }, [fieldDataList, name])

  const handleInputArrayChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputArrayData: any[] = []
    const { name: fieldName, value } = e.target
    const list = [...textFields]
    list[index][fieldName] = value
    setTextFields(list)
    textFields.forEach((data) => inputArrayData.push(data[fieldName]))
    setFieldDataList(inputArrayData)
  }

  const handleRemoveClick = (id: string) => {
    const tempTextFieldsArray: any[] = []
    let textFieldCopy = [...textFields]

    textFieldCopy = textFieldCopy.filter((list) => list.id !== id)
    setTextFields(textFieldCopy)

    textFieldCopy.forEach((textField) => tempTextFieldsArray.push(textField[name]))
    setFieldDataList(tempTextFieldsArray)
  }

  const handleAddClick = () => {
    setTextFields([...textFields, { [name]: "", id: generateRandomString(10) }])
  }

  return (
    <div className="space-y-3">
      {textFields.length > 0 &&
        textFields.map((item, index) => (
          <div
            key={item.id + generateRandomString(10)}
            className="flex items-start gap-2"
          >
            <div className="flex-1">
              <CustomTextField
                name={name}
                id={item.id}
                placeholder={placeholder}
                defaultValue={item[name]}
                handleOnBlur={(e) => handleInputArrayChange(e, index)}
                error={isError && (item[name] === "" || item[name] === undefined)}
                helperText={
                  isError && (item[name] === "" || item[name] === undefined)
                    ? "Field cannot be empty"
                    : undefined
                }
                {...rest}
              />
            </div>
            
            <div className="flex gap-1 pt-2">
              {textFields.length - 1 === index && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddClick}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Add field</span>
                </Button>
              )}
              
              {textFields.length !== 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemoveClick(item.id)}
                  className="h-8 w-8 p-0 hover:bg-error hover:text-error-foreground"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove field</span>
                </Button>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

export default MultiTextField
